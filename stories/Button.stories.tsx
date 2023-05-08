// @ts-ignore

import {Meta, StoryObj} from "@storybook/react";
import Button from "../components/atoms/Button/Button";

const meta: Meta<typeof Button> = {
    title: '/Atoms/Button',
    component: Button
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Buttons: Story = {
    args: {
      children: "Click me"
    }
}