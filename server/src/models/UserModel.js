import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    fullName: {type: String, required: true},
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address']
    },
    phone: {type: String, required: true}
},{timestamps: true, versionKey: false});

export const EmployeeModel = mongoose.model('employees', DataSchema)

