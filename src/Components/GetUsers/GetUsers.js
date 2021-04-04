import React, { useEffect, useState } from "react";
import { db } from "../../Firebase/firebase";

function GetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // getData();
    db.collection("Clients").onSnapshot((snapshot) =>
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div>
      <div className="product-container">
        {users.map((item) => {
          const {
            id,
            data: { firstname, photo, lastname, email },
          } = item;
          return (
            <div key={id}>
              <div className="col s12">
                <div className="card-panel grey lighten-5 z-depth-1">
                  <div className="row valign-wrapper">
                    <div className="col s2">
                      <img
                        src={photo}
                        alt=""
                        className="circle responsive-img "
                      />
                    </div>
                    <div className="col s10">
                      <p>YOU FIRST_NAME IS {firstname} :</p>
                      <p>YOUR LAST_NAME IS : {lastname}</p>
                      <p>YOUR EMAIL: {email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GetUsers;
