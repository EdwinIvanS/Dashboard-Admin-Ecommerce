const bcryptjs = require('bcryptjs');
const cryptoJS = require('crypto-js');

const encrypt = async (passwordPlane) =>{
    const hash = await bcryptjs.hash(passwordPlane, 10);
    return hash
}

const compare = async (passwordPlane, hashPassword) =>{
    return await bcryptjs.compare(passwordPlane, hashPassword)
}

const decrypt = async(cipherText, key) => {
    console.log('ingrese mi perros par ala desencript')
    return decrypt = cryptoJS.AES.decrypt(cipherText, key).toString( cryptoJS.enc.Utf8 );
}

module.exports = { encrypt, compare, decrypt};