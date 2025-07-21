import React, {useEffect} from 'react';

import {hooks} from '../../hooks';
import {actions} from '../../store/actions';
import {components} from '../../components';
import {Routes} from '../../navigation/StackNavigator';

import background from '../../assets/bg/02.png';

export const EmailVerified: React.FC = () => {
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

  const renderContent = (): JSX.Element => {
    return (
      <main
        style={{zIndex: 1}}
        className='scrollable container center'
      >
        <div>
          <components.Status src={require('../../assets/icons/12.png')} />
          <h2
            style={{
              textTransform: 'capitalize',
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            Your email has been <br /> successfully verified!
          </h2>
          <p
            className='t18'
            style={{textAlign: 'center', marginBottom: 30}}
          >
            Now you can enjoy all the features of our app. Thank you for
            choosing.
          </p>
          <components.Button
            text='Done'
            to={Routes.TabNavigator}
            containerStyle={{marginBottom: 10}}
          />
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
