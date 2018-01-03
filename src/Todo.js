import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: ''
    }
    this.textChange = this.textChange.bind(this);
    this.addToList = this.addToList.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  textChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  addToList() {
    if(this.state.text === ''){
      console.log("Can't add empty value.")
      return
    }
    this.setState(prevState => ({
      list: prevState.list.concat(this.state.text),
      text: ''
    }))
  }

  removeItem(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({list}); 
  }

  render() {
    return(
      <div className="wrapper">
        <h1 className="title">Christmas Santa List</h1>
        <h3 className="subtitle">Santa please...</h3>
        <input value={this.state.text} onChange={e => this.textChange(e)}/>
        <button onClick={this.addToList}>+</button>
        <ul>
          {this.state.list.map((text,i) => {
          return (
            <li key={i}>
              {text}
              <button className="rmvItem" onClick={() => this.removeItem(i)}>-</button>
            </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

export default Todo;
