import { IoArrowBackOutline } from "react-icons/io5"
import { BiSolidMessageError } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="w-screen h-[80vh] flex justify-center items-center">
            <div className="flex flex-col text-center">
                <h1 className="text-4xl  mb-3">
                    <BiSolidMessageError className="mx-auto text-red-600" />
                </h1>

                <h1 className="text-4xl">Page not found</h1>
                <p className="font-sans py-4">404 Error</p>
                <button
                    onClick={() => navigate("/")}
                    className="flex justify-center px-3 py-4 bg-gray-900 text-gray-200">
                    <IoArrowBackOutline className="text-2xl mr-3" />
                    <span>Back to Homepage</span>
                </button>
            </div>
        </div>
    )
}

export default NotFound