import SideMenu from "@/components/atoms/Side-Menu/Side-Menu";
import ScoreboardTile from "@/components/atoms/Scoreboard-Tile/Scoreboard-Tile";
import Section from "@/components/atoms/Section/Section";
import ChatBubble from "@/components/atoms/Chat-Bubble/Chat-Bubble";
import { useContext } from "react";
import { UserContext } from "@/context/User/UserContext";
import { GameContext } from "@/context/Game/GameContext";
import { UserMessage } from "@/interfaces/UserMessage";

export default function GameSideBar() {
  const User = useContext(UserContext);
  const {
    messages,
    data: { usersData },
  } = useContext(GameContext);

  const tabs = {
    Chat: messages.map(({ userId, message }: UserMessage) => {
      return (
        <>
          <ChatBubble owner={} text={message}></ChatBubble>
        </>
      );
    }),
    Scoreboard: usersData.map((userData: (typeof usersData)[0]) => {
      return (
        <>
          <ScoreboardTile
            key={userData.userObject.id}
            drawer={true}
            me={userData.userObject.id === User.userId}
            nextdrawer={false}
            name={userData.userObject.nick || ""}
            active={userData.userStats.active}
            points={userData.userStats.points}
            img={userData.userObject.avatarUrl || ""}
          />
          <div style={{ marginBottom: "21px" }}></div>
        </>
      );
    }),
  };

  return (
    <Section side={"left"} title={false} titleText={""}>
      <SideMenu tabs={tabs} />
    </Section>
  );
}
