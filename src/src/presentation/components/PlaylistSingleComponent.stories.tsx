import type { Meta, StoryObj } from '@storybook/react';

import PlaylistsSingleComponent from './PlaylistSingleComponent.tsx';

const meta = {
  component: PlaylistsSingleComponent,
} satisfies Meta<typeof PlaylistsSingleComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};