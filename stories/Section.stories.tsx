// @ts-ignore
import Section from "@/components/atoms/Section/Section";
import {Meta, StoryObj} from "@storybook/react";


const meta: Meta<typeof Section> = {
    title: '/Atoms/Section',
    component: Section
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        side: "left",
        title: false
    }
}