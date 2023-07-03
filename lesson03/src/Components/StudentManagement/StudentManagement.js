import { useState } from "react";
import Form from "../Form.js";
import StudentTable from "../StudentTable";
import { v4 as uuidv4 } from "uuid";
import { FILTER_OPTIONS } from "../../utils/constants.js";

const StudentManagement = () => {
  const [studentList, setStudentList] = useState([]);
  const [sortOption, setSortOption] = useState(FILTER_OPTIONS.DEFAULT);
  const onSubmitStudent = (student) => {
    const newStudent = {
      ...student,
      id: uuidv4(),
    };
    setStudentList([...studentList, newStudent]);
  };
  const onDeleteHandler = (id) => {
    const filteredStudentList = studentList.filter(
      (student) => student.id !== id
    );
    setStudentList(filteredStudentList);
  };
  const onOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const getGPA = (student) =>
    ((+student.math + +student.phy + +student.chem) / 3).toFixed(1);
  const sortStudentList = (studentList, sortOption) => {
    let sortedStudentList = [...studentList];
    switch (sortOption) {
      case FILTER_OPTIONS.ASCENDING:
        {
          sortedStudentList = studentList.sort(
            (studentA, studentB) => getGPA(studentA) - getGPA(studentB)
          );
        }
        break;
      case FILTER_OPTIONS.DESCENDING:
        sortedStudentList = studentList.sort(
          (studentA, studentB) => getGPA(studentB) - getGPA(studentA)
        );
        break;
      case FILTER_OPTIONS.A_TO_Z:
        sortedStudentList = studentList.sort((studentA, studentB) =>
          studentA.studentName
            .toLowerCase()
            .localeCompare(studentB.studentName.toLowerCase())
        );
        break;
      case FILTER_OPTIONS.Z_TO_A:
        sortedStudentList = studentList.sort((studentA, studentB) =>
          studentB.studentName
            .toLowerCase()
            .localeCompare(studentA.studentName.toLowerCase())
        );
        break;
      case FILTER_OPTIONS.DEFAULT:
      default:
        return studentList;
    }
    return sortedStudentList;
  };
  const sortedStudentValues = sortStudentList(studentList, sortOption);
  return (
    <div className="container">
      <h1>Dự án quản lý học sinh</h1>
      <Form onSubmitStudent={onSubmitStudent} />
      <div className="d-flex align-items-center justify-content-end gap-2 my-3">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={onOptionChange}
        >
          <option value={FILTER_OPTIONS.DEFAULT}>Sắp xếp</option>
          <option value={FILTER_OPTIONS.ASCENDING}>GPA tăng dần</option>
          <option value={FILTER_OPTIONS.DESCENDING}>GPA giảm dần</option>
          <option value={FILTER_OPTIONS.A_TO_Z}>Theo: A {"->"} Z</option>
          <option value={FILTER_OPTIONS.Z_TO_A}>Theo: Z {"->"} A</option>
        </select>
      </div>
      <div className="student-list">
        <StudentTable
          studentList={sortedStudentValues}
          onDeleteHandler={onDeleteHandler}
        />
      </div>
    </div>
  );
};
export default StudentManagement;
