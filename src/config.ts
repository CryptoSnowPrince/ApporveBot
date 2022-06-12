const dotenv = require("dotenv");

dotenv.config();

const config = [
    {
        ChainID: 1,
        RPC: "https://mainnet.infura.io/v3/9254bae6432742babcfc7d367c7e77cd",
        StartBlock: 14951000,
        ScanURL: "https://etherscan.io",
        ERC20List: [
            "0xdAC17F958D2ee523a2206206994597C13D831ec7"
        ],
        MonitorAddress: [
            "0xEded14271227967cD24970dbF43CBc580D21A8e7",
            "0x4476B96c00470CB39734187cB0675d995e5a1c8c"
        ]
    },
    {
        ChainID: 56,
        RPC: "https://speedy-nodes-nyc.moralis.io/03eb35954a0b7ed092444a8e/bsc/mainnet",
        StartBlock: 18631000,
        ScanURL: "https://bscscan.com",
        ERC20List: [
            "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
        ],
        MonitorAddress: [
            "0xEded14271227967cD24970dbF43CBc580D21A8e7",
            "0x4476B96c00470CB39734187cB0675d995e5a1c8c"
        ]
    }
];

export default config;
