// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import "./App.css";


// const Buttons = () => {

//     const todos = useSelector((state) => state.todos);
//     const dispatch = useDispatch();
//     const [task, setTask] = useState('');
//     const ADD_TODO = 'ADD_TODO';
//     const DELETE_TODO = 'DELETE_TODO';
//     const EDIT_TODO = 'EDIT_TODO';
//     const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
  
//     const handleAddTodo = () => {
//       if (task.trim()) {
//         dispatch({
//           type: ADD_TODO,
//           payload: {
//             id: Date.now(),
//             task,
//             completed: false,
//           },
//         });
//         setTask('');
//       }
//     };
  
//     const handleDeleteTodo = (id) => {
//       dispatch({
//         type: DELETE_TODO,
//         payload: id,
//       });
//     };
  
//     const handleEditTodo = (id, newTask) => {
//       dispatch({
//         type: EDIT_TODO,
//         payload: {
//           id,
//           task: newTask,
//         },
//       });
//     };
  
//     const handleToggleCompleted = (id) => {
//       dispatch({
//         type: TOGGLE_COMPLETED,
//         payload: id,
//       });
//     };
  
//     return (
//       <div>
//         <h1>To-Do App</h1>
//         <form onSubmit={handleAddTodo}>
//           <input
//             type="text"
//             placeholder="Enter a task"
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//           />
//           <button type="submit">Add Task</button>
//         </form>
//         <ul>
//           {todos.map((todo) => (
//             <li key={todo.id}>
//               {todo.task}
//               {!todo.completed && (
//                 <button onClick={() => handleToggleCompleted(todo.id)}>Completed</button>
//               )}
//               <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//               <button onClick={() => handleEditTodo(todo.id, prompt('Enter new task', todo.task))}>
//                 Edit
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
// }

// export default Buttons;