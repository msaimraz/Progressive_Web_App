import React, {useEffect} from 'react';

import {hooks} from '../hooks';
import {actions} from '../store/actions';
import {components} from '../components';

import background from '../assets/bg/02.png';

export const OrderHistoryEmpty: React.FC = () => {
  const dispatch = hooks.useDispatch();

  hooks.useThemeColor('#fff');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#fff'));
  }, [dispatch]);

  const renderBackground = (): JSX.Element => {
    return (
      <img
        src={background}
        alt='background'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          inset: 0,
        }}
      />
    );
  };

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='Order History'
        showGoBack={true}
        headerStyle={{backgroundColor: 'transparent'}}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <main
        className='scrollable container'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <components.Status src={require('../assets/icons/06.png')} />
        <h2
          style={{
            textTransform: 'capitalize',
            textAlign: 'center',
            marginBottom: 30,
          }}
        >
          Your order history is <br /> currently empty!
        </h2>
        <p
          className='t18'
          style={{textAlign: 'center', marginBottom: 30}}
        >
          Start filling it up with your past purchases to <br /> keep track of
          your shoe shopping journey.
        </p>
        <components.Button
          to='/shop'
          text='shop now'
        />
      </main>
    );
  };

  return (
    <>
      {renderBackground()}
      {renderHeader()}
      {renderContent()}
    </>
  );
};
