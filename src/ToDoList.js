import { useState } from "react";

const ToDoList = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks([...tasks, { id: Date.now(), text: newTask }]);
        setNewTask('');
      };
    
    const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    };

    const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
    };

    return ( 
        <div className="to-do-list">
            <h2>To-Do List</h2>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                <li key={task.id}>
                    {task.text}
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
                ))}
            </ul>
        </div>
    );
}
 
export default ToDoList;