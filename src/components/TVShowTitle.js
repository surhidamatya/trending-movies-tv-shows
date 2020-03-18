import React from "react";

import {PropTypes} from 'prop-types';

const TVShowTitle = ({info}) => (
  <span>{info.tvShowTitle}</span>
);

TVShowTitle.propTypes = {
  info: PropTypes.shape({
    tvShowTitle: PropTypes.string.isRequired
  })
}

export default TVShowTitle;
