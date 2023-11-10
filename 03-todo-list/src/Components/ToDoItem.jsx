

const ToDoItem = ({todo, handleDelete}) => {
  return (
    <li>
            {todo}
            <button onClick={handleDelete}className="delete-Button">Eliminar</button>
    </li>
  )
}

export default ToDoItem