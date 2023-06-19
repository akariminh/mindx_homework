import Student from "../Student/Student.js"
import './StudentManagement.css';

const StudentManagement = () => {
    return (
        <div>
            <h1>Dự án quản lý học sinh</h1>
            <div className="student-list">
                <Student
                    classCode="10A"
                    studentName="Nguyễn Văn A"
                    math={10}
                    phy={7}
                    chem={9}
                />
                <Student
                    classCode="10C"
                    studentName="Nguyễn Văn B"
                    math={10}
                    phy={7}
                    chem={9}
                />
                <Student
                    classCode="11A"
                    studentName="Nguyễn Văn C"
                    math={10}
                    phy={7}
                    chem={9}
                />
            </div>

        </div>
    )
}
export default StudentManagement