import React, { Component } from 'react'
import BodyContent from './BodyContent'
import HeaderBTTH from './HeaderBTTH'
import FooterBTTH from './FooterBTTH'



export default class Baitapchialayout extends Component {
    render() {
        return (
            <div>
                <HeaderBTTH />
                <BodyContent />
                <FooterBTTH/>
            </div>



        )
    }
}
