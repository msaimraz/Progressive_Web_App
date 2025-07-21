import React, {useEffect} from 'react';

import {hooks} from '../hooks';
import {actions} from '../store/actions';
import {components} from '../components';
import {Routes} from '../navigation/StackNavigator';

import background from '../assets/bg/02.png';

export const OrderFailed: React.FC = () => {
  const dispatch = hooks.useDispatch();
  const navigate = hooks.useNavigate();

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
            Sorry! Your order has failed!
          </h2>
          <p
            className='t18'
            style={{textAlign: 'center', marginBottom: 30}}
          >
            Something went wrong. Please try <br /> again to continue your
            order.
          </p>
          <div
            style={{gap: 15}}
            className='row-center'
          >
            <components.Button
              text='Try again'
              colorScheme='secondary'
              to={Routes.TabNavigator}
              containerStyle={{width: '100%'}}
            />
            <components.Button
              text='My profile'
              to={Routes.TabNavigator}
              onClick={() => {
                dispatch(actions.setScreen('Profile'));
                navigate(Routes.TabNavigator);
              }}
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
