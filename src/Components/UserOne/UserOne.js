import React, {Component} from 'react';
import UserService from "../../Service/UserService/UserService";

class UserOne extends Component {
    state={user:[]}
    UserService = new UserService()

    async componentDidMount() {
        let {id}=this.props
        let user=await this.UserService.getUsersById(id)

        this.setState({user})
    }

    render() {
        let{user}=this.state
        return (
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>Phone: {user.phone}</div>
                    <div>Email: {user.email}</div>
                    <div>Website: {user.website}</div>
                </div>
            </div>
        );
    }
}

export default UserOne;