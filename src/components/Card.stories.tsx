import { Story, Meta } from '@storybook/react';

import Card, { Props } from './Card';

export default {
	component: Card,
	title: 'components/Card',
} as Meta;

const Template: Story<Props> = (args) => (
	<div
		style={{
			maxWidth: '300px',
		}}
	>
		<Card {...args} />
	</div>
);

export const story = Template.bind({});
story.args = {
	id: 1,
	imagePath: 'https://i.pravatar.cc/150?img=50',
	name: 'John Doe',
};
story.storyName = 'Card';
