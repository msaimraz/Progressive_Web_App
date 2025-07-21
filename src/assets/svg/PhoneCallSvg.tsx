import * as React from 'react';

export const PhoneCallSvg: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={30}
      height={30}
      fill='none'
    >
      <rect
        width={29}
        height={29}
        x={0.5}
        y={0.5}
        stroke='#C8CDD9'
        rx={14.5}
      />
      <g>
        <path
          stroke='#1E2538'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.2}
          d='M15.78 10.917a2.917 2.917 0 0 1 2.303 2.304M15.78 8.583a5.25 5.25 0 0 1 4.638 4.632m-.584 4.655v1.75a1.166 1.166 0 0 1-1.271 1.167 11.544 11.544 0 0 1-5.035-1.791 11.375 11.375 0 0 1-3.5-3.5 11.544 11.544 0 0 1-1.79-5.058 1.167 1.167 0 0 1 1.16-1.271h1.75a1.167 1.167 0 0 1 1.167 1.003c.074.56.211 1.11.409 1.64a1.166 1.166 0 0 1-.263 1.23l-.74.74a9.333 9.333 0 0 0 3.5 3.5l.74-.74a1.166 1.166 0 0 1 1.23-.262c.53.197 1.08.334 1.64.408a1.166 1.166 0 0 1 1.003 1.184Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path
            fill='#fff'
            d='M7 8h14v14H7z'
          />
        </clipPath>
      </defs>
    </svg>
  );
};
