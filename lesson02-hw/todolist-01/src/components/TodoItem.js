
const TodoItem = (props) => {
 return (
    <div className="list-item">
    <input type="radio" />{props.title}
    </div>
 )
}

export default TodoItem;