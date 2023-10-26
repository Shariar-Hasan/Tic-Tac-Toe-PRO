
import { InfoCard } from "../components/cards/InfoCard"
import { cardinfo } from "../assets/configs/Infos.config"
const Home = () => {

    return (
        <div className="container mx-auto my-5">
            <div className="grid grid-cols-2 gap-3">
                {
                    cardinfo.map((info, i) => <InfoCard key={i} info={info} />)
                }

            </div>
        </div>
    )
}

export default Home