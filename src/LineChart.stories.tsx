import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LineChart } from './LineChart';

export default {
  title: 'Example/LineChart',
  component: LineChart,
} as ComponentMeta<typeof LineChart>;

const Template: ComponentStory<typeof LineChart> = (args) => <LineChart {...args} />;

export const Zero = Template.bind({});

Zero.args = {
  data: [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ],
};

export const One = Template.bind({});
One.args = {
  data: [
    { x: 1, y: 1 },
    { x: 1, y: 1 },
    { x: 1, y: 1 },
    { x: 1, y: 1 },
    { x: 1, y: 1 },
  ],
};
