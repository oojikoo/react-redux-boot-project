import React from 'react';
// const isRetina = (first: any, second?: any, third?: any) => {
//   console.log('pixelRatio', window.devicePixelRatio);
//   if (window.devicePixelRatio >= 2 && third) {
//     return third;
//   }
//   if (window.devicePixelRatio >= 1.5 && second) {
//     return second;
//   }
//   return first;
// };

// export const img = isRetina(
//   require('../../assets/icons/image.png'),
//   require('../../assets/icons/image@2x.png'),
//   require('../../assets/icons/image@3x.png'),
// );

export const plus = (props) => (
    <svg width={16} height={16} {...props}>
        <path
            d="M2 8.25h12m-6 6v-12"
            fill="none"
            fillRule="evenodd"
            stroke="#272727"
            strokeLinecap="round"
        />
    </svg>
);

export const caret = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'>
        <path fill='#939393' d='M4.94 7L8 10.053 11.06 7l.94.94-4 4-4-4z' />
    </svg>
);

