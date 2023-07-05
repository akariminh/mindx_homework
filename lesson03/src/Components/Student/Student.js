
const Student = (props) => {
  const {student, index, onDeleteHandler,  onOpenUpdateStudentModal } = props
  const { studentName, classCode, math, phy, chem, id } = student || {};
  const gpa = ((+math + +phy + +chem) / 3).toFixed(1);
  return (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{studentName}</td>
            <td>{classCode}</td>
            <td>{math}</td>
            <td>{phy}</td>
            <td>{chem}</td>
            <td>{gpa}</td>
            <td><button type="button" className="btn btn-danger me-2" onClick={() => onDeleteHandler(id)}>Delete</button>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addStudentForm" onClick={() => onOpenUpdateStudentModal (id)}>Update</button></td>
          </tr>
  );
};
export default Student;
