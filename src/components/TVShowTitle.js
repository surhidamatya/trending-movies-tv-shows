import React from "react";

import {PropTypes} from 'prop-types';

const TVShowTitle = ({info}) => (
  <span>{info.name}</span>
);

TVShowTitle.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
}

export default TVShowTitle;
