
const CryptoJS = require("crypto-js");
const key = CryptoJS.enc.Utf8.parse("med1234");
const iv = CryptoJS.enc.Utf8.parse("myInitializationVector");


  // Define the encryption function
 function encryptPassword(password) {
      const encrypted = CryptoJS.AES.encrypt(
        password,
        key,
        { iv: iv }
      );
      return encrypted.toString();
    }

  // Define the decryption function
  function decryptPassword(encryptedPassword) {
    const decrypted = CryptoJS.AES.decrypt(
      encryptedPassword,
      key,
      { iv: iv }
    );
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  module.exports = {
    encryptPassword,
    decryptPassword
  };