import { useState } from "react";
const Form = (props) => {
  const initialState = {
    studentName: "",
    classCode: "",
    math: "",
    phy: "",
    chem: "",
  };
  const { onSubmitStudent } = props;
  const [student, setStudent] = useState([]);
  const onInputHandler = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // const newStudent = { ...student, id: uuidv4() };
    // setStudent({...initialStudentState, newStudent});
    onSubmitStudent(student);
    setStudent({ ...initialState });
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">
            Họ và tên:
          </label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            name="studentName"
            value={student.studentName}
            onChange={onInputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="classCode" className="form-label">
            Lớp:
          </label>
          <input
            type="text"
            className="form-control"
            id="classCode"
            name="classCode"
            value={student.classCode}
            onChange={onInputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="math" className="form-label">
            Điểm Toán:
          </label>
          <input
            type="number"
            className="form-control"
            id="math"
            name="math"
            value={student.math}
            onChange={onInputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phy" className="form-label">
            Điểm Lý:
          </label>
          <input
            type="number"
            className="form-control"
            id="phy"
            name="phy"
            value={student.phy}
            onChange={onInputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="chem" className="form-label">
            Điểm Hóa:
          </label>
          <input
            type="number"
            className="form-control"
            id="chem"
            value={student.chem}
            onChange={onInputHandler}
            name="chem"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Thêm mới học sinh
        </button>
      </form>
    </div>
  );
};
export default Form;
