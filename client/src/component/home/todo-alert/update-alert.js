import Swal from "sweetalert2";
import store from "@/redux/store/store";
import { editEmployeeRequest } from "@/redux/state/todo/todoSlice";
import toast from "react-hot-toast";

const UpdateAlert = async (index, currentData) => {
    if (index === undefined || !currentData) {
        toast.error("Index and currentData are required for UpdateAlert.");
        return;
    }

    const { value: formValues } = await Swal.fire({
        title: "Update Employee",
        html: `
            <input id="fullName" class="swal2-input" placeholder="Full Name" value="${currentData.fullName || ""}">
            <input id="email" class="swal2-input" placeholder="Email Address" value="${currentData.email || ""}">
            <input id="phone" class="swal2-input" placeholder="Phone Number" value="${currentData.phone || ""}">
        `,
        focusConfirm: false,
        preConfirm: () => {
            const fullName = document.getElementById("fullName").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();

            if (!fullName || !email || !phone) {
                Swal.showValidationMessage("All fields are required!");
                return null;
            }
            return { fullName, email, phone };
        }
    });

    if (formValues) {
        store.dispatch(editEmployeeRequest({ index, updatedData: formValues }));
        Swal.fire("Success!", "Employee updated successfully.", "success");
    }
};

export default UpdateAlert;