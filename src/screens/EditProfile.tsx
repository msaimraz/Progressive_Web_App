import React, {useEffect} from 'react';

import {hooks} from '../hooks';
import {custom} from '../custom';
import {components} from '../components';
import {actions} from '../store/actions';

import background from '../assets/bg/01.png';

export const EditProfile: React.FC = () => {
  const dispatch = hooks.useDispatch();

  hooks.useThemeColor('#fff');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#fff'));
  }, [dispatch]);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='Edit Profile'
        showGoBack={true}
        headerStyle={{backgroundColor: 'transparent'}}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    return (
      <section className='scrollable'>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: 20,
            margin: 20,
            borderRadius: 20,
          }}
        >
          <custom.InputField
            placeholder='Dominic Paradis'
            containerStyle={{marginBottom: 16}}
          />
          <custom.InputField
            placeholder='dominicparker@mail.com'
            containerStyle={{marginBottom: 16}}
          />
          <custom.InputField
            placeholder='+17123456789'
            containerStyle={{marginBottom: 16}}
          />
          <custom.InputField
            placeholder='USA / New York'
            containerStyle={{marginBottom: 16}}
          />
          <components.Button
            text='save changes'
            to='/info-saved'
          />
        </div>
      </section>
    );
  };

  return (
    <>
      {renderHeader()}
      {renderContent()}
    </>
  );
};
