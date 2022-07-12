import React, { Component } from 'react'
import dataGlasses from './Data/dataGlasses.json'

export default class BaiTapThuKinh extends Component {
    state = {
        glassInfor:{
            
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    changeGlass = (newGlass) => {
        this.setState({
            glassInfor:newGlass
        })
    }


    renderGlassesImg = () =>{
        return dataGlasses.map((glassItem,index) => {
            return <img onClick={() => {this.changeGlass(glassItem)}} className='m-3' style={{width:'150px',cursor:'pointer'}} key={index} src={glassItem.url} alt=''/>
        })
    }

  render() {
    const keyFrame = `@keyframes animaChangeGlass${Date.now()} {
        from{
            width: 0px;
            transform: rotate(-45deg);
        }
        to{
            width: 174px;
            transform: rotate(0deg);
        }
    }`
 


    const bgImage = {
        backgroundImage: 'url(./glassesImage/background.jpg)',
        backgroundSize: 'cover',
        // width: '1000px',
        minHeight:'1000px'
    }
    const kinhImg = {
        position: 'absolute',
        width: '174px',
        left: '64px',
        top: '92px',
        opacity: '0.8',
        animation:`animaChangeGlass${Date.now()} 1s`
    }
    return (
        
      <div style={bgImage}>
          <style>{keyFrame}</style>
          <div style={{backgroundColor: 'rgba(0,0,0,0.5)',minHeight:'1000px'}}>
              <h3 className='text-center text-light p-3' style={{backgroundColor:'rgba(0,0,0,0.2)',fontSize:'40px'}}>Try Glasses App Online</h3>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-6'>
                        <div style={{backgroundImage:'url(./glassesImage/model.jpg)',width:'300px',height:'360px',backgroundSize:'cover',margin:'0 auto',position:'relative'}}>
                            <img style={kinhImg} src={this.state.glassInfor.url} alt=''/>
                            <div className='p-2' style={{position:'absolute',bottom:'0',backgroundColor:'rgba(244,164,96,0.5)',width:'100%',fontWeight:'500'}}>
                                <h5 style={{color:'#d10a8a'}}>{this.state.glassInfor.name}</h5>
                                <p>{this.state.glassInfor.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div style={{backgroundImage:'url(./glassesImage/model.jpg)',width:'300px',height:'360px',backgroundSize:'cover',margin:'0 auto'}}></div>
                    </div>
                </div>
                <div className='bg-light d-flex justify-content-center flex-wrap m-5'>
                    {this.renderGlassesImg()}
                </div>
            </div>
          </div>
      </div>
    )
  }
}
