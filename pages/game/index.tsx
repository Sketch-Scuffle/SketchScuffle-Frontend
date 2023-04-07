import ChatBubble from "@/components/atoms/Chat-Bubble/Chat-Bubble";

export default function GamePage () {
    return (
        <ChatBubble variant={1} owner={'Krzysztof'} date={new Date("October 13, 2014 11:13:00")} text={'NO elo elo co tam słychać'}/>
    )
}
