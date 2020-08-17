import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllShopsPending } from '../../actions/AllShopActions';
import Header from '../../Containers/Header';
import ShopTile from '../../components/ShopTile/ShopTile';

const MainPage = ({ dispatchGetAllShopsPending, shops }) => {
  useEffect(() => {
    dispatchGetAllShopsPending();
  }, []);

  return (
    <div className="app-main-page">
      <Header />
      <div>
        Main page route lófasz
        <div className="app-mainpage-shop-container">
          {
            !shops
              ? ':::::::loading lófasz shops:::::::'
              : (
                shops.map((shop) => (
                  <ShopTile key={shop.id} shop={shop} />
                ))
              )
          }
        </div>
      </div>
    </div>
  );
};

MainPage.propTypes = {
  shops: Proptypes.arrayOf(
    Proptypes.shape({}),
  ),
  dispatchGetAllShopsPending: Proptypes.func.isRequired,
};

MainPage.defaultProps = {
  shops: null,
};

const mapDispatchToProps = {
  dispatchGetAllShopsPending: getAllShopsPending,
};

const mapStateToProps = (store) => ({
  shops: store.saveAllShops.shops,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
