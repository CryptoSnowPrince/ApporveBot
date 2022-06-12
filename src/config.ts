const dotenv = require("dotenv");

dotenv.config();

const config = {
    1: {
        RPC: "https://mainnet.infura.io/v3/9254bae6432742babcfc7d367c7e77cd",
        StartBlock: 0,
        ERC20List: {
            busd: "",
            usdt: "",
        }
    },
    56: {
        RPC: "https://speedy-nodes-nyc.moralis.io/03eb35954a0b7ed092444a8e/bsc/mainnet",
        StartBlock: 18631000,
        ERC20List: {
            busd: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
        },
        MonitorAddress: [
            "0xEded14271227967cD24970dbF43CBc580D21A8e7",
            "0x4476B96c00470CB39734187cB0675d995e5a1c8c"
        ]
    }
};

export default config;
