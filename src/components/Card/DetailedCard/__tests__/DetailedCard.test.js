import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { _DetailedCard } from '../DetailedCard';

describe('DetailedCard Component', () => {
    const props = {
        classes: {},
        imageUrl: 'http://test.test.com',
        title: 'detailed card',
        description: 'detailed card is awesome!'
    };

    it('component renders correctly with props', () => {
        const wrapper = shallow(<_DetailedCard {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('component correctly displays the title', () => {
        const wrapper = shallow(<_DetailedCard {...props} />);
        expect(wrapper.contains(<Typography component="h2" variant="h5">detailed card</Typography>)).toBeTruthy();
    });

    it('component correctly displays the description', () => {
        const wrapper = shallow(<_DetailedCard {...props} />);
        expect(wrapper.contains(<Typography variant="subtitle1" color="textSecondary">detailed card is awesome!</Typography>)).toBeTruthy();
    });
});