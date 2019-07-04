import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
  }
  //   componentWillMount() {
  //     console.log("will mount.");
  //   }
  //   componentDidUpdate() {
  //     console.log("did update.");
  //   }
  //   componentWillUpdate() {
  //     console.log("will update.");
  //   }
  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("will receive props.");
  //   }
  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return null;
  //   }
  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("get snapshot before update.");
  //   }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p className="lead">{body}</p>
      </div>
    );
  }
}

export default Test;
