import React from 'react'

class NewClock extends React.Component {
    constructor(props){
          super(props)
          this.state = {date : new Date(), locale: 'en-US'}
    }
    componentDidMount(){
        this.ClockTimer = setInterval(()=>{
            this.setState({date : new Date()})

        },1000)
    }
    componentWillUnmount(){
        clearInterval((this.ClockTimer))
    }
    handleClick(){
     if(locale = 'en-US'){
       button = <button>Change Clock</button>

     }else{
        button = <button>bangla change</button>
     }
    }
    render(){
    
  return (
    <div>
      <h1>{this.state.date.toLocaleTimeString(this.state.locale)}</h1>
      <button onClick={this.handleClick}></button>
      
    </div>
  )
}
}

export default NewClock
