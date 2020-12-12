import React, {Component} from 'react';
import UserService from "../../Service/UserService/UserService";
import User from "../User/User";


class AllUser extends Component {
    UserService = new UserService()
    state={users:[]}

    async componentDidMount() {
        let users = await this.UserService.getUsers()
        this.setState({users})
    }

    render() {
        let {users}=this.state
        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllUser;