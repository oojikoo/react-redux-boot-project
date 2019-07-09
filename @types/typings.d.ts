declare module '*.css' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }

import 'styled-components';

  // and extend it
  declare module 'styled-components' {
    export interface DefaultTheme {
      background: string,
      colorBackgroundGlobal: string;
      mainColor: string;
      blackColor: string;
      dangerColor: string;
      successColor: string;
    }
  }

  declare global {
      namespace NodeJS {
          interface ProcessEnv {
              ZEROTH_APPID: string;
              ZEROTH_APPSECRET: string;
              NODE_ENV: 'development' | 'production' | 'staging';
          }
      }
  }

  interface RefObject<T> {
      // immutable
      readonly current: T | null
  }
  function createRef<T>(): RefObject<T>
