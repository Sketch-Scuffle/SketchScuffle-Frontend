import SideMenu from "@/components/atoms/Side-Menu/Side-Menu";
import ScoreboardTile from "@/components/atoms/Scoreboard-Tile/Scoreboard-Tile";
import Section from "@/components/atoms/Section/Section";
import ChatBubble from "@/components/atoms/Chat-Bubble/Chat-Bubble";
const m = {
    "event": "userMessage",
    "data": {
        "userId": "userID",
        "message": "text",
        "date": Date.now().toLocaleString("en-US")
    }
}
//TODO me property
type UserStats = {
    userId: string;
    points: number;
    active: boolean;
};

type UserObject = {
    id: string;
    nick: string;
    avatarUrl: string;
};

const userStats: UserStats = {
    userId: "",
    points: 12,
    active: true,
};

const userObject: UserObject = {
    id: "",
    nick: "nick",
    avatarUrl: "",
};

const e = {
    usersStats: [
        userStats,
        userStats,
        userStats,
        userStats,
        userStats,
        userStats,
        userStats,
        userStats,
    ],
    usersObject: [
        userObject,
        userObject,
        userObject,
        userObject,
        userObject,
        userObject,
        userObject,
        userObject,
    ],
};

const me = "k";

export default function GameSideBar() {
    const tabs = {
        Chat: "",
        Scoreboard: e.usersStats.map((userStat: UserStats) => {
            const userObj = e.usersObject.find(
                (user) => user.id === userStat.userId
            );

            return (
                <>
                    <ScoreboardTile
                        key={userObj?.id}
                        drawer={true}
                        me={userObj?.id === me}
                        nextdrawer={false}
                        name={userObj?.nick || ""}
                        active={userStat.active}
                        points={userStat.points}
                        img={userObj?.avatarUrl || ""}

                    />
                    <div style={{marginBottom: '21px'}}></div>
                </>

            );
        }),
    };

    return (
        <Section side={"left"} title={false} titleText={""} >
                <SideMenu tabs={tabs}/>
        </Section>
    );
}