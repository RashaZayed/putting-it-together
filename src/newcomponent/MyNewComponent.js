import React,{Component}from 'react';
import './MyNewComponent.css';

class MyNewComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            age: this.props.age
        }
    }
    ageInc =()=> {
        this.setState({ age: this.state.age + 1 });
    
     }
    

    render(){
        return(
            <div>
               <h1> {this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
               <p> HairColor: {this.props.hairColor}</p>
            
            <button className='btn' onClick={this.ageInc}>Happy Birthday {this.props.firstName} {this.props.lastName}</button>
            
            </div>




        )
    }
}
export default MyNewComponent