import React from 'react';
import {Link} from 'react-router-dom';

import {svg} from '../assets/svg';
import {Routes} from '../navigation/StackNavigator';

type Props = {
  to?: string | null;
  title: string;
  icon?: JSX.Element;
  isLast?: boolean;
  titleStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
};

export const ProfileItem: React.FC<Props> = ({
  titleStyle,
  title,
  icon,
  to,
  isLast,
  containerStyle,
}) => {
  return (
    <Link
      style={{
        borderTopWidth: 1,
        border: 'none',
        width: '100%',
        backgroundColor: 'var(--white-color)',
        padding: '15px 16px',
        borderRadius: 20,
        marginBottom: isLast ? 0 : 4,
        ...containerStyle,
      }}
      to={to || '#'}
      className='row-center'
    >
      {icon}
      <h5 style={{marginLeft: 14, ...titleStyle}}>{title}</h5>
      {to !== Routes.SignIn && to && (
        <div style={{marginLeft: 'auto'}}>
          <svg.RightArrowSvg />
        </div>
      )}
    </Link>
  );
};
