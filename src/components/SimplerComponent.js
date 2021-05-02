// Code SimplerComponent Here
import { render } from 'enzyme';
import React from 'react';
import SimpleComponent from './SimpleComponent'

const SimplerComponent = (props) => 
        <div onClick={props.handleClick} >I am just happy</div>
;


export default SimplerComponent