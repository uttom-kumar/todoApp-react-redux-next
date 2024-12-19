import express from 'express'
import {CreateEmployee, DeleteEmployee, ReadEmployeeList, UpdateEmployeeList} from "../controllers/TodoController.js";
const router = express.Router()


router.post('/CreateEmployee', CreateEmployee)
router.get('/ReadEmployeeList', ReadEmployeeList)
router.post('/DeleteEmployee/:id', DeleteEmployee)
router.post('/UpdateEmployeeList/:id', UpdateEmployeeList)





export default router;