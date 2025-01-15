import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [] // Example: [{ id: 1, text: 'Task 1', completed: false }]
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed; // Toggle the completed status
            }
        }
    }
});

export const { addTask, deleteTask, toggleComplete } = taskSlice.actions;
export default taskSlice.reducer;
