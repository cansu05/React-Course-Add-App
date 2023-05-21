import { useState } from "react";
import "./App.css";
import CourseAdd from "./companent/CourseAdd.js";

function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Ccsharp", "CompleteWeb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };
  const courseList = courses.map((course, index) => {
    return <CourseAdd key={index} courseName={course} />;
  });
  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>Course Add</button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
