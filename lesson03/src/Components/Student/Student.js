
const Student = (props) => {
  const {student, index, onDeleteHandler} = props
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
            <td><button type="button" class="btn btn-danger" onClick={() => onDeleteHandler(id)}>Delete</button></td>
          </tr>
  );
};
export default Student;
