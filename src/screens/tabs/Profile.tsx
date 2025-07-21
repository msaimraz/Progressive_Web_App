import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {hooks} from '../../hooks';
import {items} from '../../items';
import {svg} from '../../assets/svg';
import {RootState} from '../../store';
import {Link} from 'react-router-dom';
import {components} from '../../components';
import {setColor} from '../../store/slices/bgSlice';
import {Routes} from '../../navigation/StackNavigator';

export const Profile: React.FC = () => {
  hooks.useThemeColor('#f5fafb');

  const dispatch = hooks.useDispatch();

  useEffect(() => {
    dispatch(setColor('#f5fafb'));
  }, [dispatch]);

  const {emailVerified, phoneVerified} = useSelector(
    (state: RootState) => state.verificationSlice,
  );

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='My Profile'
        showBurger={true}
        showBasket={true}
      />
    );
  };

  const renderUserInfo = (): JSX.Element => {
    return (
      <Link
        style={{
          display: 'inline-flex',
          marginBottom: 16,
          marginTop: 32,
          flexDirection: 'column',
        }}
        to='/profile/edit'
        className='container clickable'
      >
        <h3 style={{textTransform: 'capitalize'}}>Dominic Parker</h3>
        <span className='t16'>dominicparker@mail.com</span>
      </Link>
    );
  };

  const renderProfileMenu = (): JSX.Element => {
    return (
      <div
        className='container'
        style={{paddingBottom: 20}}
      >
        <items.ProfileItem
          title='Personal info'
          icon={<svg.UserSvg />}
          to={Routes.EditProfile}
        />
        <items.ProfileItem
          title='Order history'
          to={Routes.OrderHistory}
          // to={Routes.OrderHistoryEmpty}
          icon={<svg.CalendarSvg />}
        />
        <items.ProfileItem
          title='My promocodes'
          icon={<svg.GiftSvg />}
          to={Routes.MyPromocodes}
          // to={Routes.MyPromocodesEmpty}
        />
        <items.ProfileItem
          to={phoneVerified ? null : Routes.SendPhoneOtp}
          title={phoneVerified ? 'Phone verified' : 'Verify phone'}
          titleStyle={{color: phoneVerified ? 'var(--main-color)' : '#FF4768'}}
          icon={
            phoneVerified ? <svg.PhoneVerifiedSvg /> : <svg.SmartphoneSvg />
          }
        />
        <items.ProfileItem
          to={emailVerified ? null : Routes.SendEmailOtp}
          title={emailVerified ? 'Email verified' : 'Verify email'}
          icon={emailVerified ? <svg.EmailVerifiedSvg /> : <svg.MailSvg />}
          titleStyle={{color: emailVerified ? 'var(--main-color)' : '#FF4768'}}
        />
        <items.ProfileItem
          to={Routes.SignIn}
          title='Sign out'
          icon={<svg.SignOutSvg />}
        />
        <items.ProfileItem
          title='Delete account'
          icon={<svg.DeleteSvg />}
          to={Routes.SignIn}
          titleStyle={{color: '#FF4768'}}
          isLast={true}
        />
      </div>
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <main className='scrollable'>
        {renderUserInfo()}
        {renderProfileMenu()}
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
