const STRINGS = {
  en: { // English
    BUTTON: 'Button',
    SIGNUP: 'Sign Up',
    LOGIN: 'Login',
    LOGOUT: 'Logout',
  },
  ko: { // Korean
    BUTTON: '버튼',
    SIGNUP: '회원가입',
    LOGIN: '로그인',
    LOGOUT: '로그아웃',
  },
  // ja: { // Japanese
  // },
  // zh: { // Chinese
  // },
  // es: { // Spanish
  // },
  // fr: { // French
  // },
  // id: { // Indonesian
  // },
};

const DEFAULT_LANG = 'en';
let lang = DEFAULT_LANG;

if (navigator) {
  lang = navigator.language.substr(0, 2);
}

export const getString = (str: string) => {
  str = STRINGS[lang]
    ? STRINGS[lang][str]
    : STRINGS[DEFAULT_LANG][str];

  if (!str) {
    str = '...';
  }
  return str;
};

export default STRINGS;
