import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ButtonProps } from 'common/types';
import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
}

export const Booking = Template.bind({});
Booking.args = {
  color: 'inherit',
  buttonStyle: 'booking'
}

export const Booking_invert = Template.bind({});
Booking_invert.args = {
  color: 'inherit',
  buttonStyle: 'booking-invert'
}