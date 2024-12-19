'use client';
import React, {useEffect} from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import {addEmployeeRequest, editEmployeeRequest, updateEmployeeForm} from "@/redux/state/todo/todoSlice";
import DeleteAlert from "@/component/home/todo-alert/delete-alert";
import UpdateAlert from "@/component/home/todo-alert/update-alert";

const TodoAppComponent = () => {
    const dispatch = useDispatch();
    let {employeeForm, employeeList} = useSelector((state) => state.todos)


    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        dispatch(updateEmployeeForm({[name]: value}))
    }

    const submitButton = (e) => {
        e.preventDefault();
        const { fullName, email, phone } = employeeForm;
        if(!fullName && !email && !phone) {
            return toast.error('all fields are required');
        }
        if (!fullName) {
            return toast.error('Name is required');
        }
        if (!email) {
            return toast.error('Email is required');
        }
        if (!phone) {
            return toast.error('Phone is required');
        }


        try {
            dispatch(addEmployeeRequest());
            const setEmployeeList = [...employeeList, { ...employeeForm }];
            localStorage.setItem("employeeList", JSON.stringify(setEmployeeList))
            toast.success('Employee added successfully');
        } catch (error) {
            console.error(error);
            toast.error('An error occurred while adding the employee');
        }
    };


    return (
        <>
            <div className="flex flex-col md:flex-row gap-5">
                {/* Left Section */}
                <div className="flex-[4] h-full bg-white shadow rounded p-5">
                    <h1 className="text-[24px] font-bold text-gray-700">Todo App</h1>
                    <form className="mt-3" onSubmit={submitButton}>
                        <div>
                            <input
                                type="text"
                                className="w-full my-2 px-3 py-2 rounded border border-gray-700 focus:outline-green-500 focus:border-gray-700 duration-150"
                                placeholder="Enter your name"
                                name="fullName"
                                value={employeeForm.fullName}
                                onChange={onChangeHandler}
                            />
                            <input
                                type="email"
                                className="w-full my-2 px-3 py-2 rounded border border-gray-700 focus:outline-green-500 focus:border-gray-700 duration-150"
                                placeholder="Enter your email"
                                name="email"
                                value={employeeForm.email}
                                onChange={onChangeHandler}
                            />
                            <input
                                type="tel"
                                className="w-full my-2 px-3 py-2 rounded border border-gray-700 focus:outline-green-500 focus:border-gray-700 duration-150"
                                placeholder="Enter your Phone number"
                                name="phone"
                                value={employeeForm.phone}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-10 py-3 mt-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                        >
                            Add Employee
                        </button>
                    </form>
                </div>

                {/* Right Section */}
                <div className="flex-[8] bg-white shadow rounded p-5">
                    <h1 className="text-[24px] font-bold text-gray-700">Employee List</h1>
                    <div className="overflow-x-auto">
                        <table  className="w-full overflow-x-auto table-auto border-collapse whitespace-nowrap">
                            <thead className="bg-gray-200">
                            <tr>
                                <th className="border px-4 py-2 text-left">No</th>
                                <th className="border px-4 py-2 text-left">Full Name</th>
                                <th className="border px-4 py-2 text-left">Email address</th>
                                <th className="border px-4 py-2 text-left">Phone Number</th>
                                <th className="border px-4 py-2 text-left">Options</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                employeeList?.map((item, i) => {
                                    return (
                                        <tr key={i.toString()}>
                                            <td className="border px-4 py-2">{i+1}</td>
                                            <td className="border px-4 py-2">{item?.fullName}</td>
                                            <td className="border px-4 py-2">{item?.email}</td>
                                            <td className="border px-4 py-2">{item?.phone}</td>
                                            <td className="border px-4 py-2">
                                                <button className="px-4 py-1 text-green-500  rounded"
                                                    onClick={() => UpdateAlert(i, item)}
                                                ><FaEdit/></button>
                                                <button className="p-2  text-red-600 rounded ml-2"
                                                    onClick={() => DeleteAlert(i)}
                                                ><MdDelete/></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            {/* More rows can go here */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoAppComponent;
