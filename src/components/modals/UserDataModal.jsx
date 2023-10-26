
import { useEffect } from 'react'
import PopupModal from './PopupModal'
import { useForm } from "react-hook-form"
import { BsFillSendFill } from "react-icons/bs"
import { FaTimes } from "react-icons/fa"
import { errorNotify } from '../../assets/helperFunctions'
const UserDataModal = ({ isOpen, setIsOpen }) => {
    const { register, reset, watch, formState: { errors }, handleSubmit } = useForm()
    const formval = watch()
    useEffect(() => {
        reset({
            username: "Hasan",
            choice: "X"
        })
        console.log(formval)
    }, [])
    const onSubmit = (data) => {
        console.log(data)
    }
    const closeModal = () => {
        console.log("closing", formval)
        if (formval.username === "") {
            errorNotify("Username is not set")
            return
        }
        setIsOpen(false)
    }
    return (
        <PopupModal isOpen={isOpen} closeModal={closeModal} title={"User Information"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-4">
                    <label className='font-bold' htmlFor="username">Username</label>
                    <input
                        type="text"
                        id='username'
                        {...register("username", {
                            required: "Username is Required"
                        })}
                        className={`w-full px-3 py-2 border-2 ${errors.username ? "border-red-600" : "border-green-600"}  outline-none `}
                        placeholder='Username . . . ' />
                    {errors.username && <p className='text-red-600'>{errors.username.message}</p>}
                </div>
                <div className="my-4">
                    <p className='font-bold'>Your Choice</p>
                    <div className=" flex flex-wrap gap-2">
                        <label htmlFor={"X"} className={`px-4 mr-3 py-2 border-4 w-1/3 text-center rounded cursor-pointer ${formval.choice === "X" ? "border-green-600" : "border-gray-500"}`}>
                            <input id={"X"} type="radio" value={"X"}{...register("choice", {
                                required: "Choice is Required"
                            })} className={`invisible hidden`} />
                            X
                        </label>
                        <label htmlFor={"O"} className={`px-4 mr-3 py-2 border-4  w-1/3 cursor-pointer rounded text-center ${formval.choice === "O" ? "border-green-600" : "border-gray-500"}`}>
                            <input id={"O"} type="radio" value={"O"} {...register("choice", {
                                required: "Choice is Required"
                            })} className={`invisible hidden`} />
                            O
                        </label>

                        {errors.choice && <p className='text-red-600'>{errors.choice.message}</p>}
                    </div>
                </div>
                <div className=' flex flex-wrap justify-around items-center'>
                    <button type='submit' className='btn btn-primary flex items-center'>
                        <span>Submit</span>
                        <span><BsFillSendFill className='ml-2' /></span>
                    </button>
                    <button onClick={closeModal} type='button' className='btn btn-primary flex items-center'>
                        <span>Cancel</span>
                        <span><FaTimes className='text-red-600 ml-2' /></span>
                    </button>
                </div>
            </form>
        </PopupModal>
    )
}

export default UserDataModal