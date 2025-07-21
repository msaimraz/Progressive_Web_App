import React from 'react';
import {useSelector} from 'react-redux';

import {RootState} from '../store';
import {Home} from '../screens/tabs/Home';
import {Order} from '../screens/tabs/Order';
import {Profile} from '../screens/tabs/Profile';
import {Wishlist} from '../screens/tabs/Wishlist';
import {CartEmpty} from '../screens/tabs/CartEmpty';
import {Categories} from '../screens/tabs/Categories';
import {WishlistEmpty} from '../screens/tabs/WishlistEmpty';

export const TabNavigator: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cartSlice);
  const wishlist = useSelector((state: RootState) => state.wishlistSlice);

  const currentTabScreen = useSelector(
    (state: RootState) => state.tabSlice.screen,
  );

  const renderScreen = (): JSX.Element | null => {
    // Home screen
    if (currentTabScreen === 'Home') {
      return <Home />;
    }

    // Search screen
    if (currentTabScreen === 'Search') {
      return <Categories />;
    }

    // Profile screen
    if (currentTabScreen === 'Order') {
      if (cart.list.length > 0) {
        return <Order />;
      }
    }

    // If cart is empty
    if (currentTabScreen === 'Order') {
      if (cart.list.length === 0) {
        return <CartEmpty />;
      }
    }

    // Wishlist screen
    if (currentTabScreen === 'Wishlist') {
      if (wishlist.list.length > 0) {
        return <Wishlist />;
      }
    }

    // If wishlist is empty
    if (currentTabScreen === 'Wishlist') {
      if (wishlist.list.length === 0) {
        return <WishlistEmpty />;
      }
    }

    // Profile screen
    if (currentTabScreen === 'Profile') {
      return <Profile />;
    }

    return null;
  };

  return renderScreen();
};
