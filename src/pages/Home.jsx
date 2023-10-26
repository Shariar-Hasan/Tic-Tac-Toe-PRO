
// import { InfoCard } from "../components/cards/InfoCard"
// import { cardinfo } from "../assets/configs/Infos.config"
import CommonGameBoard from "./../components/CommonGameBoard"
const Home = () => {

    return (
        <div className="container mx-auto my-5">
            <div className="grid grid-cols-1 gap-3 justify-center">
                {/* {cardinfo.map((info, i) => <InfoCard key={i} info={info} />)} */}
                <CommonGameBoard/>
            </div>
        </div>
    )
}

export default Home