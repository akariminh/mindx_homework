
import TodoItem from './TodoItem'
const TodoList = () => {
    return (
        <div className="list-item">

            <TodoItem title="Clean up bedroom" />
            <TodoItem title="Buy some milk" />
            <TodoItem title="Jogging" />
            <TodoItem title="Learn React" />
            <TodoItem title="Doing Exercises" />

        </div>
    );
}

export default TodoList