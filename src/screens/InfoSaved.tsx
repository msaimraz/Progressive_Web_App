import React, {useEffect} from 'react';

import {hooks} from '../hooks';
import {components} from '../components';
import {setColor} from '../store/slices/bgSlice';

import background from '../assets/bg/02.png';

export const InfoSaved: React.FC = () => {
  const dispatch = hooks.useDispatch();

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const originalColor = metaThemeColor?.getAttribute('content');

    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#ffffff');
    }

    dispatch(setColor('var(--white-color)'));

    return () => {
      if (metaThemeColor && originalColor) {
        metaThemeColor.setAttribute('content', originalColor);
      }

      dispatch(setColor('var(--main-background)'));
    };
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
          <components.Status src={require('../assets/icons/10.png')} />

          <h2 style={{textAlign: 'center', marginBottom: 12}}>Info Saved!</h2>
          <p
            className='t18'
            style={{textAlign: 'center', marginBottom: 30}}
          >
            Your personal information has been <br /> securely stored.
          </p>
          <components.Button
            text='done'
            to='back'
          />
        </div>
      </main>
    );
  };

  return renderContent();
};
