// Under construction
import TaskItem from './TaskItem.js'
let todos = [
    {
        id: "1",
        title: "Do homework",
        isCompleted: false,
        color: "default"
    },
    {
        id: "2",
        title: "Exercise",
        isCompleted: false,
        color: "red"
    }
];
const TaskList = () => {
    let taskListEle = todos.map((todo) => {
        const { id, title, isCompleted, color } = todo;
        return (
            <TaskItem id={id} title={title} isCompleted={isCompleted} className={color} />
        );
    });
    return (<div className="list-wrapper">
        {taskListEle}
    </div>)
}

export default TaskList