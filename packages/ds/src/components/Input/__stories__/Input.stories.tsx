import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Input, InputProps } from '../Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    placeholder: {
      defaultValue: 'Place a text here',
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    isInvalid: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const Default: Story<InputProps> = (args) => <Input {...args} />;
