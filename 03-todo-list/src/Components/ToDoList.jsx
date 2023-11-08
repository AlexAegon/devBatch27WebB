import { useState } from "react"

const ToDoList = () => {
const [inputValue, setInputValue] = useState('')


  return (
    <div>
        <h1>LISTA DE TAREAS</h1>
        <
        input type="text" 
        value={inputValue}
        onChange={(evento) => setInputValue(evento.target.value)}

        />
    </div>
  )
}

export default ToDoList