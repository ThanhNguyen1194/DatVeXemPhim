import React, { Component } from 'react'
import HeaderDemo from "../BaitapChiaLayout/Header"
export default class BindingIndex extends Component {
    //thuộc tính
    name = 'Nguyễn Hoài Thanh';

    //Objec
    studen = {
        name: "Song Le",
        age: 20
    }
    //tất cả các hàm phải trả về component (JSX)
    renderImg = () => {
        return <img className='' src='https://thuthuatnhanh.com/wp-content/uploads/2020/09/anh-avatar-doremon-dep-nhat.jpg' alt='logo'/>
    }
    renderComponent = () => {
        return <HeaderDemo/>
    }
    renderMultiComponent = () => {
        const detail = {
            id: "icon",
            img: "https://cdn.chanhtuoi.com/uploads/2020/05/icon-facebook-08-2.jpg.webp"
        }

        return (
        <div className="card text-left w-20 h-30">
            <img className="card-img-top img-fluid" src={detail.img} alt="icon" />
            <div className="card-body">
                <h4 className="card-title">Icon Smile</h4>
                <p className="card-text">{detail.id}</p>
            </div>
        </div>
        )
    }

  render() {
    //biến
    const school = "CyberSoft";
    const studen1 = {
        name: "Thanh",
        age: 27
    }
    //hamf tham so
    

    return (
      <div>
          <h1>React class component</h1>
          <hr/>
          <span className='text-danger'>Name: {this.name} school: {school}</span> <br/>
          <span> name: {this.studen.name} Age: {this.studen.age}</span><br/>
          <span> name: {studen1.name} Age: {studen1.age}</span>
          <h3>Binding function</h3>
          {this.renderImg()}
          {this.renderComponent()}
          {this.renderMultiComponent()}
            

      </div>
    )
  }
}
