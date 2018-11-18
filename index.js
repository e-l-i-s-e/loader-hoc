import React, { Component } from 'react';

const LoaderWrapper = (WrappedComponent) => {
  return class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.state = this.mapPropsToState(props);
    }

    mapPropsToState = props => (
      Object.keys(props)
        .reduce((state, name) => {
          const prop = this.wrapProp(name, props[name]);
          return prop ?
            { ...state, [name]: prop } : { ...state };
        }, {}))

    wrapProp = (name, prop) => {
      if (typeof prop === 'function') {
        const wrappedProp = (...args) => {
          const action = prop(...args);
          if (action instanceof Promise) {
            this.setState({
              [`${name}Status`]: {
                isLoading: true
              }
            });
            return action
              .then(() => {
                this.setState({
                  [`${name}Status`]: {
                    isLoading: false
                  },
                });
              })
              .catch(error => {
                this.setState({
                  [`${name}Status`]: {
                    isLoading: false,
                    error
                  }
              });
            });
          }
          return action;
        };
        return wrappedProp;
      }
      return undefined;
    };

    render = () => (
      <WrappedComponent {...{ ...this.props, ...this.state }} />
    )
  }
};

export default LoaderWrapper;
