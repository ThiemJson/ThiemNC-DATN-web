import React, { Component } from "react";
import { LoadingContext } from "../../../context/counter_context/CounterContext";

export class LoadingProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };

    this.setHidden = this.setHidden.bind(this);
  }

  setHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render() {
    return (
      <LoadingContext.Provider
        value={{
          isHidden: this.state.isHidden,
          setHidden: this.setHidden,
        }}
      >
        {this.props.children}
      </LoadingContext.Provider>
    );
  }
}
