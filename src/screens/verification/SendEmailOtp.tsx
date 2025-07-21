import React, {useEffect} from 'react';

import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {actions} from '../../store/actions';
import {components} from '../../components';
import {Routes} from '../../navigation/StackNavigator';

import background from '../../assets/bg/04.png';

export const SendEmailOtp: React.FC = () => {
  const dispatch = hooks.useDispatch();

  hooks.useThemeColor('#fff');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#fff'));
  }, [dispatch]);

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Verify Your Email'
        headerStyle={{backgroundColor: 'transparent'}}
      />
    );
  };

  const renderContent = () => {
    return (
      <main className='scrollable'>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginTop: 16,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
            paddingBottom: 30,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 30,
            borderRadius: 20,
          }}
        >
          <p
            className='t18'
            style={{marginBottom: 30, textAlign: 'center'}}
          >
            We have sent you an email with a verification code.
          </p>
          <custom.InputField
            placeholder='dominicparker@mail.com'
            containerStyle={{marginBottom: 16}}
          />
          <components.Button
            text='confirm'
            to={Routes.VerifyEmail}
          />
        </div>
      </main>
    );
  };

  return (
    <>
      {renderHeader()}
      {renderContent()}
    </>
  );
};
