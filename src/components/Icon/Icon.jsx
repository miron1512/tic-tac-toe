import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, className, ...rest }) => {
  return (
    <i
      className={`fa fa-${icon} ${className}`}
      {...rest}
    />
  );
};

Icon.defaultProps = {
  className: '',
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;