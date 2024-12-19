import {EmployeeModel} from "../models/UserModel.js";


export const CreateEmployeeService = async (req) => {
    try{
        let reqBody = req.body
        let existingEmployee  = await EmployeeModel.findOne({email: reqBody.email})

        if(existingEmployee ) {
            return {
                status : "failed",
                msg: "Email already exists"
            }
        }
        await EmployeeModel.create(reqBody)

        return {
            status : "success",
            msg  : "Add employee successfully",
        }
    }
    catch(error){
        return{
            status: "failed",
            msg: "createEmployee failed"
        }
    }
}

export const ReadEmployeeListService = async (req)=> {
    try{
        let data = await EmployeeModel.find()

        return {
            status: "success",
            msg: "Employee list read successfully",
            data: data
        }
    }
    catch(error){
        return{
            status: "failed",
            msg: "Employee list read failed"
        }
    }
}

export const UpdateEmployeeListService = async (req)=> {
    try{
        let userID = req.params.id
        let reqBody = req.body
        let data = await EmployeeModel.updateOne(
            {_id:userID},
            {$set: reqBody}
        )

        return {
            status: "success",
            msg: "Employee list read successfully",
            data: data
        }
    }
    catch(error){
        return{
            status: "failed",
            msg: "Employee list read failed"
        }
    }
}


export const DeleteEmployeeService = async (req)=> {
    try{
        let userID = req.params.id
        let data = await EmployeeModel.deleteOne({_id:userID})
        return{
            status: "success",
            msg: "Employee list delete successfully",
            data: data
        }
    }
    catch (err) {
        return{
            status: "failed",
            msg: "Employee list delete failed",
            error : err.toString()
        }
    }
}
