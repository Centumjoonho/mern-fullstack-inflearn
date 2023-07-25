// FileDownloadLink.js
import React from "react";

const Download = ({ filePath }) => {
    const downloadFileName = filePath.split("/").pop();

    console.log("downloadFileName : " + downloadFileName)
    console.log("filePath : " + filePath)

    return (
        <div>
            <a href={`http://localhost:5000/${filePath}`} download={downloadFileName}>
                {downloadFileName}
            </a>
        </div>
    );
};

export default Download;