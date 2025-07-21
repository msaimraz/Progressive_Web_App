import {Action} from 'redux';
import React, {useEffect} from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';

import {hooks} from '../../hooks';
import {RootState} from '../../store';
import {components} from '../../components';
import {actions} from '../../store/actions';

import background from '../../assets/bg/02.png';

export const CartEmpty: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, void, Action>>();

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
        showBasket={true}
        showBurger={true}
        title='Cart'
        headerStyle={{backgroundColor: 'transparent'}}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <main
        className='scrollable center'
        style={{zIndex: 1}}
      >
        <div className='container'>
          <components.Status src={require('../../assets/icons/04.png')} />
          <h2
            style={{
              textAlign: 'center',
              marginBottom: 12,
              textTransform: 'capitalize',
            }}
          >
            Your cart is empty!
          </h2>
          <p
            className='t18'
            style={{textAlign: 'center', marginBottom: 30}}
          >
            Looks like you haven't made <br />
            your order yet.
          </p>
          <components.Button
            text='shop now'
            to='/shop'
          />
        </div>
      </main>
    );
  };

  const renderFooter = (): JSX.Element => {
    return <components.Footer />;
  };

  return (
    <>
      {renderBackground()}
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </>
  );
};
