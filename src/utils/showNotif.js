import { toast } from "react-toastify";
const DEFUALT_NOTIF = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
}

const notif = (type, title) => {
    type === "success" ? 
    toast.success(`${title} added to the bascket!`, DEFUALT_NOTIF):
    toast.error(`${title} remove from bascket!`, DEFUALT_NOTIF)
}
export {notif}