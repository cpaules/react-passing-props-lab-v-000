import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, filters, currentFilter, handleFilterChange }) => 
  
  <div className="fruit-basket">
    <Filter filters={filters} handleChange={handleFilterChange} />
    <FilteredFruitList fruit={fruit} filter={currentFilter} />
  </div>
  
  FruitBasket.defaultProps = {
    fruit: [],
    filters: [],
    currentFilter: null,
    updateFilterCallback: null
  };

export default FruitBasket;
