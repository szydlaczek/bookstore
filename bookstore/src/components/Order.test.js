import React from 'react';
import ReactDOM from 'react-dom';
import Order from './Order';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});

describe('Order tests', () => {
    
    it('Order renders without a problem', ()=> {
        const div=document.createElement('div');
        ReactDOM.render(<Order />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Order renders', () => {
        const wrapper=shallow(<Order/>);
        // console.log(wrapper.debug());
        expect(wrapper.find('div').text()).toBe('Zamówienie');
    })
    it('Snapshot matches', () => {
        const wrapper=shallow(<Order/>);
        // console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();
    })
})