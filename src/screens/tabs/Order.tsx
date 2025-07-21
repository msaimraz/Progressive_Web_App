import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {items} from '../../items';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {svg} from '../../assets/svg';
import {RootState} from '../../store';
import {ProductType} from '../../types';
import {components} from '../../components';
import {actions} from '../../store/actions';
import {Routes} from '../../navigation/StackNavigator';

export const Order: React.FC = () => {
  const dispatch = hooks.useDispatch();

  const [promocodeApplied, setPromocodeApplied] = useState<boolean>(false);

  hooks.useThemeColor('#f5fafb');

  const cart = useSelector((state: RootState) => state.cartSlice);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#f5fafb'));
  }, [dispatch]);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='Order'
        showBasket={true}
        showGoBack={true}
      />
    );
  };

  const renderProducts = (): JSX.Element => {
    return (
      <section
        className='container'
        style={{marginBottom: 18}}
      >
        {cart.list.map(
          (product: ProductType, index: number, array: ProductType[]) => {
            const isLast = index === array.length - 1;
            return (
              <items.OrderItem
                key={product.id}
                isLast={isLast}
                product={product}
              />
            );
          },
        )}
      </section>
    );
  };

  const renderPromocode = (): JSX.Element | null => {
    if (promocodeApplied) {
      return (
        <div
          className='container row-center'
          style={{gap: 12, marginBottom: '14%'}}
        >
          <svg.CheckPromocodeSvg />
          <span className='t18'>Promocode applied</span>
        </div>
      );
    }

    if (!promocodeApplied) {
      return (
        <div
          className='row-center container'
          style={{gap: 16, marginBottom: '14%'}}
        >
          <custom.InputField placeholder='Enter promocode' />
          <components.Button
            text='Apply'
            colorScheme='secondary'
            containerStyle={{width: '44%'}}
            onClick={() => setPromocodeApplied(true)}
          />
        </div>
      );
    }

    return null;
  };

  const renderSummary = (): JSX.Element => {
    return (
      <section
        className='container'
        style={{marginBottom: 12}}
      >
        <components.Container>
          <div
            className='row-center-space-between'
            style={{marginBottom: 6}}
          >
            <span
              className='t16'
              style={{color: 'var(--main-text)'}}
            >
              Subtotal
            </span>
            <span
              className='t16'
              style={{color: 'var(--main-text)'}}
            >
              ${cart.subtotal.toFixed(2)}
            </span>
          </div>
          <div
            className='row-center-space-between'
            style={{
              paddingBottom: 7,
              borderBottom: '1px solid #C8CDD9',
              marginBottom: 10,
            }}
          >
            <span className='t16'>Delivery</span>
            <span
              className='t16'
              style={{color: '#15C7FF'}}
            >
              Free
            </span>
          </div>
          <div className='row-center-space-between'>
            <span className='t16'>Total</span>
            <span
              className='t16'
              style={{color: 'var(--main-color)'}}
            >
              ${cart.total.toFixed(2)}
            </span>
          </div>
        </components.Container>
      </section>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <section
        className='container'
        style={{marginBottom: 20}}
      >
        <components.Button
          to={Routes.ShippingAPaymentInfo}
          text='proceed to checkout'
        />
      </section>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <main
        className='scrollable'
        style={{paddingTop: 16}}
      >
        {renderProducts()}
        {renderPromocode()}
        {renderSummary()}
        {renderButton()}
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
