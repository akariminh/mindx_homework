const TaskItem = ({setTodos, todos, id, title, isCompleted, color, todo }) => {
    const onRemoveTaskHandler = () => {
        setTodos(todos.filter((clickedTodo) => clickedTodo.id !== todo.id))
    }
    return (
        <div className={"task-item " + color}>
            <p id={id} type={isCompleted}>{title}</p>
            <div className="icon-list">
                <div className="icon">
                    <i className="fa-regular fa-square">
                    </i>
                </div>
                <div className="icon" onClick={onRemoveTaskHandler}>
                    <i className="fa-solid fa-trash-can">
                    </i>
                </div>
                <div className="icon">
                    <i className="fa-solid fa-pen">
                    </i>
                </div>
                <div className="icon">
                    <i className="fa-solid fa-palette">
                    </i>
                </div>

            </div>
        </div>
    )
}


export default TaskItem