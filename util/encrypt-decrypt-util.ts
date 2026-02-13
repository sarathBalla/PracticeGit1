import CryptoJS from 'crypto-js';

//const key= process.env.SECRET_KEY?process.env.SECRET_KEY:"";

function encryptData(data: string, key: string): string {

    return CryptoJS.AES.encrypt(data, key).toString();
}

function decryptData(encryptedData: string, key: string): string {
    return CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);
}

export { encryptData, decryptData };