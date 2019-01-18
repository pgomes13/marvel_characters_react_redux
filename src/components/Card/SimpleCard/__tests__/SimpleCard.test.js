import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { _SimpleCard } from '../SimpleCard';

const Fn = jest.fn()

describe('SimpleCard', () => {
    const props = {
        classes: {},
        imageUrl: 'http://test.test.com',
        title: 'test',
        pathname: '/test/test/test',
        description: 'test',
        setAction: Fn,
        dispatch: Fn,
        character: {}
    };

    it('component renders correctly with props', () => {
        const wrapper = shallow(<_SimpleCard {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('component correctly displays the title', () => {
        const wrapper = shallow(<_SimpleCard {...props} />);
        expect(wrapper.contains(<Typography gutterBottom variant="h5" component="h2">test</Typography>)).toBeTruthy();
    });
});