
import { useFunction } from "../../hooks/useFunction"
import { instructions } from "../../assets/configs/instruction.config"
const InstructionCard = () => {
    const { startGame } = useFunction()
    return (
        <div className='w-full'>
            <h4>Instuction for the game</h4>
            <ul className='list-disc pl-7'>
                {
                    instructions.map(({ title, desc }, i) => <li key={i}>
                        <div>
                            <h1 className="font-bold">{title}</h1>
                            <p className="font-mono">{desc}</p>
                        </div>
                    </li>
                    )
                }

            </ul>

        </div>
    )
}

export default InstructionCard