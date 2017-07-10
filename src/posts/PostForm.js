import React from 'react';

import Button from '../user-inferface/Button';
//import styled from 'styled-components';
class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: 'domsylne', body: 'domysle'};
  }

  updateName = e => {
    this.setState({
      title: e.target.value,
    });
  };

  updateBody = e => {
    this.setState({
      body: e.target.value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body,
    });
  };

  render() {
    return (
      <form>
        <div className="panel panel-default">
          <div className="row" style={{padding: '5px'}}>
            <div className="col-md-4">
              <label>title</label>
              <br />
              <input
                className="form-control"
                style={{width: '200px'}}
                onChange={this.updateName}
                value={this.state.title}
              />
              <label>body</label>
              <br />
              <input
                className="form-control"
                style={{width: '200px'}}
                onChange={this.updateBody}
                value={this.state.body}
              />
            </div>

            <div>
              <Button
                className="btn btn-success"
                label="Add"
                onClick={this.onSubmit}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default PostForm;
