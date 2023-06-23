// Under construction
import TaskItem from './TaskItem.js'

// let todos = [
//     {
//         id: "1",
//         title: "Do homework",
//         isCompleted: false,
//         color: "default"
//     },
//     {
//         id: "2",
//         title: "Exercise",
//         isCompleted: false,
//         color: "red"
//     }
// ];
const TaskList = ({ todos}) => {
    const taskListRender = todos.map((todo) => {
        const { id, title, isCompleted, color } = todo;
        return (
            <TaskItem 
            key={id}
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