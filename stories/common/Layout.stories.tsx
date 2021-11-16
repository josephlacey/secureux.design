import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from "components/Layout";

export default {
  title: "Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
