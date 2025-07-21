import React, {useEffect} from 'react';

import {hooks} from '../../hooks';
import {actions} from '../../store/actions';
import {components} from '../../components';

import background from '../../assets/bg/02.png';

export const WishlistEmpty: React.FC = () => {
  const dispatch = hooks.useDispatch();

  hooks.useThemeColor('#fff');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#fff'));
  }, [dispatch]);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        headerStyle={{
          backgroundColor: 'transparent',
        }}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <main className='scrollable'>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='container'>
            <components.Status src={require('../../assets/icons/05.png')} />

            <h2
              style={{
                textAlign: 'center',
                marginBottom: 12,
                textTransform: 'capitalize',
              }}
            >
              Your Wishlist is empty!
            </h2>
            <p
              className='t18'
              style={{textAlign: 'center', marginBottom: 30}}
            >
              Looks like you haven't chosen the <br /> items you like.
            </p>
            <components.Button
              text='shop now'
              to='/shop'
            />
          </div>
        </div>
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
