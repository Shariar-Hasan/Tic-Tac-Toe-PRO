
import { useDispatch, useSelector } from "react-redux";
import { updateBoard } from "../redux/Slices/gameSlices";
import { useFunction } from "../hooks/useFunction";
import { errorNotify } from "../assets/helperFunctions";

const GameBoard = () => {
    const { board,isGameRunning } = useSelector(state => state.game)
    const dispatch = useDispatch()
    const { handleGame } = useFunction()
    // const currentPlayer = "X"
    // const handleClick = (e, index) => {
    //     dispatch(updateBoard({ index, currentPlayer }))
    //     checkWinner(board)
    // }
    return (
        <div className="grid grid-cols-3 gap-1 gameboard mx-auto max-w-xs relative" id="board">
            {!isGameRunning && <span className="z-[10] absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 backdrop:blur-lg text-4xl flex justify-center items-center font-bold ">Start The Game</span>}
            {board.map((cell, index) => (
                <div className={`cell ${cell} col-span-1`} key={index} onClick={() => handleGame(index)}></div>
            ))}
        </div>
    )
}

export default GameBoard