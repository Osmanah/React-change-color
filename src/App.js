import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import './App.css';
import Header from './Header/Header.js';
import Colorlist from './Color-list/Colorlist.js';
import Form from './Form/Form.js';
import { SketchPicker } from 'react-color';

class App extends Component {

  state = {
    objStyle : {backgroundColor: 'blue'},

    colors : [
      {id:1, name:'Violet', color:'#f5aafb'},
      {id:2, name:'Marin blue', color:'rgb(43, 77, 153)'},
      {id:3, name:'Pale green', color:'#aafbde'},
      {id:4, name:'Vermillon', color:'#fe532e'},
      {id:5, name:'Sky blue', color:'#82c4fa'},
      {id:6, name:'Salmon', color:'#fb8b8b'},
    ],

    name: '',
    color: ''

  }

  handleChange = e => this.setState({
    [e.target.name]: e.target.value
  });

  changeColor = (color) =>{
    this.setState({
      objStyle : {backgroundColor: color}
    });
  }
  handleAddColor = (e) => {
    e.preventDefault();
    this.setState({
      colors: [...this.state.colors, {name: this.state.name, color: this.state.color, id: this.state.colors.length + 1}]
    });
  }

  render() {
    return (
      <div className="App">
        {/* composent header */}
        <Header objStyle={this.state.objStyle}/>
          {/* composent color list */}
        <Colorlist colors={this.state.colors} changeColor={this.changeColor} />

         {/* composent from */}
          <Form onSubmit={this.handleAddColor} onChange={this.handleChange} onChange={this.handleChange}/>
        

      </div>
    );
  }
}

export default App;
