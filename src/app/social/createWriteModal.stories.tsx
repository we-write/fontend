import { Meta, StoryObj } from '@storybook/react';
import CreateWriteModal from './CreateWriteModal';

const meat: Meta<typeof CreateWriteModal> = {
  title: 'Social/CreateWriteModal',
  component: CreateWriteModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meat;

type Story = StoryObj<typeof CreateWriteModal>;

export const Default: Story = {};
