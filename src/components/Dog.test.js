import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DogCard from './DogCard';

configure({adapter: new Adapter()});

describe('<DogCard />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<DogCard />);
    });

    it('should render card title', () => {
        expect(wrapper.find('h4')).toHaveLength(1);
    });

    it('should render card with image', () => {
        expect(wrapper.find('img')).toHaveLength(1);
    });
});