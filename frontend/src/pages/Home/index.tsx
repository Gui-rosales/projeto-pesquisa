import { useRef, ChangeEvent, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import networkingLogo from "../../assets/networking.svg";
import uploadLogo from "../../assets/upload.svg";
import { graphContext } from "../../common/context/graphContext";
import { api } from "../../utils/api";
import "./styles.scss";

export function Home() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | undefined>();
  const { graph, setGraph } = useContext(graphContext);
  const hiddenFileinput = useRef<HTMLInputElement | null>(null);

  function handleUploadFileClick() {
    hiddenFileinput.current?.click();
  }
  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    setFile(event.target.files[0]);
    const data = new FormData();
    data.append("file", event.target.files[0]);
    api
      .post("/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        api
          .get(`getGraph/${result.data}`)
          .then((result) => {
            // console.log(graphObject);
            console.log(result.data);
            setGraph(result.data);
          })
          .then(() => navigate("/upload"));
      })
      .catch((e) => console.log(e));
  }

  return (
    <div id="main-container">
      <div className="wrapper">
        <div id="center-container">
          <button
            onClick={() => console.log(graph)}
            className="home-button"
          >
            Create New Graph
            <img
              src={networkingLogo}
              alt="networkingLogo"
              className="logo"
            />
          </button>
          <button
            onClick={handleUploadFileClick}
            className="home-button"
          >
            Upload a Graph
            <img
              src={uploadLogo}
              alt="uploadLogo"
              className="logo"
            />
          </button>
        </div>
      </div>
      <input
        type="file"
        name="file"
        ref={hiddenFileinput}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
}
