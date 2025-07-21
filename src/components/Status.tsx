import React from 'react';

type Props = {
  src?: string;
  containerStyle?: React.CSSProperties;
};

export const Status: React.FC<Props> = ({containerStyle, src}) => {
  const marginBottom = Number(containerStyle?.marginBottom ?? 0);
  return (
    <div style={{...containerStyle}}>
      <div
        style={{
          position: 'relative',
          mixBlendMode: 'darken',
          marginBottom: 50 + (marginBottom > 0 ? marginBottom : 20),
        }}
      >
        <img
          alt='profile'
          src='https://george-fx.github.io/brain-nest/assets/02.png'
          style={{
            width: '100%',
            maxWidth: 234,
            marginLeft: 'auto',
            marginRight: 'auto',
            aspectRatio: '1/1',
            mixBlendMode: 'darken',
          }}
        />
        <div
          style={{
            width: 84,
            height: 84,
            position: 'absolute',
            borderRadius: '50%',
            bottom: -42,
            left: 'calc(50% - 42px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 'inset 0 0 0 2px white',
            backdropFilter: 'blur(5px)',
            willChange: 'backdrop-filter',
            WebkitBackdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
        >
          <img
            src={src}
            alt='profile'
            style={{width: 44, height: 44}}
          />
        </div>
      </div>
    </div>
  );
};
