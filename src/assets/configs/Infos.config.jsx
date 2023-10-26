import { ImUser, ImUsers } from "react-icons/im";
import { AiFillThunderbolt } from "react-icons/ai";

export const cardinfo = [
  {
    title: "Single Mode",
    description: "In this mode, you can play against a Computer Robot",
    icon: (
      <ImUser className="text-[100px] md:text-6xl inline-block mx-auto text-pink-600" />
    ),
    link : "/single_player_play"
  },
  {
    title: "Multi Mode",
    description: "In this mode, you can play against your friend",
    icon: (
      <ImUsers className="text-[100px] md:text-6xl inline-block mx-auto text-pink-600" />
    ),
    link : "/multiple_player_play"
  },
  {
    title: "Tournament Mode",
    description: "In this mode, you can play a full tournament against your friend.",
    icon: (
      <AiFillThunderbolt className="text-[100px] md:text-6xl inline-block mx-auto text-pink-600" />
    ),
    link : "/tournament"
  },
];
