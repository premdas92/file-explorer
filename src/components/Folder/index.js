import React, { Fragment } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import { File } from "../File";

export const Folder = ({ folderData }) => {
    console.log(folderData, 'folderData')
    return (
        <div className="folder">
            <div className="icon-wrapper">
            <FolderIcon />
            <span>{folderData.name}</span>
            </div>
            {folderData.items.length > 0 &&
                folderData.items.map((data) => {
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
        </div>
    )
}