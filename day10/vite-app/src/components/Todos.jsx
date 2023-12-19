/* eslint-disable no-unused-vars */
import { Square, Trash2, Undo2 } from "lucide-react"
import { useState } from "react"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { v4 as uuidv4 } from "uuid"
import { useLocalStorage } from "../hooks"

const Todo = () => {
  // const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [todos, setTodos] = useLocalStorage("todos", [])
  const activeTodos = todos.filter((todo) => !todo.completed).reverse()
  const completedTodos = todos.filter((todo) => todo.completed)

  const [task, setTask] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState(null)

  const stats = `${completedTodos.length}/${todos.length}`
  const separatorClass =
    completedTodos.length > 0 ? "my-3 border-white" : "hidden"

  const addTodo = (event) => {
    event.preventDefault()

    if (task.length > 2) {
      setTodos([...todos, { id: uuidv4(), task, completed: false }])
      toast.success("Todo added")
      setTask("")
    }
  }

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed
          ? toast.warning("Todo restored")
          : toast.success("Todo completed")
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  const editTodo = (todoId) => {
    setIsEditing(true)
    setSelectedTodo(todos.find((todo) => todo.id === todoId))
  }

  const updateTodo = () => {
    setIsEditing(false)
    setTodos(
      todos.map((todo) => {
        if (todo.id === selectedTodo.id) {
          if (todo.task !== selectedTodo.task) {
            toast.success("Todo updated")
          }
          return selectedTodo
        }
        return todo
      })
    )

    setSelectedTodo(null)
  }

  const deleteTodo = (index) => {
    if (confirm("Are you sure you want to delete this todo?")) {
      setTodos(todos.filter((todo, i) => i !== index))
      toast.error("Todo deleted")
    }
  }

  useEffect(() => {
    // localStorage.setItem('todos', JSON.stringify(todos))
    setTodos(todos)
  }, [todos, setTodos])

  return (
    <>
      <div className="flex justify-between mx-2">
        <div
          className="flex w-full h-2 bg-gray-400 rounded-full overflow-hidden relative top-[5px] grow"
          role="progressbar"
        >
          <div
            className="flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            style={{
              width: `${(completedTodos.length / todos.length) * 100}%`,
            }}
          ></div>
        </div>
        <div className="text-end font-semibold mb-2 text-sm ml-2">{stats}</div>
      </div>

      <form className="flex justify-between" onSubmit={(e) => addTodo(e)}>
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          className="grow rounded border-0 focus:border-0"
          placeholder="Add a todo"
        />
      </form>

      <ul>
        {activeTodos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between p-2 border rounded bg-white mt-2"
          >
            <button className="p-1" onClick={() => toggleTodo(todo.id)}>
              <Square size={14} />
            </button>

            <div className="text-start grow p-1">
              {selectedTodo && selectedTodo.id === todo.id ? (
                <input
                  type="text"
                  value={selectedTodo.task}
                  onChange={(event) =>
                    setSelectedTodo({
                      ...selectedTodo,
                      task: event.target.value,
                    })
                  }
                  className="p-0 m-0 border-0 focus:border-0 focus:ring-0 w-full"
                  placeholder="Add a todo"
                  onBlur={() => updateTodo()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateTodo()
                    }
                  }}
                />
              ) : (
                <span onClick={() => editTodo(todo.id)} className="w-full">
                  {todo.task}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => deleteTodo(index)}
              className="text-sm text-red-600 p-1"
            >
              <Trash2 size={14} />
            </button>
          </li>
        ))}
      </ul>

      <hr className={separatorClass} />

      <ul>
        {completedTodos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between p-2 border rounded bg-slate-100 mt-2"
          >
            <button
              className="p-1 bg-slate-100"
              onClick={() => toggleTodo(todo.id)}
            >
              <Undo2 size={14} />
            </button>

            <span className="text-start grow p-1 text-slate-500 line-through">
              {todo.task}
            </span>

            <button
              type="button"
              onClick={() => deleteTodo(index)}
              className="text-sm text-red-600 p-1"
            >
              <Trash2 size={14} />
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo
