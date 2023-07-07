const TaskItem = ({todo, onRemoveTaskHandler, onOpenUpdateTaskHandler }) => {
    const { id, task, isCompleted, color } = todo || {};
    return (
        <div className={"task-item " + color + (isCompleted ? " completed" : "")} >
            <p>{task}</p>
            <div className="icon-list">
                <button className="icon">
                    <i className="fa-regular fa-square">
                    </i>
                </button>
                <button className="icon" onClick={() => onRemoveTaskHandler(id)}>
                    <i className="fa-solid fa-trash-can">
                    </i>
                </button>
                <button className="icon" onClick={() => onOpenUpdateTaskHandler (id)}>
                    <i className="fa-solid fa-pen">
                    </i>
                </button>
                <button className="icon">
                    <i className="fa-solid fa-palette">
                    </i>
                </button>

            </div>
        </div>
    )
}


export default TaskItem