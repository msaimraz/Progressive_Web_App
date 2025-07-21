import React, {useEffect} from 'react';

import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {svg} from '../../assets/svg';
import {actions} from '../../store/actions';
import {components} from '../../components';
import {Routes} from '../../navigation/StackNavigator';

import background from '../../assets/bg/04.png';

export const SendPhoneOtp: React.FC = () => {
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
        title='Verify Your Phone'
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
            We have sent you an SMS with a code to number +17 0123456789.
          </p>
          <custom.InputField
            placeholder='+170123456789'
            containerStyle={{marginBottom: 16}}
            icon={<svg.CheckSvg />}
          />
          <components.Button
            text='confirm'
            to={Routes.VerifyPhone}
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
