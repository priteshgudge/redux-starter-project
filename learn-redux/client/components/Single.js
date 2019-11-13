import React from 'react';
import {Link} from 'react-router';
import Photo from './Photo';
import Comments from './Comments';
const Single = React.createClass({
    render(){
        const {postId} = this.props.params;
        const i = this.props.posts.findIndex((post) => post.code === postId);
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];
        //console.log(i, postId, this.props.comments[postId]);
        return (
            <div className="single-photo">
                <Photo post={post} i={i} {...this.props} />
                <Comments comments={postComments}
                    postId={postId} addComment={this.props.addComment}

                />
            </div>
        )
    }
});

export default Single;