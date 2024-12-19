import {
    CreateEmployeeService,
    DeleteEmployeeService,
    ReadEmployeeListService,
    UpdateEmployeeListService
} from "../services/TodoService.js";


export const CreateEmployee = async (req, res) => {
    let result = await CreateEmployeeService(req)
    return res.json(result)
}

export const ReadEmployeeList = async (req, res) => {
    let result = await ReadEmployeeListService(req)
    return res.json(result)
}
export const UpdateEmployeeList = async (req, res) => {
    let result = await UpdateEmployeeListService(req)
    return res.json(result)
}
export const DeleteEmployee = async (req, res) => {
    let result = await DeleteEmployeeService(req)
    return res.json(result)
}