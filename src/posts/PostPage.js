import React from 'react';
import PostList from './PostList.js';
//import styled from 'styled-components';
import ButtonAlert from '../user-inferface/ButtonAlert';
//import ParityList from './ParityList';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import apiClient from '../lib/api-client';

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fraza: '',
      posts: this.props.posts,
    };
  }

  fetchpost = () => {
    apiClient.get('/example/api/v1/posts').then(response => {
      this.props.dispatch({
        type: 'FETCH-POST',
        payload: response.data.posts,
      });
    });
  };

  componentDidMount = () => {
    this.fetchpost();
  };

  usun = postId => {
    apiClient
      .delete('/example/api/v1/posts/' + postId)
      .then(this.fetchpost)
      .catch(error => {
        console.log(error);
      });
  };

  Szukaj = e => {
    e.preventDefault();
    this.setState({
      fraza: e.target.value,
    });
  };

  show = id => {
    /// this.props.dispatch({type: 'SHOW_POST', id: id});
    this.props.router.push(`/posts-details/${id}`);
  };

  render() {
    const postsToRender = this.props.posts.postCollections.filter(p =>
      p.title.includes(this.state.fraza)
    );

    return (
      <div>
        {this.props.injectedProp}
        <ButtonAlert label="cc" onClick={this.props.injectedProp} />
        <form>
          <label>Wyszukiwanie</label>
          <input
            className="form-control"
            style={{width: '800px', marginBottom: '10px'}}
            onChange={this.Szukaj}
            value={this.state.fraza}
          />
        </form>
        <PostList show={this.show} Usun={this.usun} posts={postsToRender} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    session: state.session,
  };
};

export default connect(mapStateToProps)(withRouter(PostPage));
