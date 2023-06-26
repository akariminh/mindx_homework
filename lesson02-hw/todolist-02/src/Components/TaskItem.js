import Icon from "./Icon.js";

const TaskItem = ({ id, title, isCompleted, color }) => {
    // const {id, title, isCompleted, color} = todos;
    return (
        <div className={"task-item "+color}>
        <p id={id} type={isCompleted}>{title}</p>     
        <Icon />
        </div>
    )
}


export default TaskItem