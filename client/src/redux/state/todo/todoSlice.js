import {createSlice} from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        employeeList : [],
        employeeForm: {fullName: "", email: "",phone:""},
    },
    reducers: {
        updateEmployeeForm: (state, action) => {
            state.employeeForm = { ...state.employeeForm, ...action.payload };
        },
        addEmployeeRequest: (state) => {
            if (
                state.employeeForm.fullName &&
                state.employeeForm.email &&
                state.employeeForm.phone
            ) {
                state.employeeList.push({ ...state.employeeForm })
                state.employeeForm = { fullName: "", email: "", phone: "" }
            }
        },
        removeEmployeeRequest: (state, action) => {
            state.employeeList = state.employeeList.filter((_, index) => index !== action.payload);
        },
        editEmployeeRequest: (state, action) => {
            const { index, updatedData } = action.payload;
            if (state.employeeList[index]) {
                state.employeeList[index] = { ...state.employeeList[index], ...updatedData };
            }
        },

    }
})

export const {updateEmployeeForm, addEmployeeRequest,removeEmployeeRequest,editEmployeeRequest } = todoSlice.actions
export default todoSlice.reducer
