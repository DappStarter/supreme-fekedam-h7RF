require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note office pulp grace cart forget giggle'; 
let testAccounts = [
"0xeaed203cd21ce88f6d58f0975d2866afda58e6be9bdd6c927c46c6cfbd628666",
"0x7519df4cedfc8461c2bdb442302eeb22147cfcde99b11c11e24abde813fc8b2f",
"0x14f470b845db23370616ea919193284286a92d1aa462e54996c46e00bd1b58be",
"0xf366fdeae35ca6a54a52e86e2ea93913d83e97dc4441defce6867bdbe784a9a6",
"0xfc2e569356e677f1383eac1721cce5d4b3476b08c2e6f926aeab069216d4c049",
"0x72564a356c50f1c66728fd142803063d1650dfa45524e156227623eb007a8e8c",
"0x2f3a665ec361df4471ff24abc7054a92292d7863ef13e8537683e5a1a674d077",
"0xc1e450f9433b7bb59588717560c159bcf649042fa886b82e92dadd1a061cd521",
"0x8502086f38a2475a8ee2c914ab597f8141cb09ef72cfa3ef40f21b9cbb19a7ec",
"0xa9d021234298f37d44a4c8a92bd995aae7ceb412a635bbf55d6500d414ed9c34"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

