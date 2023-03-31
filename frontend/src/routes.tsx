import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateGraph } from "./pages/CreateGraph";
import { Home } from "./pages/Home";
import { UploadGraph } from "./pages/UploadGraph";
import { graphProvider } from "./common/context/graphContext";
import { useState } from "react";
import { graphContext } from "./common/context/graphContext";
// import { fileContext } from "./common/context/fileContext";

export function Router() {
  const [graph, setGraph] = useState({});
  return (
    <>
      <graphContext.Provider value={{ graph, setGraph }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            ></Route>
            <Route
              path="/upload"
              element={<UploadGraph />}
            ></Route>
            <Route
              path="/create"
              element={<CreateGraph />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </graphContext.Provider>
    </>
  );
}
