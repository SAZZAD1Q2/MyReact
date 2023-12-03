import React from 'react'

class Clock extends React.Component {
      constructor(props){
            super(props)
            this.state = {date : new Date(), locale : "bn-BD"}
      }
      componentDidMount(){

           this.clockTimer = setInterval(() => this.tick(), 1000)
      }
      componentWillUnmount() {
            clearInterval(this.clockTimer);
      }
      tick(){
            this.setState({date : new Date()})
      }
      handleClick = () => {
            this.setState({locale : "en-US"})
      }
      handleClick2 = () => {
            this.setState({locale : "bn-BD"})
      }
     
    
    
      render() {
            const locale = this.state.locale
            return (
               <>
                <h1>Time Now {this.state.date.toLocaleTimeString(this.state.locale)}</h1>
                 {locale === "en-US" ? ( <button onClick={this.handleClick2}>Change Clock</button>) : ( <button onClick={this.handleClick}>ঘড়ি পরিবর্তন করুন</button>)}
               </>
            )
      }
}

export default Clock