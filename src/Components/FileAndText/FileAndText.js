import React, { useState } from "react";
import { fbStorage, db } from "../../Firebase/firebase";
import GetUsers from "../GetUsers/GetUsers";

function FileAndText() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const fileHandler = async (e) => {
    const file = e.target.files[0];
    const storageRef = fbStorage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);

    const fileUrl = await fileRef.getDownloadURL();

    setFileUrl(fileUrl);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    db.collection("Clients").add({
      firstname: firstName,
      lastname: lastName,
      email: email,
      photo: fileUrl,
    });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <form className="col s12 " onSubmit={onSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Placeholder"
                  id="first_name"
                  type="text"
                  className="validate"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <div className="file-field input-field">
                  <div className="btn">
                    <span>Photo</span>
                    <input type="file" onChange={fileHandler} />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button className="btn">Sumbit</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <GetUsers />
    </>
  );
}

export default FileAndText;

// circle responsive-img
