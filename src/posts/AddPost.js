import React from 'react';
import PostForm from './PostForm';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import apiClient from '../lib/api-client';

class AddPost extends React.Component {
  addPost = post => {
    apiClient
      .post('https://praktyki-react.herokuapp.com/example/api/v1/posts', {
        post: {
          title: post.title,
          body: post.body,
          user_id: this.props.session.user_id,
        },
      })
      .then(response => {
        this.props.router.push('/posts');
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return <PostForm onSubmit={this.addPost} />;
  }
}

const mapStateToProps = state => {
  return {
    session: state.session,
  };
};

export default connect(mapStateToProps)(withRouter(AddPost));
