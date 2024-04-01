import validUrl from 'valid-url';

const isValidUrl = (url: string) => {
    return validUrl.isWebUri(url);
}

export default isValidUrl;
