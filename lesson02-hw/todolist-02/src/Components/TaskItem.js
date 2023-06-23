
import Icon from "./Icon.js";

const TaskItem = ({todos}) => {
    const { key, title, isCompleted, color } = todos;
    return (
        <div className={"task-item "+color}>
        <span id={key} type={isCompleted}>{title}</span>
        <Icon />
        </div>
    )
}

export default TaskItem