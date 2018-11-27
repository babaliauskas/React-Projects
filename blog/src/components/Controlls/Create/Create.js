import React from 'react';
import Button from '../../Button/Button';
import classes from './Create.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      post: '',
      id: new Date()
    };
  }

  titleHandler = e => {
    const title = e.target.value;
    this.setState({ title });
  };

  postHandler = e => {
    const post = e.target.value;
    this.setState({ post });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onAddPost({ title: this.state.title, post: this.state.post });
    this.setState({ title: '', post: '', })
    this.props.history.push('/')
  };

  render() {
    return (
      <div className={classes.Create}>
        <form onSubmit={this.onSubmit} className={classes.Form}>
          <input
            autoFocus
            className={classes.Input}
            type="text"
            placeholder="Post Title"
            onChange={this.titleHandler}
            value={this.state.title}
          />
          <textarea
            className={classes.Input}
            type="text"
            placeholder="Post"
            onChange={this.postHandler}
            value={this.state.post}
          />
          <Button> Post </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddPost: post => dispatch(actions.addPost(post))
});

export default connect(
  null,
  mapDispatchToProps
)(Create);
