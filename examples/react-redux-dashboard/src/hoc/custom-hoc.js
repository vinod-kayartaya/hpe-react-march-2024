import React, { Component } from 'react';

// a higher-order-component is a function that takes a component as argument
// and returns the same/modified version of the same/totally a different component

export const withLoading = (WrappedComponent) => {
  return class ModifiedComponent extends Component {
    render() {
      return (
        <>
          <h3>This is the modified component</h3>
          <WrappedComponent />
        </>
      );
    }
  };
};

export const withBox = (OldComp, options) => () =>
  (
    <>
      <div
        style={{
          border: '2px double ' + (options?.color || 'blue'),
          padding: '30px',
        }}
      >
        <OldComp />
      </div>
    </>
  );

export const withUrl = (OldComp, url, propName) => (props) => {
  const newProp = {
    [propName]: {
      contacts: [],
    },
  };

  return (
    <>
      <OldComp {...props} {...newProp} />
    </>
  );
};
