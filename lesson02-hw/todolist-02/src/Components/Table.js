import TaskInput from './TaskInput.js'
import AddBtn from "./AddBtn.js"
import TaskStt from "./TaskStt.js"
import TaskList from "./TaskList.js"

const Table = () =>{
    return (
        <div className="container">
            <form className="my-form">
            <TaskInput />
            <AddBtn />
            </form>
            <TaskStt />
            <TaskList />
        </div>
    )
}

export default Table 