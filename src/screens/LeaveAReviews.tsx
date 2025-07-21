import React, {useEffect, useState} from 'react';

import background from '../assets/bg/02.png';

import {hooks} from '../hooks';
import {components} from '../components';
import {actions} from '../store/actions';

export const LeaveAReviews: React.FC = () => {
  const dispatch = hooks.useDispatch();

  hooks.useThemeColor('#fff');

  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#fff'));
  }, [dispatch]);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        showGoBack={true}
        title='Leave A Review'
        headerStyle={{backgroundColor: 'transparent'}}
      />
    );
  };

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
        className='scrollable container'
      >
        <div style={{paddingTop: 20, paddingBottom: 20}}>
          <components.Status src={require('../assets/icons/09.png')} />
          <h2
            style={{
              textAlign: 'center',
              textTransform: 'capitalize',
              marginBottom: 16,
            }}
          >
            Please rate the quality of <br /> service for the order!
          </h2>
          <components.RatingStars
            containerStyle={{
              marginBottom: 20,
              alignSelf: 'center',
            }}
            setRating={setRating}
            rating={rating}
          />
          <p
            className='t18'
            style={{textAlign: 'center', marginBottom: 30}}
          >
            Your comments and suggestions help us <br /> improve the service
            quality better!
          </p>
          <textarea
            placeholder='Enter your comment'
            style={{
              border: '1px solid #e0e0e0',
              backgroundColor: '#fff',
              padding: 20,
              borderRadius: 20,
              width: '100%',
              height: 120,
              resize: 'none',
              marginBottom: 16,
            }}
            className='t16'
          />
          <components.Button
            text='submit'
            to='back'
          />
        </div>
      </main>
    );
  };

  return (
    <>
      {renderBackground()}
      {renderHeader()}
      {renderContent()}
    </>
  );
};
