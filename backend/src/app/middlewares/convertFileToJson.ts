import { Request, Response } from "express";

import * as Papa from "papaparse";
import * as fs from "fs";

export async function generateGraphJsonObject(req: Request, res: Response) {
  try {
    const fileName = req.params.fileName;
    const edgeList = fs.readFileSync(`src/public/${fileName}`, "utf8");

    const results = Papa.parse(edgeList, {
      delimiter: " ",
      header: false,
      dynamicTyping: true,
    });

    const edges = results.data.map(function (row: any) {
      return { source: row[0], target: row[1] };
    });

    const filteredEdges = edges.filter((edge) => edge?.source != null);

    const nodes: any = {};

    // Create a unique set of nodes from the edges
    filteredEdges.forEach((edge: any) => {
      if (!nodes[edge.source]) nodes[edge.source] = { key: edge.source };
      if (!nodes[edge.target]) nodes[edge.target] = { key: edge.target };
    });

    // Convert the nodes object into an array
    const nodesArray = Object.values(nodes);

    // Create a JSON object in the format expected by sigma.js
    const graph = {
      nodes: nodesArray,
      edges: filteredEdges,
    };

    res.json(graph);
  } catch (error) {
    res.send({ msg: error });
  }
}
