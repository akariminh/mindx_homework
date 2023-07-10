import { useEffect, useState } from "react";
import { FORM_MODE } from "../utils/constants";

const Form = (props) => {
  const initialState = {
    studentName: "",
    classCode: "",
    math: "",
    phy: "",
    chem: "",
  };
  const {
    onSubmitStudent,
    onUpdateStudent,
    initialValues,
  } = props;
  const [student, setStudent] = useState([]);
  const [formMode, setFormMode] = useState(FORM_MODE.CREATE);
  useEffect(() => {
    const hasInitialValues =
      initialValues.studentName &&
      initialValues.classCode &&
      initialValues.math &&
      initialValues.phy &&
      initialValues.chem;
    if (hasInitialValues) {
      setStudent(initialValues);
      setFormMode(FORM_MODE.UPDATE);
    } else {
      setFormMode(FORM_MODE.CREATE);
    }
  }, [initialValues]);
  const onInputHandler = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Check form Mode
    if (formMode === FORM_MODE.CREATE) {
      onSubmitStudent(student);
    }
    if (formMode === FORM_MODE.UPDATE) {
      onUpdateStudent(student);
    }
    setStudent({ ...initialState });
    setFormMode(FORM_MODE.CREATE);
  };
  return (
    <div className="modal fade" tabIndex="-1" id="addStudentForm">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">
              {formMode === FORM_MODE.CREATE
                ? "Thêm mới học sinh"
                : "Cập nhật học sinh"}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
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
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>
                <button className="btn btn-primary" type="submit">
                  {formMode === FORM_MODE.CREATE
                    ? "Thêm mới học sinh"
                    : "Cập nhật học sinh"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
