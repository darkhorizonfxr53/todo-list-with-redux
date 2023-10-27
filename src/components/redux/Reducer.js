import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;



// Please ignore this as this is for educational purposes.
//import { createSlice } from "@reduxjs/toolkit";
// // Initial state of the reducer
// const initialState = {
//   nextId: 2,
//   data: {
//     1: {
//       content: 'Content 1',
//       completed: false,
//     },
//   },
// };

// /*
// Will now insert the reducer functions for add, edit, delete and completed.
// Since Reducers are an actions that we can take on an inital state, we will insert 4 reducer functions, for each case. 
// Each function will handle the specific type of action type and update the state accordingly, usng the spread syntax(...)
// to create a new state object while preserving immutability

// */

// // Reducer function for adding a new todo
// addTodos: (state, action) => {
//   state.push(action.payload);
//   return state;
// },
// // const addTodoReducer = (state, action) => {
// //   const { id, content, completed } = action.payload;
// //   return {
// //     nextId: state.nextId + 1, //Removed a "...state" due to it being redundant.
// //     data: {
// //       ...state.data,  //This is NB! To capture all previous todos.
// //       [id]: {
// //         content,
// //         completed,
// //       },
// //     },
// //   };
// // };

// // Reducer function for editing a todo     
// // Vaccum
// //Clean the dishes
// //Polish
// //Clean the ceiling corners  = Completed
// updateTodos: (state, action) => {
//   return state.map((todo) => {
//     if (todo.id === action.payload.id) {
//       return {
//         ...todo,
//         item: action.payload.item,
//       };
//     }
//     return todo;
//   });
// },

// // Reducer function for deleting a todo
// removeTodos: (state, action) => {
//   return state.filter((item) => item.id !== action.payload);
// },

// // Reducer function for completing a todo
//     //completed
//     completeTodos: (state, action) => {
//       return state.map((todo) => {
//         if (todo.id === action.payload) {
//           return {
//             ...todo,
//             completed: true,
//           };
//         }
//         return todo;
//       });
//     },

// /* The paylod of the action object contains the needed information for each action, such as ID, content, and the completed
// status of the todo. 

// /* 
//  Main reducer function
// The following function will act as a switch statement that delegates the actions to the appropriate reducer functions based on action type
// It returns the updated state or the current state of the action type isn't recognized. 
// */

// export const {
//   addTodos,
//   removeTodos,
//   updateTodos,
//   completeTodos
// } = addTodoReducer.actions;
// export const reducer = addTodoReducer.reducer