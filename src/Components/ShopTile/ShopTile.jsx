import React from 'react';
import Proptypes from 'prop-types';

const ShopTile = ({ shop: { name, address: { city, street, houseNumber } } }) => (
  <div>
    <h1>{name}</h1>
    <p>{city}</p>
    <p>{`${street} ${houseNumber}`}</p>
  </div>
);

ShopTile.propTypes = {
  shop: Proptypes.shape({
    name: Proptypes.string,
    address: Proptypes.shape({
      city: Proptypes.string,
      street: Proptypes.string,
      houseNumber: Proptypes.string,
    }),
  }),
};

ShopTile.defaultProps = {
  shop: null,
};

export default ShopTile;
