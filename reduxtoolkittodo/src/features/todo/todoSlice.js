import {createSlice, nanoid} from '@reduxjs/toolkit';


const initialState = {
    todos: [{id :1, text:"hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const todo = {
                id : nanoid(),
                 text: action.payload  //payload is an object that contains the text of the todo. It can contain anything like id, email, etc. 
            }
            state.todos.push(todo); //push the todo to the todos array
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload); //filter out the todo with the given id
        
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
})