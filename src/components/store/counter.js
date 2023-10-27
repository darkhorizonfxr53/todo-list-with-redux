// import { createSlice } from "@reduxjs/toolkit";

// export const counterSlice = createSlice({
// // This is the name of the slice of state that we will implement in our
// // empty store.
// name: "counter",
// // This is the initial state for your slice of state. This can be
// // anything from an empty array or other data structure that your
// // application requires to avoid prop drilling.

// initialState: {
// value: 0,
// },

// //Reducer.js info
// // Add_todo{
// // 
// //     reducer: [{}]
// // }
// //}

// //Reducers are an actions that we can take on an inital state


// // /// Delete_todo{
// // //
// //             reducer: [{}]
// // }
// // }

// reducers: {
// // we want the increment action type to add one to our
// // value, which is now set to zero in our initial state.
// increment: (state) => {
// state.value += 1;
// },
// // Second example, our action type will reduce the initial state or
// // current state by decrementing by 1.
// decrement: (state) => {
// state.value -= 1;
// },

// incrementByAmount: (state, action) => {
// state.value += action.payload;
// },
// },
// });

// export const { increment, decrement, incrementByAmount, resetValuetoZero
// } =
// counterSlice.actions;

// export default counterSlice.reducer ();


/*

const initalState : {
   nextId:2,
   data:
   {
        1: {
            content: "content 1"
            completed: false
        }
   }
        2: {
            content: "content 2"
            completed: false
        }

        3: {
            content: "content 3"
            completed: false
        }
}

reducers: {
    Add_todo: (state, action) => {
        state.data.
    }


}

*/