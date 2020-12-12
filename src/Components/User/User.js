import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../../App.css'

class User extends Component {
    render() {
        let {item, match:{url}}=this.props
        return (
            <div>
                <div className={'User-Block'}>
                    <div>{item.id}-{item.name} -</div>
                    <button><Link to={`${url}/${item.id}`}>Details</Link></button>
                    <button><Link to={`${url}/${item.id}/posts`}>Post</Link></button>
                </div>
            </div>
        );
    }
}

export default withRouter(User);