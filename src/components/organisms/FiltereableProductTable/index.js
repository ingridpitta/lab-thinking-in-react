import React from 'react';
import ProductTable from '../../molecules/ProductTable';
import SearchBar from '../../molecules/SearchBar';

const FiltereableProductTable = ({ data, filterProducts, stock }) => {
  return (
    <div className="FiltereableProductTable--container">
      <SearchBar onChange={filterProducts} stock={stock} />
      <ProductTable data={data} />
    </div>
  );
};

export default FiltereableProductTable;
