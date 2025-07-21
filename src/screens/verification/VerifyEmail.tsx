import {FC} from 'react';

import {hooks} from '../../hooks';
import {components} from '../../components';
import {actions} from '../../store/actions';
import {Screens} from '../../components/Footer';
import {Routes} from '../../navigation/StackNavigator';

import background from '../../assets/bg/04.png';

export const VerifyEmail: FC = () => {
  const dispatch = hooks.useDispatch();
  const navigate = hooks.useNavigate();

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        showGoBack={true}
        title='Verification'
        headerStyle={{backgroundColor: 'transparent'}}
      />
    );
  };

  const renderDescription = (): JSX.Element => {
    return (
      <p
        className='t18'
        style={{marginBottom: 30}}
      >
        Enter your OTP code here.
      </p>
    );
  };

  const renderInputFields = (): JSX.Element => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 30,
        }}
      >
        {['', '', '', '', ''].map((input, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              width: '17%',
              aspectRatio: 1 / 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              border: '1px solid #C8CDD9',
              backgroundColor: 'var(--white-color)',
            }}
          >
            <input
              maxLength={1}
              style={{
                textAlign: 'center',
                width: '100%',
                height: '100%',
                fontFamily: 'League Spartan',
                borderRadius: 10,
                border: 'none',
                fontSize: 20,
              }}
              type='number'
              min={0}
              max={9}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderIfDidNotReceiveCode = (): JSX.Element => {
    return (
      <span
        className='row-center t18'
        style={{marginBottom: 30}}
      >
        Didn’t receive the OTP?{' '}
        <button
          style={{
            marginLeft: 4,
            color: 'var(--main-color',
          }}
        >
          Resend.
        </button>{' '}
      </span>
    );
  };

  const renderButton = (): JSX.Element => {
    return (
      <components.Button
        text='verify'
        onClick={() => {
          dispatch(actions.setEmailVerified(true));
          dispatch(actions.setScreen(Screens.Profile));
          navigate(Routes.EmailVerified);
        }}
        containerStyle={{marginBottom: 20}}
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
          {renderDescription()}
          {renderInputFields()}
          {renderIfDidNotReceiveCode()}
          {renderButton()}
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
