import React, { Component } from 'react'

export default class ChonXe extends Component {

    state = {
        imgProduct:require('./asset/products/black-car.jpg')
    }
    renderCar = (imgNewCar) => {
        // let newCar = {
        //     imgProduct:imgNewCar
        // }
        // this.setState(newCar);
        this.setState({

            imgProduct:imgNewCar
        }
        );
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-7">
                            <img className='img-fluid' src={this.state.imgProduct} alt="black" />
                        </div>
                        <div className="col-5">
                            <div className="card text-left"></div>
                            <div className='card-header'>Exterial Color</div>
                            <div className="card-body">
                                <div className='row border py-2 mb-2' onClick={() => {this.renderCar(require('./asset/products/black-car.jpg'))}} style={{cursor:'pointer'}}>
                                    <div className='col-2'>
                                    <img className='img-fluid' src={require('./asset/icons/icon-black.jpg')} alt='iconBlack' />
                                    </div>
                                    <div className='col-10'>
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className='row border py-2 mb-2' onClick={() => {this.renderCar(require('./asset/products/steel-car.jpg'))}} style={{cursor:'pointer'}}>
                                    <div className='col-2'>
                                    <img className='img-fluid' src={require('./asset/icons/icon-steel.jpg')} alt='icon-steel' />
                                    </div>
                                    <div className='col-10'>
                                        <h3>Crystal Steel</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className='row border py-2 mb-2' onClick={() => {this.renderCar(require('./asset/products/silver-car.jpg'))}} style={{cursor:'pointer'}}>
                                    <div className='col-2'>
                                    <img className='img-fluid' src={require('./asset/icons/icon-silver.jpg')} alt='icon-silver' />
                                    </div>
                                    <div className='col-10'>
                                        <h3>Crystal Silver</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className='row border py-2' onClick={() => {this.renderCar(require('./asset/products/red-car.jpg'))}} style={{cursor:'pointer'}}>
                                    <div className='col-2'>
                                    <img className='img-fluid' src={require('./asset/icons/icon-red.jpg')} alt='icon-red' />
                                    </div>
                                    <div className='col-10'>
                                        <h3>Crystal Red</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
