import React from "react"
import TemperatureInput from "./Temperature"
import {convert, toCelsius, toFehrenheit} from '../lib/Converter' 
import BoilingVerdict from "./BoilingVerdict"


export default class Calculator extends React.Component{
      state = {temperature : '' , scale : 'c'}
      handleChange=(e, scale)=>{
            this.setState({temperature : e.target.value, scale})
      }
      render(){
            const {temperature, scale} = this.state;
            const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
            const fehrenheit = scale === 'c' ? convert(temperature, toFehrenheit) : temperature;
            return(
                  <>
                  <TemperatureInput scale='c' temperature={celsius} onTemperatureChange = {this.handleChange}/>
                  <TemperatureInput scale='f' temperature={fehrenheit} onTemperatureChange={this.handleChange}/>
                  <BoilingVerdict celsius= {parseFloat(temperature)}/>
                  </>
            )
      }

}