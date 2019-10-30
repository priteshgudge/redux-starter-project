import React from 'react';
import {Link} from 'react-router';
import Photo from './Photo';
const Single = React.createClass({
    render(){
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
        const post = this.props.posts[i];
        return (
            <div className="single-photo">
                <Photo post={post} i={i} {...this.props} />
            </div>
        )
    }
});

export default Single;