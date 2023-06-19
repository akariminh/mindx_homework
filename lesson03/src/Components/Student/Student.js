import './Student.css';

const Student = (props) => {
    const { studentName, classCode, math, phy, chem } = props;
    return (
        <div class="student">
            <h6 class="student-name">{studentName}</h6>
            <h7>Lớp: {classCode}</h7>
            <ul>
                <li className="math">Điểm Toán: {math}</li>
                <li className="phy">Điểm Lý: {phy}</li>
                <li className="chem">Điểm Hóa: {chem}</li>
            </ul>
        </div>
    )
}
export default Student