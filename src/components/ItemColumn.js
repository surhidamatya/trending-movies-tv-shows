import React from 'react';

import ItemCard from './ItemCard';
import {PropTypes} from 'prop-types';

const ItemColumn = ({ results, title, logo }) => (
    <div className="bar">
      {logo && <img src={logo} height="80px" alt="main logo" className="main-logo"/>}
      <h2 className="heading">{title}</h2>
      <div className="row">
        {results.map((result,index)=> {
          return <ItemCard info={result} key={index}/>
        })}
      </div>
    </div>
  );

  ItemColumn.propTypes = {
  results: PropTypes.array,
  title: PropTypes.string
}
export default ItemColumn;
