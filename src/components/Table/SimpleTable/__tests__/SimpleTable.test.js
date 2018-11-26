import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { _SimpleTable } from '../SimpleTable';

const Fn = jest.fn()

describe('SimpleTable', () => {
    const props = {
        classes: {},
        imageUrl: 'http://test.test.com',
        title: 'test',
        pathname: '/test/test/test',
        setAction: Fn,
        dispatch: Fn,
        items: [{
            test1: 'test1',
            test2: 'test2'
        }],
        labels: ['test', 'test'],
        identifiers: ['test1', 'test2']
    };



    it('component renders correctly with props', () => {
        const wrapper = shallow(<_SimpleTable {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});