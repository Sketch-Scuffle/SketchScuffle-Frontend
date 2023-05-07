// @ts-ignore
import Timer from "@/components/atoms/Timer/Timer";
import {Meta, StoryObj} from "@storybook/react";


const meta: Meta<typeof Timer> = {
    title: 'Timer',
    component: Timer
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Clock: Story = {
    args: {
        secondsLeft: 500
    }
}