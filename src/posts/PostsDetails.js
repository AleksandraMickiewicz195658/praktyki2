import React from 'react';
import apiClient from '../lib/api-client';

class PostDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {
        id: '',
        title: '',
        body: '',
      },
    };
  }

  componentDidMount() {
    apiClient
      .get(`/example/api/v1/posts/` + this.props.params.id)
      .then(response => {
        console.log(response.data);
        this.setState({
          posts: response.data,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.posts.title} {this.state.posts.body}
      </div>
    );
  }
}

export default PostDetails;
