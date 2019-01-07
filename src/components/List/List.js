import React, { Component, Fragment } from 'react';

class List extends Component {

  render() {
    const { items, children } = this.props;

    return (
      <Fragment>
        {items && items.map( (value) =>
          // console.log(value)
          children(value)
        )}
      </Fragment>
    )
  }

}

export default List;
