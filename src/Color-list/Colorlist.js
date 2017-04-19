import React from 'react'; // eslint-disable-line no-unused-vars
import Listitem from './Listitem';
import './Colorlist.css';

const Colorlist = (props) =>
<ul className="color-container"> {
    props.colors.map( (item, i) =>
      <Listitem
         key = {i}
        id={item.id}
        color={item.color}
        name={item.name}
      changeColor={props.changeColor}/>
    )
  }

  </ul>;


export default Colorlist;
