// FileDownloadLink.js
import React from "react";

const Download = ({ filePath }) => {
    const downloadFileName = filePath.split("/").pop();

    return (
        <div>
            <a href={{ filePath }} download={downloadFileName}>
                {downloadFileName}
            </a>
        </div>
    );
};

export default Download;