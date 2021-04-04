import React from "react";
import { fbStorage } from "../../Firebase/firebase";

function FileOnly() {
  const fileHandler = (e) => {
    const file = e.target.files[0];
    const storageRef = fbStorage.ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("uploaded");
    });
  };

  return (
    <div>
      <div className="file-field input-field">
        <div className="btn">
          <span>File</span>
          <input type="file" onChange={fileHandler} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
    </div>
  );
}

export default FileOnly;
