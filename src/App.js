import React, { Fragment, useState } from "react";
import './App.css';
import { Folder } from "./components/Folder";
import { File } from "./components/File";
import { folderStructureTree } from "./constants/folderStructureTree";
import FolderIcon from "@mui/icons-material/Folder";
import { Explorer } from "./components/Explorer";

function App() {
  const [explorerData, setExplorerData] = useState(folderStructureTree);
  return (
    <div className="App">
      <Explorer explorer={explorerData} />
      {/* <div className="root">
        <FolderIcon />
        <span>{folderStructureTree.name}</span>
      </div>
      <div className="body">
      {folderStructureTree.items.length > 0 &&
          folderStructureTree.items.map((data) => {
            return (
              <Fragment key={data.id}>
                {data.isFolder ? (
                  <Folder folderData={data} />
                ) : (
                  <File fileData={data} />
                )}
              </Fragment>
            );
          })}
      </div> */}
    </div>
  );
}

export default App;
