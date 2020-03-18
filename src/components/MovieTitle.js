import React from "react";

import {PropTypes} from 'prop-types';

const MovieTitle = ({info}) => (
  <span>{info.movieTitle}</span>
);

MovieTitle.propTypes = {
  info: PropTypes.shape({
    movieTitle: PropTypes.string.isRequired
  })
}
export default MovieTitle;
