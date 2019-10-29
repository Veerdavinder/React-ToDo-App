import React,{Component} from 'react';

class Movie extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:''
        }

    }
    updateInputValue(evt){
        this.setState({
            inputValue:evt.target.value
        })
    }
    render(){
        return(
            <div>
                {this.props.text}
                <button>X</button>
                <input 
                value={this.props.newMovieName}/>
                onChange={()=>this.updateInputValue()}
                <button>Edit</button>
            </div>
        )
    }
}

export default Movie;