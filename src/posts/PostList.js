import React, {Component} from 'react';
import Post from './Post';

class PostList extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.posts.map((d, index) =>
          <Post
            show={this.props.show}
            Usun={this.props.Usun}
            key={d.id}
            {...d}
          />
        )}
      </div>
    );
  }
}

export default PostList;
