import React from 'react';
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
});