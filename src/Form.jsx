import React from 'react'

class Form extends React.Component {

    state = {title : 'Javascript',
    text : 'This is my text',
    library : "View",
    isAwesome : true
}
    
    handleChange = (e) => {
        if(e.target.type === 'text'){
            this.setState({title : e.target.value})
        }else if(e.target.type ==='textarea') {
            this.setState({text : e.target.value})
        }else if(e.target.type === 'select'){
            this.setState({select : e.target.value})
        } else if(e.target.type === 'checkbox'){
this.setState({isAwesome: e.target.checked})
        }else{
            console.log('sADK')
        }
        
    }

    render(){
        const {title, text, library, check, isAwesome} = this.state;
        return (
            <>
            <input type="text" placeholder='Your name' value={this.state.title} onChange={this.handleChange} />
            <br/> <br/>
            <textarea type='text' value={this.state.text} onChange={this.handleChange}/>
            <br/> <br/>
            <select type='text' value={this.library} onChange={this.handleChange}>
                <option>React</option>
                <option>View</option>
            </select>
            <br/> <br/>
            <input type='checkbox' checked={this.isAwesome} onChange={this.handleChange}/>
            </>
        )
    }
}

export default Form
