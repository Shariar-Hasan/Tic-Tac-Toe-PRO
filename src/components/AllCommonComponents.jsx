
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
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default AllCommonComponents