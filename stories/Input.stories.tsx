// @ts-ignore

import {Meta, StoryObj} from "@storybook/react";
import Input from "@/components/atoms/Input/Input";

const meta: Meta<typeof Input> = {
    title: '/Atoms/Input',
    component: Input
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        placeholder: "Type..."
    }
}