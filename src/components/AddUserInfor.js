import React from "react";

let userID = 0;
class AddUserInfor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
        };
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value,
        })
    };

    handleAge = (event) => {
        this.setState({
            age: event.target.value,
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddUser({
            id: ++userID,
            name: this.state.name,
            age: this.state.age,
        })
    };
    render(){
        return (
            <>
                <div>Name User: {this.state.name}</div>
                <div>Age User: {this.state.age}</div>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <label>Name</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => {this.handleName(event)}}
                    />
                    <label>Age</label>
                    <input
                        type="text"
                        value={this.state.age}
                        onChange={(event) => {this.handleAge(event)}}
                    />
                    <button>Submit</button>
                </form>
            </>
        );
    };
}

export default AddUserInfor;