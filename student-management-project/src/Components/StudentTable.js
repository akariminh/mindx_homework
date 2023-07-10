import Student from "./Student/Student";

const StudentTable = (props) => {
  const { studentList, onDeleteHandler, onOpenUpdateStudentModal } = props;
  const renderStudentList = studentList.map((student, index) => {
    return <Student student={student} index={index} onDeleteHandler={onDeleteHandler} onOpenUpdateStudentModal ={onOpenUpdateStudentModal } />;
  });
  return (
    <div className="student-list">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Họ và Tên</th>
            <th scope="col">Lớp</th>
            <th scope="col">Điểm toán</th>
            <th scope="col">Điểm lý</th>
            <th scope="col">Điểm hóa</th>
            <th scope="col">GPA</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderStudentList}</tbody>
      </table>
    </div>
  );
};

export default StudentTable;
