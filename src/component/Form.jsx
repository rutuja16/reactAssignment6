import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AddStudent,EditStudent } from "../Redux/actionSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from "react";

const Form = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [btn, setbtn] = useState('Submit');

    const dispatch = useDispatch();
    const students = useSelector((state) => state.student.find((students) => students.id === id));



    const [details, setDetails] = useState({
        name: "",
        age: "",
        course: "",
        batch: "",
        id: ""
    });

    useEffect(() => {
        if (id === undefined) {
            setDetails({
                name: "",
                age: "",
                course: "",
                batch: "",
                id: "",
            })
        } else if (id === students.id) {
            setbtn("Update")
            setDetails({
                name: students.name,
                age: students.age,
                course: students.course,
                batch: students.batch,
            })
        }
    }, [students, id])

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === undefined) {
      let newData = {
        ...details,
        id: Math.floor(Math.random() * 100000).toString(),
      };
      dispatch(AddStudent(newData))
    } else {
      dispatch(
          EditStudent({
            id:id,
            name:details.name,
            age: details.age,
            course: details.course,
            batch: details.batch,
          })
      )
    }
    navigate("/student");
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <div className="input-conatiner">
          <TextField
            required
            variant="outlined"
            label="Name"
            type="text"
            id="name"
            name="name"
            className="input"
            value={details.name}
            onChange={handleChange}
          /><span className="space"> </span>
          <TextField
            required
            variant="outlined"
            label="Age"
            type="number"
            id="age"
            name="age"
            className="input"
            value={details.age}
            onChange={handleChange}
          />
        </div><br/><br/>
        <div className="input-conatiner">
          <TextField
            required
            variant="outlined"
            label="Course"
            type="text"
            id="course"
            name="course"
            className="input"
            value={details.course}
            onChange={handleChange}
          /><span className="space"> </span>
          <TextField
            required
            variant="outlined"
            label="Batch"
            type="text"
            id="batch"
            name="batch"
            className="input"
            value={details.batch}
            onChange={handleChange}
          />
        </div>
        <div className="btn-container">
          {
            <Link to="/student">
              <button className="cancel-btn">Cancel</button>
            </Link>
          }

          <button type="submit" className="submit-btn">
            {btn}
          </button>
        </div>
      </form>
    </Box>
  );
};

export default Form;