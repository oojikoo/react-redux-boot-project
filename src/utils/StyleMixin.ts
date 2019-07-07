// these sizes are arbitrary and you can set them to whatever you wish
import { css, keyframes } from 'styled-components';
const sizes = {
    giant: 1170,
    desktop: 992,
    tablet: 768,
    phone: 480
};

// iterate through the sizes and create a media template
// export const media = Object.keys(sizes).reduce((accumulator, label) => {
//   // use em in breakpoints to work properly cross-browser and support users
//   // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
//   const emSize = sizes[label] / 16;
//   accumulator[label] = (...args) => css`
//     @media (max-width: ${emSize}em) {
//       ${css(...args)}
//     }
//   `;
//   return accumulator;
// }, {});

export const truncate = (width) => {
    return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
};

export const listUnset = () => {
    return `
    margin: 0;
    padding: 0;
    list-style: none;
  `;
};

export const flexbox = (alignItems, justifyContent) => {
    return `
    display: flex;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `;
};

export const animation = {
    dropdownOpening: keyframes`
    from {
        opacity: 0;
        margin-top: -.5rem;
    }

    to {
        opacity: 1;
        margin-top: 0;
    }
  `,
    dropdownClosing: keyframes`
    to {
        opacity: 0;
        margin-top: -.5rem;
    }

    from {
        opacity: 1;
        margin-top: 0;
    }
  `
};

export const positioning = (top: null, right: null, bottom: null, left: null, positionType?: 'absolute', zIndex?: null) => {
    return `
    position: absolute;
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    z-index: ${zIndex};
  `;
}
;
