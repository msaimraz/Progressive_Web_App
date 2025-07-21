import React, {useEffect} from 'react';

import {hooks} from '../hooks';
import {components} from '../components';
import {actions} from '../store/actions';

import background from '../assets/bg/02.png';

export const ForgotPasswordSentEmail: React.FC = () => {
  const dispatch = hooks.useDispatch();

  hooks.useThemeColor('#fff');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#fff'));
  }, [dispatch]);

  const renderContent = (): JSX.Element => {
    return (
      <main
        className='scrollable'
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
          <components.Status src={require('../assets/icons/07.png')} />

          <h2
            style={{
              textAlign: 'center',
              marginBottom: 12,
              textTransform: 'capitalize',
            }}
          >
            Your password has <br />
            been reset!
          </h2>
          <p
            className='t18'
            style={{textAlign: 'center', marginBottom: 30}}
          >
            Log in with your new credentials. <br /> Welcome back!
          </p>
          <components.Button
            text='done'
            to='/'
          />
        </div>
      </main>
    );
  };

  return renderContent();
};
