import React, {Component} from 'react';
import PostService from "../../Service/PostService/PostService";
import Post from "../Post/Post";


class Posts extends Component {
    PostService = new PostService()
    state={posts:[]}
    async componentDidMount(){
        let {id}=this.props
        let posts=await this.PostService.getPostById(id)
        this.setState({posts})
    }
    render() {
        let {posts}=this.state
        return (
            <div>
                {posts.map(value => <Post item={value} key={value.id}/>)}
            </div>
        );
    }
}

export default Posts;