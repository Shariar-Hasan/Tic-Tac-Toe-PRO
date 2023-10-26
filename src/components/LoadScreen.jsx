// import img  from "./../assets/images/favicon.png" 
const LoadScreen = () => {
    return (
        <div className="bg-black bg-opacity-70 w-full h-full z-[99] flex justify-center items-center absolute top-0 right-0">
            <div className="p-5">
                <span className="border rounded-full w-[100px] aspect-square inline-block border-white animate-spin border-b-0"></span>
            </div>
        </div>
    )
}

export default LoadScreen