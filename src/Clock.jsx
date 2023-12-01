import React from "react";
 
class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date : new Date(), locale : "en-US"}
    }
    componentDidMount(){
        this.setTimer = setInterval(()=>{
            this.setState({date : new Date()})
        },100)
    }
    componentWillUnmount(){
        clearInterval(this.setTimer)
    }
    handleClick = ()=> {
       this.setState({locale : "bn-BD"})
    }
    render() {
        
        return (
            <>
            <h1>Hello Clock {this.state.date.toLocaleTimeString(this.state.locale)}</h1>
            <button onClick={this.handleClick}>Click for english</button>
            </>
        )
    }
}

export default Clock;