// @ts-ignore
import ScoreboardTile from "@/components/atoms/Scoreboard-Tile/Scoreboard-Tile";

import {Meta, StoryObj} from "@storybook/react";


const meta: Meta<typeof ScoreboardTile> = {
    title: 'Scoreboard Tile',
    component: ScoreboardTile
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Tile: Story = {
    args: {
        active: true,
        drawer: true,
        img: "https://steamuserimages-a.akamaihd.net/ugc/964228526733419342/232B952368114C36A8C3550606155E3C4F9A99C1/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        me: false,
        name: "Ziutek",
        points: 50
    }
}