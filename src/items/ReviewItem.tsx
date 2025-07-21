import React from 'react';

import {ReviewType} from '../types';
import {components} from '../components';

type Props = {
  review: ReviewType;
  isLast: boolean;
};

export const ReviewItem: React.FC<Props> = ({review, isLast}) => {
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 20,
        marginBottom: isLast ? 0 : 12,
        backgroundColor: 'var(--white-color)',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
      }}
    >
      <img
        src={review.photo}
        alt={review.name}
        style={{
          width: 30,
          height: 30,
          marginRight: 14,
          borderRadius: '50%',
        }}
      />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{marginBottom: 7}}>
          <h5 style={{marginBottom: 2}}>{review.name}</h5>
          <span className='t12'>{review.date}</span>
        </div>
        <p className='t16'>{review.comment}</p>
      </div>
      <components.Rating
        style={{
          position: 'absolute',
          right: 10,
          top: 10,
          backgroundColor: '#F5FAFB',
        }}
        rating={review.rating}
      />
    </div>
  );
};
