// @ts-ignore
import ScoreboardTile from "@/components/atoms/Scoreboard-Tile/Scoreboard-Tile";
import {Meta, StoryObj} from "@storybook/react";


const meta: Meta<typeof ScoreboardTile> = {
    title: '/Atoms/Scoreboard Tile',
    component: ScoreboardTile
}

export default meta;

type Story = StoryObj<typeof meta>;



export const Tile: Story = {
    args: {
        active: true,
        drawer: true,
        img: 'avatar.png',
        me: false,
        name: "Ziutek",
        points: 50
    }
}