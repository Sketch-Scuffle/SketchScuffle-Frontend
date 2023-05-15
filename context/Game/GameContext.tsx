import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { TimerObject } from "@/interfaces/TimerObject";
import { UserStats } from "@/interfaces/UserStats";
import { RoomProperties } from "@/interfaces/RoomProperties";
import { GameData } from "@/interfaces/GameData";
import { UserContext } from "@/context/User/UserContext";
import { UserMessage } from "@/interfaces/UserMessage";

interface GameContext {
  data: GameData;
  messages: UserMessage[];
  setData(arg: GameData): void;
  sendMessage(arg: string): void;
}
const defaultContextValues: GameContext = {
  data: {
    roomId: "",
    timer: {
      secondsLeft: 0,
    },
    usersData: [
      {
        userObject: { id: "", nick: "", avatarUrl: "" },
        userStats: { userId: "", points: 0, active: false },
      },
    ],
    roomSettings: {
      currentDrawer: "",
      category: {
        name: "",
        logoUrl: "",
      },
      nextDrawer: "",
    },
  },
  messages: [],
  setData(arg: GameData) {},
  sendMessage(arg: string): string {
    return "";
  },
};
export const GameContext = createContext<GameContext>(defaultContextValues);

export const GameContextProvider: React.FC<
  React.PropsWithChildren<{ roomId: string }>
> = ({ roomId, children }) => {
  const socket = useRef<Socket>();
  const [timer, setTimer] = useState<TimerObject>();
  const [userStats, setUserStats] = useState<UserStats>();
  const [roomProperties, setRoomProperties] = useState<RoomProperties>();
  const [data, setData] = useState<GameData>(defaultContextValues.data);
  const [messages, setMessages] = useState<UserMessage[]>([]);
  const { userId } = useContext(UserContext);

  useEffect(() => {
    const createdSocket = (socket.current = io(
      `ws://localhost:3000/game?roomId=${roomId}&userId=${userId}`
    ));

    createdSocket.on("init", (data) => {
      setData(data);
      console.log(data);
    });

    createdSocket.on("userMessage", ({ message }: UserMessage) => {
      //TODO delete mocked id
      setMessages([...messages, { userId: "1", message }]);
      console.log(message);
    });

    return () => {
      createdSocket.removeAllListeners();
      createdSocket.disconnect();
    };
  }, []);

  const sendMessage = (message: string) => {
    socket.current?.emit("messageSend", { message });
  };

  return (
    <GameContext.Provider
      value={{
        data: data,
        setData,
        messages: messages,
        sendMessage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
