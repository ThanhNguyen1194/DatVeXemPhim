import React, { Component } from 'react'
import BannerBTTH from './BannerBTTH'
import CardBTTH from './CardBTTH'

export default class BodyContent extends Component {
    render() {
        return (
            <div>
                <BannerBTTH />
                <CardBTTH/>
            </div>

        )
    }
}
