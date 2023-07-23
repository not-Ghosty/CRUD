import axios from "axios";
import React, {useEffect, useState} from "react";
import style from "./home.module.css";
import {Link} from "react-router-dom";
const Users = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/content")
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        console.log("Check the program");
      });
  }, [data]);

  let deleteData = (index) => {
    axios.delete(`http://localhost:4000/content/${index}`);
    // window.location.assign("/users")
    //In the above line assign is a method of BOM(browser object model)
    //which is used to reload the page henever we click the delete button
  };
  return (
    <div id={style.Users}>
      {data.map((x) => {
        return (
          <section>
            <div id={style.users}>
              <h1 id={style.emphead}>Employee {x.id}</h1>
              <div id={style.user}>
                <h2>Name: {x.name}</h2>
                <h2>Salary: {x.salary}</h2>
                <h2>Company: {x.company}</h2>
                <div id={style.Udiv}>
                  <span className={style.U}>
                    <Link to={`/edit/${x.id}`}>EDIT</Link>{" "}
                  </span>
                  <span className={style.U}>
                    <Link
                      onClick={() => {
                        deleteData(x.id);
                      }}
                    >
                      DELETE
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Users;
