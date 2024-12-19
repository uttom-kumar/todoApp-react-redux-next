import Swal from "sweetalert2";
import store from "@/redux/store/store";
import {removeEmployeeRequest} from "@/redux/state/todo/todoSlice";

const DeleteAlert = (i) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            store.dispatch(removeEmployeeRequest(i))
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
};

export default DeleteAlert;