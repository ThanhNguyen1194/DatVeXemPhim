import React, { Component } from 'react'
import Chilrend from './Demo/Chilrend'
import Parent from './Demo/Parent'

export default class Demo extends Component {
  render() {
    return (
      <div>
          <Parent>
              <Chilrend/>
              <Chilrend/>
              <Chilrend/>
              <Chilrend/>
          </Parent>
              
      </div>
    )
  }
}
