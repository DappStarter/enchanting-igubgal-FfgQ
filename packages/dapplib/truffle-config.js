require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss harvest desert flat solve'; 
let testAccounts = [
"0xe4ae6044d3c79faf10c777b9b6087643d656bc81222f606f2614d4dacda36147",
"0xa0ab5b8dd81ecdbbfb90ac1a9024c6ed90527bf9717ca3ab5313862a26d54817",
"0xb8f5eba17d2f348734b3e0c3d5100bda2cfb64ad018c346c6746f59628a58e19",
"0x4c0ae97a3e753d3861cc8930f2e496f969586524c1eec8ad69d5a97c6a8d0522",
"0x3c381601d2201d77ad1532e6c9cb0a9c13a37a7391bcc1f88b127b774fabf84b",
"0x30a6c6e9e066c11605a03a27dcbfdc54db6d9a8a2473fde687c8ef81fb0f735b",
"0x4d1ef959f4b83922629203a5c4c2c339a6dab73934a32f69f5edc3110ad68906",
"0xd32214b1d80836a3e5c48c732b113430aa445fed5b5f6c88e391c7ea41c52c67",
"0x427f84a59742f0c827723aa2355ee7ed396d34bd5c04a76add16dcd5731d9039",
"0x072da7ba4f82984a037c8771fb5c6f67d5932d377e87b2287d946f198ac35637"
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

