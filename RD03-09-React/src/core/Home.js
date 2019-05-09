import React, {Component} from 'react';
import AllPosts from '../posts/AllPosts';
import {alerts} from '../utils';

class Home extends Component {
  state = {err: '', msg: ''};

  componentDidMount() {
    // check if redirected here with messages in 'props'
    if (this.props.location.state) this.setState({
      err: this.props.location.state.err,
      msg: this.props.location.state.msg
    });
  };

  render() {
    const {err, msg} = this.state;
    return (
      <div>
        <div className="jumbotron">
          <h2>RD03-ReactNodeMongo</h2>
          <p className="lead">Welcome to App</p>
        </div>
        <div className="container-fluid">
          {alerts(err, msg)}
          <AllPosts />
        </div>
      </div>);
  };
};
    
export default Home;
