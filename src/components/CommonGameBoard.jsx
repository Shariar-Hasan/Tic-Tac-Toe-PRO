import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import GameBoard from "./GameBoard"
import NoticeCard from "./cards/NoticeCard"
import InstructionCard from "./cards/InstructionCard"
import { useFunction } from "../hooks/useFunction"
import { VscDebugRestart } from "react-icons/vsc"
import { useEffect } from "react"

const CommonGameBoard = () => {
    const { mode } = useParams()
    const { isGameRunning,
        isTournament,
        isMultiplayer,
    } = useSelector(state => state.game)
    const {  startGame } = useFunction()
    return (
        <div className="container mx-auto">
            <div className="bg-front p-10 box max-w-xl mx-auto my-8">
                {
                    false ? <InstructionCard />
                        : (isMultiplayer && mode == "multiple" || isTournament)
                            ? <NoticeCard text={`You have another game running in ${isTournament ? "Tournament " : ""} ${isMultiplayer ? "Multiplayer" : "Single"} Mode`} />
                            : <GameBoard />
                }
                <div className="mt-4">
                    {!isGameRunning && <button className="btn bg-brand  flex items-center mx-auto"
                        onClick={() => startGame()}
                    >
                        Start the Game <VscDebugRestart className="ml-2" />
                    </button>}

                </div>
            </div>


        </div>
    )
}
export default CommonGameBoard