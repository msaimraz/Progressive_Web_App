import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {hooks} from '../hooks';
import {RootState} from '../store';
import {ProductType} from '../types';
import {actions} from '../store/actions';
import {components} from '../components';
import {Routes} from '../navigation/StackNavigator';

export const Checkout: React.FC = () => {
  const dispatch = hooks.useDispatch();

  hooks.useThemeColor('#f5fafb');

  const cart = useSelector((state: RootState) => state.cartSlice);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#f5fafb'));
  }, [dispatch]);

  const containerStyle: React.CSSProperties = {
    border: '1px solid #e0e0e0',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
  };

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='Checkout'
        showGoBack={true}
      />
    );
  };

  const renderOrderSummary = (): JSX.Element => {
    return (
      <section
        className='container'
        style={{marginBottom: 16}}
      >
        {/* Container */}
        <div style={{...containerStyle}}>
          <div
            className='row-center-space-between'
            style={{marginBottom: 12}}
          >
            <h5>My order</h5>
            <h5>${cart.total.toFixed(2)}</h5>
          </div>
          {/* Products */}
          {cart.list.map(
            (product: ProductType, index: number, array: ProductType[]) => {
              const isLast = index === array.length - 1;
              return (
                <div
                  key={product.id}
                  className='row-center-space-between'
                  style={{marginBottom: isLast ? 6 : 6}}
                >
                  <span className='t16'>{product.name}</span>
                  <span className='t16'>
                    {product.quantity} x ${product.price}
                  </span>
                </div>
              );
            },
          )}
          {/* Discount */}
          <div
            className='row-center-space-between'
            style={{marginBottom: 6}}
          >
            <span className='t16'>Discount</span>
            <span className='t16'>-${cart.discount}</span>
          </div>
          {/* Delivery */}
          <div className='row-center-space-between'>
            <span className='t16'>Delivery</span>
            <span
              className='t16'
              style={{color: '#15C7FF'}}
            >
              Free
            </span>
          </div>
          {/* Promocode */}
        </div>
      </section>
    );
  };

  const renderShippingDetails = (): JSX.Element => {
    return (
      <section
        className='container'
        style={{marginBottom: 16}}
      >
        <div
          style={{...containerStyle, display: 'flex', flexDirection: 'column'}}
        >
          <h5 style={{marginBottom: 12}}>Shipping details</h5>
          <span
            className='t16'
            style={{marginBottom: 6}}
          >
            Dominic Parker
          </span>
          <span
            className='t16 number-of-lines-1'
            style={{marginBottom: 6}}
          >
            8000 S Kirkland Ave, Chicago, IL 6065...
          </span>
          <span className='t16 number-of-lines-1'>**** 4864</span>
        </div>
      </section>
    );
  };

  const renderComment = (): JSX.Element => {
    return (
      <section className='container'>
        <textarea
          placeholder='Enter your comment'
          style={{
            ...containerStyle,
            width: '100%',
            height: 120,
            resize: 'none',
            marginBottom: 16,
          }}
          className='t16'
        />
      </section>
    );
  };

  const renderFooter = (): JSX.Element => {
    return (
      <section
        style={{
          padding: 20,
          backgroundColor: 'var(--main-background)',
        }}
      >
        <components.Button
          to={Routes.OrderSuccessful}
          // to={Routes.OrderFailed}
          text={`Confirm order ($${cart.total.toFixed(2)})`}
        />
      </section>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <main
        className='scrollable'
        style={{paddingTop: 16, paddingBottom: 20}}
      >
        {renderOrderSummary()}
        {renderShippingDetails()}
        {renderComment()}
      </main>
    );
  };

  return (
    <>
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </>
  );
};
