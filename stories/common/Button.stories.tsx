import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../../components/common/Button";

export default {
  title: "Common/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
