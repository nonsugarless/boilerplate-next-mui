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
	profile_path: '/2qhIDp44cAqP2clOgt2afQI07X8.jpg',
	name: 'John Doe',
	known_for: [{ title: 'foo' }, { title: 'bar' }],
};
story.storyName = 'Card';
