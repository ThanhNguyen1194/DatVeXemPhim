import React, { Component } from 'react'

export default class RenderLoopCar extends Component {

    producList =[
        {id:1,name:'black Car',price:1000,img:'./asset/products/black-car.jpg'},
        {id:1,name:'black Car',price:1000,img:'./asset/products/steel-car.jpg'},
        {id:1,name:'black Car',price:1000,img:'./asset/products/silver-car.jpg'},
        {id:1,name:'black Car',price:1000,img:'./asset/products/red-car.jpg'},
    ]

    renderTable = () => {
        // let mangComponent = [];
        // for(let index = 0; index < this.producList.length; index++ ){
        //     let product = this.producList[index];

        //     let trJSX = <tr key={index}>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img className='' style={{width:'100px'}} src={product.img}/></td>
        //     </tr>

        //     mangComponent.push(trJSX);
        // }
        // return mangComponent;


        let mangComponent = this.producList.map((product,index) => {
            return(
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <img src={product.img} style={{width:'200px'}} alt={index}/>
                    </td>
                </tr>
            )
        })
        return mangComponent;
    }

  render() {
    return (
      <div>
          <div>
              <table class="table text-center">
                  <thead>
                      <tr>
                          <th>id</th>
                          <th>name</th>
                          <th>price</th>
                          <th>img</th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>
                     {this.renderTable()}
                      
                  </tbody>
              </table>
          </div>
      </div>
    )
  }
}
