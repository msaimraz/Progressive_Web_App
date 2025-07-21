import React, {useEffect} from 'react';

import {hooks} from '../hooks';
import {actions} from '../store/actions';
import {components} from '../components';

import background from '../assets/bg/02.png';

export const OrderSuccessful: React.FC = () => {
  const dispatch = hooks.useDispatch();

  hooks.useThemeColor('#fff');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#fff'));
    dispatch(actions.resetCart());
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

  const renderContent = (): JSX.Element => {
    return (
      <main
        className='scrollable container center'
        style={{zIndex: 1}}
      >
        <div style={{width: '100%'}}>
          <components.Status src={require('../assets/icons/13.png')} />
          <h2
            style={{
              textTransform: 'capitalize',
              marginBottom: 12,
              textAlign: 'center',
            }}
          >
            Thank you for your order!
          </h2>
          <p
            className='t18'
            style={{textAlign: 'center', marginBottom: 30}}
          >
            Your order will be delivered on time. <br /> Thank you!
          </p>
          <div
            style={{gap: 15}}
            className='row-center'
          >
            <components.Button
              to='/profile/orders'
              text='View orders'
              colorScheme='secondary'
              containerStyle={{width: '100%'}}
            />
            <components.Button
              text='Go Shopping'
              to='/tab-navigator'
              containerStyle={{width: '100%'}}
            />
          </div>
        </div>
      </main>
    );
  };

  return (
    <>
      {renderBackground()}
      {renderContent()}
    </>
  );
};
