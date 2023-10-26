import { useEffect } from "react"
import CommonGameBoard from "../components/CommonGameBoard"
import { useFunction } from "../hooks/useFunction"

const GamePage = () => {
    const { handleSetGameMode } = useFunction()
    useEffect(() => {
        handleSetGameMode()
    }, [])
    return (
        <CommonGameBoard />
    )
}

export default GamePage