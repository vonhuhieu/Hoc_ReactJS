import React from "react";
import "./DisplayInfor.scss";

class DisplayInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
    }
    handleShow = () => {
        this.setState({
            show: !this.state.show,
        })
    };
    render() {
        const { listUsers } = this.props
        return (
            <>
                <div className="displayInfor">
                    <br /><br />
                    <button onClick={() => this.handleShow()}>{this.state.show == true ? "Hide list user" : "Show list user"}</button>
                    {this.state.show == true &&
                        <div>
                            {listUsers.length > 0 && listUsers.map((value, key) => {
                                return (
                                    <div key={value.id} className={parseInt(value.age) >= 18 ? "red" : "green"}>
                                        <div>ID User: {value.id}</div>
                                        <div>Name User: {value.name}</div>
                                        <div>Age User: {value.age}</div>
                                        <button onClick={() => {this.props.handleDeleteUser(value.id)}}>Delete</button>
                                        <hr />
                                    </div>
                                );
                            })}
                        </div>
                    }
                </div>
            </>
        );
    };
}

export default DisplayInfor;