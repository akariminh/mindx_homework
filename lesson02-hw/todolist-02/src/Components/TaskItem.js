
import Icon from "./Icon.js";
const TaskItem = (props) => {
    const { id, title, isCompleted, color } = props;
    return (
        <div className="task-item">
        <span type={isCompleted}>{title}</span>
        <Icon />
        </div>
    )
}

export default TaskItem