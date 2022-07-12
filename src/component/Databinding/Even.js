import React, { Component } from 'react'

export default class Even extends Component {

    handleClick = () => {
        alert("hello Thanh")
    }
    handleClick2 = (name) => {
        alert("hello " + name)
    }
    handleClick3 = (name,button) => {
        console.log(name);
        console.log(button.target);
        alert("hello " , button)
    }
  render() {
    return (
      <div>
          <button onClick={this.handleClick}>Click me</button>
          <button onClick={()=>{
              this.handleClick2("Thanh")
          }}>Click me</button>
          <button onClick={this.handleClick3.bind(this,"hello men")}>Click me</button>
      </div>
    )
  }
}
