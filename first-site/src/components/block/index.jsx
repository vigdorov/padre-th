import React from 'react';
import PropTypes from 'prop-types';

const Block = props => {
  return (
    <div className={`block block-${props.template}`}>
      {
        props.children
      }
    </div>
  );
};

export default Block;

Block.propTypes = {
  template: PropTypes.oneOf(
    ['active', 'light', 'secondary', 'light-secondary', 'dark']
  ),
};

Block.defaultProps = {
  template: 'light',
};
