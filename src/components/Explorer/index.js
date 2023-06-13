import React, { useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Explorer = ({ explorer }) => {
    const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div style={{marginTop: 5}}>
        <div className="folder" onClick={() => setExpand(!expand)}>
        {expand ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            📁
          <span>{explorer.name}</span>
        </div>
        <div style={{display: expand ? "block" : "none", paddingLeft: 25}}>
            {explorer.items.map((data) => {
                return(
                    <Explorer key={data.id} explorer={data} />
                )
            })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>;
  }
};
