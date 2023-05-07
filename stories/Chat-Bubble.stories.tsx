// @ts-ignore

import {Meta, StoryObj} from "@storybook/react";
import ChatBubble from "@/components/atoms/Chat-Bubble/Chat-Bubble";

const meta: Meta<typeof ChatBubble> = {
    title: 'Chat Bubble',
    component: ChatBubble
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Bubble: Story = {
    args: {
        owner: "Sketch",
        text: "Hello! good morning",
        date:  new Date('August 19, 1975 23:15:30 GMT+00:00'),
        variant: "myBubble"
    }
}