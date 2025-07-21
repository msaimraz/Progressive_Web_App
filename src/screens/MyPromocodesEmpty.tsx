import React, {useEffect} from 'react';

import {hooks} from '../hooks';
import {custom} from '../custom';
import {components} from '../components';
import {actions} from '../store/actions';

import background from '../assets/bg/02.png';

export const MyPromocodesEmpty: React.FC = () => {
  const dispatch = hooks.useDispatch();

  hooks.useThemeColor('#fff');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#fff'));
  }, [dispatch]);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='My promocodes'
        showGoBack={true}
        headerStyle={{backgroundColor: 'transparent'}}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <div
        className='scrollable'
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          className='container'
          style={{
            paddingTop: 32,
            paddingBottom: 20,
          }}
        >
          <components.Status src={require('../assets/icons/11.png')} />

          <h2
            style={{
              textAlign: 'center',
              marginBottom: 12,
              textTransform: 'capitalize',
            }}
          >
            Your don’t have <br />
            promocodes yet!
          </h2>
          <p
            className='t18'
            style={{textAlign: 'center', marginBottom: 30}}
          >
            Stay tuned for exclusive offers to elevate <br /> your plant
            shopping experience.
          </p>
          <custom.InputField
            placeholder='Discount2024'
            containerStyle={{
              marginBottom: 16,
            }}
          />
          <components.Button
            to='back'
            text='Add a  promocode'
          />
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {renderHeader()}
      {renderContent()}
    </div>
  );
};
