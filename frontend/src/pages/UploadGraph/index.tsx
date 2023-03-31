import { DisplayGraph } from "../../components/Graph";
import "./styles.scss";

export function UploadGraph() {
  return (
    <div className="container">
      <div className="side-bar"></div>
      <div className="graph-wrapper">
        <DisplayGraph></DisplayGraph>
      </div>
    </div>
  );
}
