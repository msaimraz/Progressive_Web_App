import React, {ReactNode} from 'react';

import background from '../assets/bg/03.png';

type Props = {
  children: ReactNode;
  imageUrl?: string;
  style?: React.CSSProperties;
};

export const ImageBackground: React.FC<Props> = ({children, style}) => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: 20,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
