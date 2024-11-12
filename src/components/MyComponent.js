import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listUsers: [],
        };
    }

    handleAddUser = (user) => {
        this.setState({
            listUsers: [user, ...this.state.listUsers],
        })
    };

    handleDeleteUser = (userID) => {
        this.setState({
            listUsers: this.state.listUsers.filter((user) => {
                return user.id !== userID;
            }),
        })
    };
    render(){
        return (
            <>
                <div>Component của tôi</div>
                <AddUserInfor handleAddUser={this.handleAddUser}/>
                <DisplayInfor listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser}/>
            </>
        );
    };
}

export default MyComponent;