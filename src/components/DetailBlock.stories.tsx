import { Story, Meta } from '@storybook/react';

import DetailBlock, { Props } from './DetailBlock';

export default {
	component: DetailBlock,
	title: 'components/DetailBlock',
} as Meta;

const Template: Story<Props> = (args) => <DetailBlock {...args} />;

export const story = Template.bind({});
story.args = {
	profile_path: '/2qhIDp44cAqP2clOgt2afQI07X8.jpg',
	name: 'John Doe',
	biography:
		'John Doe is a fictional character in the American television series The Simpsons. He is voiced by Dan Castellaneta and first appeared on The Simpsons in the episode "The Telltale Head"',
};
story.storyName = 'DetailBlock';
