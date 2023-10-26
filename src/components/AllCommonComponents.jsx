
import { ToastContainer } from 'react-toastify'

import "react-toastify/dist/ReactToastify.css";
const AllCommonComponents = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                toastClassName={"bg-brand text-white"}
            />
        </>
    )
}

export default AllCommonComponents