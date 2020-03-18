import React from "react";

import {PropTypes} from 'prop-types';

const MovieTitle = ({info}) => (
  <span>{info.title}</span>
);

MovieTitle.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
}
export default MovieTitle;
