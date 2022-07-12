import React, { Component } from 'react'
import './BaiTapChonXeNangCao.css'
import dataFeatures from './Data/arrayFeatures.json'
import dataWheels from './Data/wheels.json'
export default class BaiTapChonXeNangCao extends Component {

    state = {
        carCurrent: {
            "id": 1,
            "title": "Crystal Black",
            "type": "Pearl",
            "img": "./images/icons/icon-black.jpg",
            "srcImg": "images-black/images-black-1/",
            "color": "Black",
            "price": "19,550",
            "engineType": "In-Line 4-Cylinder",
            "displacement": "1996 cc",
            "horsepower": "158 @ 6500 rpm",
            "torque": "138 lb-ft @ 4200 rpm",
            "redline": "6700 rpm",
            "wheels": [
                {
                    "idWheel": 1,
                    "srcImg": "images-black/images-black-1/"
                },
                {
                    "idWheel": 2,
                    "srcImg": "images-black/images-black-2/"
                },
                {
                    "idWheel": 3,
                    "srcImg": "images-black/images-black-3/"
                }
            ]
        }
    }
    changeCar = (newCar) => {
        this.setState({
            carCurrent: newCar
        })
    }

    renderIcon = () => {
        return dataFeatures.map((item, index) => {
            return <div onClick={() => { this.changeCar(item) }} className='row mt-3 border ' style={{ cursor: 'pointer' }}>
                <div className='col-2'>
                    <img src={item.img} style={{ width: '100%', padding: '10px' }} alt='' key={index} />
                </div>
                <div className='col-10' style={{ padding: '20px' }}>
                    <h3>{item.title}</h3>
                    <span>{item.type}</span>
                </div>
            </div>
        })
    }
    changeWheel = (newWheel) => {
        let obWheel = this.state.carCurrent.wheels.find(item => item.idWheel === newWheel.idWheel);
        if(obWheel !== -1) {
            this.setState({
                carCurrent:{...this.state.carCurrent,srcImg:obWheel.srcImg}
            })
        }
    }

    renderWheels = () => {
        return dataWheels.map((item, index) => {
            return <div onClick={() => {this.changeWheel(item)}} className='row mt-3 border ' style={{ cursor: 'pointer' }}>
                <div className='col-2'>
                    <img src={item.img} style={{ width: '100%', padding: '10px' }} alt='' key={index} />
                </div>
                <div className='col-10' style={{ padding: '20px' }}>
                    <h3>{item.title}</h3>
                </div>
            </div>
        })
    }
    componentDidMount = () => {
        //đây là phương thức chạy sau khi render và chỉ chạy 1 lần đầu 
        let tagScript = document.createElement('script');
        tagScript.src = 'https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.1/js-cloudimage-360-view.min.js'
        document.querySelector('#appenScript').appendChild(tagScript)
    }
    componentDidUpdate = () => {
        //hàm này chạy sau khi render

        document.querySelector('#carCurrent').innerHTML ='';

        let tagScript = document.createElement('script');
        tagScript.src = 'https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js'
        document.querySelector('#appenScript').innerHTML=''
        document.querySelector('#appenScript').appendChild(tagScript)
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='model' style={{width: '100%'}}>
                            <div
                                id='carCurrent'
                                style={{ minWidth: '100%' }}
                                className="cloudimage-360"
                                data-folder={'./images/' + this.state.carCurrent.srcImg}
                                data-filename="civic-{index}.jpg"
                                data-amount="8"
                            ></div>
                        </div>
                        <div id='appenScript'>

                        </div>
                        {/* <img className='img-fluid' src='./images/images-black/images-black-1/civic-1.jpg' alt='' /> */}
                        <div className="card text-left">

                            <div className='card-header' style={{ fontSize: '25px', fontWeight: '400' }}>Exterior Color</div>
                            <div className="card-body p-0">
                                <table class="table">

                                    <tbody>
                                        <tr>
                                            <td>Color</td>
                                            <td>Black</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>$ 19.000.000</td>
                                        </tr>
                                        <tr>
                                            <td>Engine Type</td>
                                            <td>in-line-4-cylinder</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="card text-left">
                            <div className='card-header' style={{ fontSize: '25px', fontWeight: '400' }}>Exterior Color</div>
                            <div className='container-fluid'>
                                {this.renderIcon()}
                            </div>
                        </div>
                        <div>
                            {this.renderWheels()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
