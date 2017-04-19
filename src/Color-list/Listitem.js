import React from 'react'; // eslint-disable-line no-unused-vars

const Listitem = (props) => <li key={props.id}>
      <button style={{backgroundColor: props.color}}
              onClick={() => props.changeColor(props.color)}>
        {props.name}
      </button>
    </li>;

export default Listitem;
