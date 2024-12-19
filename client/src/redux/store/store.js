import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "@/redux/state/counter/counterSlice";
import todoReducer from "@/redux/state/todo/todoSlice";

export default configureStore({
    reducer: {
        counter : counterReducer,
        todos: todoReducer,
    }
})