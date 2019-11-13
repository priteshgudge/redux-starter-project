import React from 'react';

const Comments = React.createClass({
    renderComment(comment,i){
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment"> &times;</button>
                </p>
            </div>
        );
    },
    handleSubmit(event){
        event.preventDefault();
        console.log("Submitting the form ");
        console.log(this.refs);

        const postId = this.props.postId;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        console.log(author,postId, comment);
        this.props.addComment(postId, author, comment);

    },
    render(){
        const postId = this.props.postId;
        const postComments = this.props.comments;
        return(
            <div className="comments">
                {postComments.map((comment,i)=> this.renderComment(comment,i))}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input  type="text" ref="author" name="author" placeholder="author"/>
                    <input type="text" ref="comment" name="comment" placeholder="comment"/>
                    <input type="submit" hidden/>

                </form>

            </div>
        )
    }
});

export default Comments;