import axios from "axios";
import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import abc from "./home.module.css";

const Createusers = () => {
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");
  let [valid, setValid] = useState(false);
  let [disable, setDisable] = useState(false);
  let nameref = useRef();
  let salaryref = useRef();
  let companyref = useRef();
  let navigate = useNavigate();

  let getName = (event) => {
    nameref.current.style.borderColor = "black";
    setName(event.target.value);
    setValid(false);
  };
  let getSalary = (event) => {
    salaryref.current.style.borderColor = "black";
    setSalary(event.target.value);
    setValid(false);
  };
  let getCompany = (event) => {
    companyref.current.style.borderColor = "black";
    setCompany(event.target.value);
    setValid(false);
  };
  let formHandle = (e) => {
    if (name.length > 0 && salary !== "" && company.length > 0) {
      e.preventDefault();
      setValid(false);
      setDisable(true);
      let payload = {name, salary, company};
      axios
        .post("http://localhost:4000/content", payload)
        .then(() => {
          console.log("Data has been added");
        })
        .catch(() => {
          console.log("Something went wrong");
        });
      setTimeout(() => {
        setDisable(false);
        setName("");
        setSalary("");
        setCompany("");
        navigate("/users");
      }, 3000);
    } else {
      nameref.current.style.borderColor = "red";
      salaryref.current.style.borderColor = "red";
      companyref.current.style.borderColor = "red";
      setDisable(true);
      setTimeout(() => {
        setValid(true);
        setDisable(false);
      }, 1000);
    }
  };
  return (
    <div id={abc.createusers}>
      <section id={abc.mainform}>
        <form action="">
          <table id={abc.table}>
            <tr>
              <th colSpan="2">
                <h1>Employee details</h1>{" "}
              </th>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Name: </label>
              </td>
              <td>
                <input
                  type="text"
                  value={name}
                  ref={nameref}
                  onChange={getName}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Salary: </label>
              </td>
              <td>
                <input
                  type="text"
                  value={salary}
                  ref={salaryref}
                  onChange={getSalary}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Company: </label>
              </td>
              <td>
                <input
                  type="text"
                  value={company}
                  ref={companyref}
                  onChange={getCompany}
                />
              </td>
            </tr>
            <th colSpan="2" id={abc.buttr}>
              <button id={abc.button} disabled={disable} onClick={formHandle}>
                {disable ? "Processing" : "Submit"}
              </button>
              <br />
              {valid ? <span>Fill all the fields</span> : <></>}
            </th>
          </table>
        </form>
      </section>
    </div>
  );
};

export default Createusers;
