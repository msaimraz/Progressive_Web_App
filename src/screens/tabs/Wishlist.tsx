import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {hooks} from '../../hooks';
import {items} from '../../items';
import {RootState} from '../../store';
import {ProductType} from '../../types';
import {actions} from '../../store/actions';
import {components} from '../../components';

export const Wishlist: React.FC = () => {
  const dispatch = hooks.useDispatch();

  const wishlist = useSelector((state: RootState) => state.wishlistSlice);

  hooks.useThemeColor('#F5FAFB');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#F5FAFB'));
  }, [dispatch]);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='Wishlist'
        showBurger={true}
        showBasket={true}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <main
        className='container scrollable'
        style={{paddingTop: 16}}
      >
        {wishlist.list.map(
          (product: ProductType, index: number, array: ProductType[]) => {
            const isLast = index === array.length - 1;
            return (
              <items.WishlistItem
                key={index}
                isLast={isLast}
                product={product}
              />
            );
          },
        )}
      </main>
    );
  };

  const renderFooter = (): JSX.Element => {
    return <components.Footer />;
  };

  return (
    <>
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </>
  );
};
