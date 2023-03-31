import { useContext } from "react";
import { MultiDirectedGraph } from "graphology";
import { SigmaContainer } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";
import { graphContext } from "../../common/context/graphContext";
import { random } from "graphology-layout";
import louvain from "graphology-communities-louvain";

export const DisplayGraph = () => {
  const { graph } = useContext(graphContext);
  const newGraph = MultiDirectedGraph.from(graph);
  louvain.assign(newGraph);
  random.assign(newGraph);
  newGraph.forEachNode((node) => {
    newGraph.setNodeAttribute(node, "size", 10);
    newGraph.setNodeAttribute(node, "color", "red");
  });

  return (
    <SigmaContainer
      style={{ height: "800px", width: "800px" }}
      graph={newGraph}
    ></SigmaContainer>
  );
};
