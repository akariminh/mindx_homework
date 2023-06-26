// Under construction
import TaskItem from './TaskItem.js'


const TaskList = ({todos}) => {
    const taskListRender = todos.map((todo) => {
       const { id, title, isCompleted, color } = todo;
        return (
            <TaskItem 
            id={id}
            title={title} 
            isCompleted={isCompleted} 
            color={color} />
        );
    });
    return (<div className="list-wrapper">
        {taskListRender}
    </div>)
}

export default TaskList