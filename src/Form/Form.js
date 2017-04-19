import React from 'react'; // eslint-disable-line no-unused-vars
import './From.css';
import styled from 'styled-components';

const Style = styled.input`
  font-size: 1.25em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;
const Button = styled.button`
background: ${props => props.primary ? 'palevioletred' : 'white'};
color: ${props => props.primary ? 'white' : 'palevioletred'};

font-size: 1em;
 border: 2px solid palevioletred;
 border-radius: 3px;
 margin-left: 5.5em;
 width: 45%;
`;

const Form = (props) =>
<div  className="creation">

<form className="form" onSubmit={props.onSUbmit}>

  <p><label className="label">Add name : </label>
  <Style type="text" onChange={props.onChange} name="name"/></p>

  <p><label className="label">Add Color : </label>
  <Style  type="text" onChange={props.onChange} name="color"/></p>
  <Button primary className="button-form" type="submit" onClick={props.onSubmit}><strong>Go</strong></Button>
</form>

</div>;

export default Form;
