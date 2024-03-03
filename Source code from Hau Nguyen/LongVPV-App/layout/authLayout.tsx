import React, { Component } from "react";

export default class AuthLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="auth-wrapper">
          <div>{this.props.children}</div>
        </div>
        <style jsx>{`
          .auth-wrapper {
          }
        `}</style>
      </React.Fragment>
    );
  }
}
