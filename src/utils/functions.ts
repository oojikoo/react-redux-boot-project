// import { parsePhoneNumberFromString } from 'libphonenumber-js';

// const getFormattedNumber = (number: string) => {
//     const phoneNumber = parsePhoneNumberFromString(`+${number}`);
//     return phoneNumber.format("INTERNATIONAL");
// };

export const formatDuration = (secs, symbol:boolean = true, lang:string = 'en', zeroLeading:boolean = true) => {
    const secNum = parseInt(secs, 10); // don't forget the second param
    let hours:string|number = Math.floor(secNum / 3600);
    let minutes:string|number = Math.floor((secNum - hours * 3600) / 60);
    let seconds:string|number = secNum - hours * 3600 - minutes * 60;
    if (hours < 10) {
        hours = `${zeroLeading ? '0' : ''}${hours}`;
    }
    if (minutes < 10) {
        minutes = `${zeroLeading ? '0' : ''}${minutes}`;
    }
    if (seconds < 10) {
        seconds = `${zeroLeading ? '0' : ''}${seconds}`;
    }

    if (hours < 1) {
        if (minutes > 1) {
            if (!symbol) {
                switch (lang) {
                case 'ko':
                    return `${minutes}분 ${seconds}초`;
                case 'en':
                    return `${minutes}min ${seconds}s`;
                default:
                    return `${minutes} : ${seconds}`;
                }
            } else {
                return `${minutes} : ${seconds}`;
            }
        } else {
            if (!symbol) {
                switch (lang) {
                case 'ko':
                    return `${seconds}초`;
                case 'en':
                    return `${seconds}s`;
                default:
                    return `${seconds}`;
                }
            } else {
                return `${seconds}`;
            }
        }
    }
    if (!symbol) {
        switch (lang) {
        case 'ko':
            return `${hours}시간 ${minutes}분 ${seconds}초`;
        case 'en':
            return `${hours}h ${minutes}min ${seconds}s`;

        default:
            return `${hours} : ${minutes} : ${seconds}`;
        }
    } else {
        return `${hours} : ${minutes} : ${seconds}`;
    }
};

export const getStorage = (key: string) => {
    return localStorage.getItem(key);
};

export const setStorage = (key: string, value: string) => {
    return localStorage.setItem(key, value);
};

export const destroyStorage = (key: string) => {
    return localStorage.removeItem(key);
};

export const getSessionStorage = (key: string) => {
    return sessionStorage.getItem(key);
};

export const setSessionStorage = (key: string, value: string) => {
    return sessionStorage.setItem(key, value);
};

export const destroySessionStorage = (key: string) => {
    return sessionStorage.removeItem(key);
};

export const checkImageExists = (url: string, callback: (val: boolean) => void) => {
    const img = new Image();
    img.onload = function() {
        callback(true);
    };
    img.onerror = function() {
        callback(false);
    };
    img.src = url;
};

export const formattedSeconds = (sec) =>
    Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2);
