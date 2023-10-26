import { useNavigate } from "react-router-dom"

export const InfoCard = ({ info: { title, description, icon, link } }) => {
    const navigate = useNavigate()
    return (
        <div className="col-span-1 ">
            <div className="px-4 py-3 bg-front text-site rounded-md shadow-md h-full">
                <div className="grid md:grid-cols-3 grid-cols-1 justify-between items-center text-center md:text-left">
                    <div className="col-span-1 flex justify-center items-center">
                        {icon}
                    </div>

                    <div className="inline-block md:col-span-2 col-span-1">
                        <h2 className="text-xl bord er-b pb-2">{title}</h2>
                        {description.map((desc, i) =>
                            <p key={i} className="font-thin font-mono">{desc} </p>
                        )}
                        <button className="btn btn-primary w-full inline-block click-effect" onClick={() => navigate(link)}>Play Now</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
