import  { useState } from "react";
interface Task {
    text: string;
    completed: boolean;
  }
function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index:number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index:number) => {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} style={{ textDecoration: t.completed ? "line-through" : "none" }}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleComplete(index)}
            />
            {t.text}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
