const dotenv = require("dotenv");

dotenv.config();

const config = [
    {
        Name: "Ethereum Mainnet",
        ChainID: 1,
        RPC: "https://mainnet.infura.io/v3/9254bae6432742babcfc7d367c7e77cd",
        StartBlock: 14923000,
        ScanURL: "https://etherscan.io",
        ERC20List: [
            "0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45",
            "0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7",
            "0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a",
            "0x037A54AaB062628C9Bbae1FDB1583c195585fe41",
            "0x0391D2021f89DC339F60Fff84546EA23E337750f",
            "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
            "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
            "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
            "0x0763fdCCF1aE541A5961815C0872A8c5Bc6DE4d7",
            "0x08389495D7456E1951ddF7c3a1314A4bfb646d8B",
            "0x090185f2135308BaD17527004364eBcC2D37e5F6",
            "0x09a3EcAFa817268f77BE1283176B946C4ff2E608",
            "0x0AbdAce70D3790235af448C88547603b945604ea",
            "0x0b38210ea11411557c13457D4dA7dC6ea731B88a",
            "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
            "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
            "0x0f2D719407FdBeFF09D87557AbB7232601FD9F29",
            "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
            "0x111111111117dC0aa78b770fA6A738034120C302",
            "0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA",
            "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
            "0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998",
            "0x1985365e9f78359a9B6AD760e32412f4a445E862",
            "0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44",
            "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
            "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
            "0x221657776846890989a759BA2973e427DfF5C9bB",
            "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            "0x226bb599a12C826476e3A771454697EA52E9E220",
            "0x2565ae0385659badCada1031DB704442E1b69982",
            "0x2e9d63788249371f1DFC918a52f8d799F4a38C94",
            "0x31c8EAcBFFdD875c74b94b077895Bd78CF1E64A3",
            "0x321C2fE4446C7c963dc41Dd58879AF648838f98D",
            "0x32353A6C91143bfd6C7d363B546e62a9A2489A20",
            "0x33349B282065b0284d756F0577FB39c158F935e6",
            "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
            "0x3472A5A71965499acd81997a54BBA8D852C6E53d",
            "0x3506424F91fD33084466F402d5D97f05F8e3b4AF",
            "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
            "0x3a4f40631a4f906c2BaD353Ed06De7A5D3fCb430",
            "0x3A880652F47bFaa771908C07Dd8673A787dAEd3A",
            "0x3C4B6E6e1eA3D4863700D7F76b36B7f3D3f13E3d",
            "0x3D658390460295FB963f54dC0899cfb1c30776Df",
            "0x408e41876cCCDC0F92210600ef50372656052a38",
            "0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68",
            "0x41e5560054824eA6B0732E656E3Ad64E20e94E45",
            "0x441761326490cACF7aF299725B6292597EE822c2",
            "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
            "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
            "0x464eBE77c293E473B48cFe96dDCf88fcF7bFDAC0",
            "0x491604c0FDF08347Dd1fa4Ee062a822A5DD06B5D",
            "0x4a220E6096B25EADb88358cb44068A3248254675",
            "0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784",
            "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
            "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
            "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
            "0x4fE83213D56308330EC302a8BD641f1d0113A4Cc",
            "0x514910771AF9Ca656af840dff83E8264EcF986CA",
            "0x55296f69f40Ea6d20E478533C15A6B08B654E758",
            "0x5732046A883704404F284Ce41FfADd5b007FD668",
            "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
            "0x58b6A8A3302369DAEc383334672404Ee733aB239",
            "0x595832F8FC6BF59c85C527fEC3740A1b7a361269",
            "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
            "0x5Cf04716BA20127F1E2297AdDCf4B5035000c9eb",
            "0x607F4C5BB672230e8672085532f7e901544a7375",
            "0x6123B0049F904d730dB3C36a31167D9d4121fA6B",
            "0x626E8036dEB333b408Be468F951bdB42433cBF18",
            "0x64D91f12Ece7362F91A6f8E7940Cd55F05060b92",
            "0x65Ef703f5594D2573eb71Aaf55BC0CB548492df4",
            "0x6810e776880C02933D47DB1b9fc05908e5386b96",
            "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
            "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
            "0x6c28AeF8977c9B773996d0e8376d2EE379446F2f",
            "0x6De037ef9aD2725EB40118Bb1702EBb27e4Aeb24",
            "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
            "0x6F59e0461Ae5E2799F1fB3847f05a63B16d0DbF8",
            "0x6fB3e0A217407EFFf7Ca062D46c26E5d60a14d69",
            "0x70D2b7C19352bB76e4409858FF5746e500f2B67c",
            "0x71Ab77b7dbB4fa7e017BC15090b2163221420282",
            "0x7420B4b9a0110cdC71fB720908340C03F9Bc03EC",
            "0x744d70FDBE2Ba4CF95131626614a1763DF805B9E",
            "0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3",
            "0x77FbA179C79De5B7653F68b5039Af940AdA60ce0",
            "0x799ebfABE77a6E34311eeEe9825190B9ECe32824",
            "0x7C84e62859D0715eb77d1b1C4154Ecd6aBB21BEC",
            "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
            "0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429",
            "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
            "0x80C62FE4487E1351b47Ba49809EBD60ED085bf52",
            "0x814e0908b12A99FeCf5BC101bB5d0b8B5cDf7d26",
            "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
            "0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4",
            "0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa",
            "0x845576c64f9754CF09d87e45B720E82F3EeF522C",
            "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
            "0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
            "0x88dF592F8eb5D7Bd38bFeF7dEb0fBc02cf3778a0",
            "0x8c15Ef5b4B21951d50E53E4fbdA8298FFAD25057",
            "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
            "0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
            "0x91Af0fBB28ABA7E31403Cb457106Ce79397FD4E6",
            "0x92D6C1e31e14520e676a687F0a93788B716BEff5",
            "0x949D48EcA67b17269629c7194F4b727d4Ef9E5d6",
            "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
            "0x960b236A07cf122663c4303350609A66A7B288C0",
            "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
            "0x9992eC3cF6A55b00978cdDF2b27BC6882d88D1eC",
            "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
            "0x99ea4dB9EE77ACD40B119BD1dC4E33e1C070b80d",
            "0x9E46A38F5DaaBe8683E10793b06749EEF7D733d1",
            "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
            "0xa0246c9032bC3A600820415aE600c6388619A14D",
            "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b",
            "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            "0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83",
            "0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
            "0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0",
            "0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3",
            "0xa693B19d2931d498c5B318dF961919BB4aee87a5",
            "0xA9B1Eb5908CfC3cdf91F9B8B3a74108598009096",
            "0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F",
            "0xAC51066d7bEC65Dc4589368da368b212745d63E8",
            "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
            "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC",
            "0xB705268213D593B8FD88d3FDEFF93AFF5CbDcfAE",
            "0xba100000625a3754423978a60c9317c58a424e3D",
            "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
            "0xBA50933C268F567BDC86E1aC131BE072C6B0b71a",
            "0xba5BDe662c17e2aDFF1075610382B9B691296350",
            "0xBB0E17EF65F82Ab018d8EDd776e8DD940327B28b",
            "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
            "0xBBc2AE13b23d715c30720F079fcd9B4a74093505",
            "0xbC396689893D065F41bc2C6EcbeE5e0085233447",
            "0xc00e94Cb662C3520282E6f5717214004A7f26888",
            "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
            "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            "0xC08512927D12348F6620a698105e1BAac6EcD911",
            "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
            "0xc1D204d77861dEf49b6E769347a883B15EC397Ff",
            "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
            "0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d",
            "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
            "0xCC8Fa225D80b9c7D42F96e9570156c65D6cAAa25",
            "0xccC8cb5229B0ac8069C51fd58367Fd1e622aFD97",
            "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
            "0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9",
            "0xD291E7a03283640FDc51b121aC401383A46cC623",
            "0xD31a59c85aE9D8edEFeC411D448f90841571b89c",
            "0xD533a949740bb3306d119CC777fa900bA034cd52",
            "0xD8912C10681D8B21Fd3742244f44658dBA12264E",
            "0xdab396cCF3d84Cf2D07C4454e10C8A6F5b008D2b",
            "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
            "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
            "0xDDB3422497E61e13543BeA06989C0789117555c5",
            "0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F",
            "0xDf801468a808a32656D2eD2D2d80B72A129739f4",
            "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
            "0xe2f2a5C287993345a840Db3B0845fbC70f5935a5",
            "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
            "0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55",
            "0xec67005c4E498Ec7f55E092bd1d35cbC47C91892",
            "0xEd04915c23f00A313a544955524EB7DBD823143d",
            "0xF17e65822b568B3903685a7c9F496CF7656Cc6C2",
            "0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
            "0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF",
            "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
            "0xfC98e825A2264D890F9a1e68ed50E1526abCcacD",
            "0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF",
            "0xfF20817765cB7f73d4bde2e66e067E58D11095C2"
        ],
        MonitorAddress: [
            "0xEded14271227967cD24970dbF43CBc580D21A8e7",
            "0x4476B96c00470CB39734187cB0675d995e5a1c8c"
        ]
    },
    {
        Name: "BSC Mainnet",
        ChainID: 56,
        RPC: "https://speedy-nodes-nyc.moralis.io/03eb35954a0b7ed092444a8e/bsc/mainnet",
        StartBlock: 18495000,
        ScanURL: "https://bscscan.com",
        ERC20List: [
            '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
            '0x00e1656e45f18ec6747F5a8496Fd39B50b38396D',
            '0x0112e557d400474717056C4e6D40eDD846F38351',
            '0x037838b556d9c9d654148a284682C55bB5f56eF4',
            '0x039cB485212f996A9DBb85A9a75d898F94d38dA6',
            '0x03fF0ff224f904be3118461335064bB48Df47938',
            '0x045c4324039dA91c52C55DF5D785385Aab073DcF',
            '0x04BAf95Fd4C52fd09a56D840bAEe0AB8D7357bf0',
            '0x04C747b40Be4D535fC83D09939fb0f626F32800B',
            '0x05aD6E30A855BE07AfA57e08a4f30d00810a402e',
            '0x07663837218A003e66310a01596af4bf4e44623D',
            '0x07AaA29E63FFEB2EBf59B33eE61437E1a91A3bb2',
            '0x08ba0619b1e7A582E0BCe5BBE9843322C954C340',
            '0x0a3A21356793B49154Fd3BbE91CBc2A16c0457f5',
            '0x0b15Ddf19D47E6a86A56148fb4aFFFc6929BcB89',
            '0x0bc89aa98Ad94E6798Ec822d0814d934cCD0c0cE',
            '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
            '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4',
            '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
            '0x0Eb3a705fc54725037CC9e008bDede697f62F335',
            '0x0F9E4D49f25de22c2202aF916B681FBB3790497B',
            '0x12BB890508c125661E03b09EC06E404bc9289040',
            '0x14016E85a25aeb13065688cAFB43044C2ef86784',
            '0x154A9F9cbd3449AD22FDaE23044319D6eF2a1Fab',
            '0x1613957159E9B0ac6c80e824F7Eea748a32a0AE2',
            '0x1633b7157e7638C4d6593436111Bf125Ee74703F',
            '0x16939ef78684453bfDFb47825F8a5F714f12623a',
            '0x1796ae0b0fa4862485106a0de9b654eFE301D0b2',
            '0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454',
            '0x19e6BfC1A6e4B042Fb20531244D47E252445df01',
            '0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584',
            '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
            '0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC',
            '0x1D229B958D5DDFca92146585a8711aECbE56F095',
            '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
            '0x1F7216fdB338247512Ec99715587bb97BBf96eae',
            '0x20de22029ab63cf9A7Cf5fEB2b737Ca1eE4c82A6',
            '0x211FfbE424b90e25a15531ca322adF1559779E45',
            '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
            '0x2222227E22102Fe3322098e4CBfE18cFebD57c95',
            '0x232FB065D9d24c34708eeDbF03724f2e95ABE768',
            '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
            '0x233d91A0713155003fc4DcE0AFa871b508B3B715',
            '0x23CE9e926048273eF83be0A3A8Ba9Cb6D45cd978',
            '0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B',
            '0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C',
            '0x25A528af62e56512A19ce8c3cAB427807c28CC19',
            '0x25E9d05365c867E59C1904E7463Af9F312296f9E',
            '0x26A5dFab467d4f58fB266648CAe769503CEC9580',
            '0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c',
            '0x2FA5dAF6Fe0708fBD63b1A7D1592577284f52256',
            '0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1',
            '0x3192CCDdf1CDcE4Ff055EbC80f3F0231b86A7E30',
            '0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377',
            '0x352Cb5E19b12FC216548a2677bD0fce83BaE434B',
            '0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7',
            '0x3947B992DC0147D2D89dF0392213781b04B25075',
            '0x398f7827DcCbeFe6990478876bBF3612D93baF05',
            '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
            '0x3Fcca8648651E5b974DD6d3e50F61567779772A8',
            '0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC',
            '0x40C8225329Bd3e28A043B029E0D07a5344d2C27C',
            '0x40E46dE174dfB776BB89E04dF1C47d8a66855EB3',
            '0x4131b87F74415190425ccD873048C708F8005823',
            '0x426c72701833fdDBdFc06c944737C6031645c708',
            '0x42712dF5009c20fee340B245b510c0395896cF6e',
            '0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096',
            '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
            '0x44754455564474A89358B2C2265883DF993b12F0',
            '0x4691937a7508860F876c9c0a2a617E7d9E945D4B',
            '0x477bC8d23c634C154061869478bce96BE6045D12',
            '0x49022089e78a8D46Ec87A3AF86a1Db6c189aFA6f',
            '0x49f2145d6366099e13B10FbF80646C0F377eE7f6',
            '0x4a080377f83D669D7bB83B3184a8A5E61B500608',
            '0x4B0F1812e5Df2A09796481Ff14017e6005508003',
            '0x4BA0057f784858a48fe351445C672FF2a3d43515',
            '0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7',
            '0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7',
            '0x4be63a9b26EE89b9a3a13fd0aA1D0b2427C135f8',
            '0x4CfbBdfBd5BF0814472fF35C72717Bd095ADa055',
            '0x4e6415a5727ea08aAE4580057187923aeC331227',
            '0x4e840AADD28DA189B9906674B4Afcb77C128d9ea',
            '0x4f39c3319188A723003670c3F9B9e7EF991E52F3',
            '0x4FA7163E153419E0E1064e418dd7A99314Ed27b6',
            '0x50332bdca94673F33401776365b66CC4e81aC81d',
            '0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8',
            '0x541E619858737031A1244A5d0Cd47E5ef480342c',
            '0x5512014efa6Cd57764Fa743756F7a6Ce3358cC83',
            '0x55d398326f99059fF775485246999027B3197955',
            '0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f',
            '0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6',
            '0x5986D5c77c65e5801a5cAa4fAE80089f870A71dA',
            '0x5a16E8cE8cA316407c6E6307095dc9540a8D62B3',
            '0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700',
            '0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587',
            '0x5B6DcF557E2aBE2323c48445E8CC948910d8c2c9',
            '0x5C8C8D560048F34E5f7f8ad71f2f81a89DBd273e',
            '0x5d684ADaf3FcFe9CFb5ceDe3abf02F0Cdd1012E3',
            '0x5Ec3AdBDae549Dce842e24480Eb2434769e22B2E',
            '0x5f4Bde007Dc06b867f86EBFE4802e34A1fFEEd63',
            '0x5F84ce30DC3cF7909101C69086c50De191895883',
            '0x5fE80d2CD054645b9419657d3d10d26391780A7B',
            '0x62823659d09F9F9D2222058878f89437425eB261',
            '0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f',
            '0x630d98424eFe0Ea27fB1b3Ab7741907DFFEaAd78',
            '0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F',
            '0x658A109C5900BC6d2357c87549B651670E5b0539',
            '0x658E64FFcF40D240A43D52CA9342140316Ae44fA',
            '0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2',
            '0x6b23C89196DeB721e6Fd9726E6C76E4810a464bc',
            '0x6bfF4Fb161347ad7de4A625AE5aa3A1CA7077819',
            '0x6F769E65c14Ebd1f68817F5f1DcDb61Cfa2D6f7e',
            '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
            '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
            '0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0',
            '0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739',
            '0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B',
            '0x72fAa679E1008Ad8382959FF48E392042A8b06f7',
            '0x755f34709E369D37C6Fa52808aE84A32007d1155',
            '0x758d08864fB6cCE3062667225ca10b8F00496cc2',
            '0x758FB037A375F17c7e195CC634D77dA4F554255B',
            '0x762539b45A1dCcE3D36d080F74d1AED37844b878',
            '0x77d547256A2cD95F32F67aE0313E450Ac200648d',
            '0x7859B01BbF675d67Da8cD128a50D155cd881B576',
            '0x78650B139471520656b9E7aA7A5e9276814a38e9',
            '0x78F5d389F5CDCcFc41594aBaB4B0Ed02F31398b3',
            '0x7961Ade0a767c0E5B67Dd1a1F78ba44F727642Ed',
            '0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0',
            '0x7af173F350D916358AF3e218Bdf2178494Beb748',
            '0x7C17c8bED8d14bAccE824D020f994F4880D6Ab3B',
            '0x7Ceb519718A80Dd78a8545AD8e7f401dE4f2faA7',
            '0x7e396BfC8a2f84748701167c2d622F041A1D7a17',
            '0x7F70642d88cf1C4a3a7abb072B53B929b653edA5',
            '0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3',
            '0x80D5f92C2c8C682070C95495313dDB680B267320',
            '0x81859801b01764D4f0Fa5E64729f5a6C3b91435b',
            '0x833F307aC507D47309fD8CDD1F835BeF8D702a93',
            '0x8443f091997f06a61670B735ED92734F5628692F',
            '0x84e9a6F9D240FdD33801f7135908BfA16866939A',
            '0x8519EA49c997f50cefFa444d240fB655e89248Aa',
            '0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd',
            '0x8595F9dA7b868b1822194fAEd312235E43007b49',
            '0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B',
            '0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e',
            '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
            '0x8b303d5BbfBbf46F1a4d9741E491e06986894e18',
            '0x8BDd8DBcBDf0C066cA5f3286d33673aA7A553C10',
            '0x8CD6e29d3686d24d3C2018CEe54621eA0f89313B',
            '0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F',
            '0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf',
            '0x90Ed8F1dc86388f14b64ba8fb4bbd23099f18240',
            '0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b',
            '0x92D7756c60dcfD4c689290E8A9F4d263b3b32241',
            '0x947950BcC74888a40Ffa2593C5798F11Fc9124C4',
            '0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8',
            '0x94b69263FCA20119Ae817b6f783Fc0F13B02ad50',
            '0x9573c88aE3e37508f87649f87c4dd5373C9F31e0',
            '0x95a1199EBA84ac5f19546519e287d43D2F0E1b41',
            '0x95EE03e1e2C5c4877f9A298F1C0D6c98698FAB7B',
            '0x96058f8C3e16576D9BD68766f3836d9A33158f89',
            '0x9617857E191354dbEA0b714d78Bc59e57C411087',
            '0x9678E42ceBEb63F23197D726B29b1CB20d0064E5',
            '0x96Dd399F9c3AFda1F194182F71600F1B65946501',
            '0x9899a98b222fCb2f3dbee7dF45d943093a4ff9ff',
            '0x990E7154bB999FAa9b2fa5Ed29E822703311eA85',
            '0x9a319b959e33369C5eaA494a770117eE3e585318',
            '0x9f589e3eabe42ebC94A44727b3f3531C0c877809',
            '0x9fD87aEfe02441B123c3c32466cD9dB4c578618f',
            '0x9Fdc3ae5c814b79dcA2556564047C5e7e5449C19',
            '0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc',
            '0xA1303E6199b319a891b79685F0537D289af1FC83',
            '0xA1434F1FC3F437fa33F7a781E041961C0205B5Da',
            '0xa1faa113cbE53436Df28FF0aEe54275c13B40975',
            '0xA2120b9e674d3fC3875f415A7DF52e382F141225',
            '0xa2B726B1145A4773F68593CF171187d8EBe4d495',
            '0xA58950F05FeA2277d2608748412bf9F802eA4901',
            '0xA64455a4553C9034236734FadDAddbb64aCE4Cc7',
            '0xA7f552078dcC247C2684336020c03648500C6d9F',
            '0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929',
            '0xa9c41A46a6B3531d28d5c32F6633dd2fF05dFB90',
            '0xaBaE871B7E3b67aEeC6B46AE9FE1A91660AadAC5',
            '0xAC51066d7bEC65Dc4589368da368b212745d63E8',
            '0xacb2d47827C9813AE26De80965845D80935afd0B',
            '0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1',
            '0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18',
            '0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f',
            '0xaEC945e04baF28b135Fa7c640f624f8D90F1C3a6',
            '0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99',
            '0xB0e1fc65C1a741b4662B813eB787d369b8614Af1',
            '0xB2BD0749DBE21f623d9BABa856D3B0f0e1BFEc9C',
            '0xb4404DaB7C0eC48b428Cf37DeC7fb628bcC41B36',
            '0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723',
            '0xB64E638E60D154B43f660a6BF8fD8a3b249a6a21',
            '0xB67754f5b4C704A24d2db68e661b2875a4dDD197',
            '0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787',
            '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
            '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
            '0xBbEB90cFb6FAFa1F69AA130B7341089AbeEF5811',
            '0xBc5609612b7C44BEf426De600B5fd1379DB2EcF1',
            '0xBc7d6B50616989655AfD682fb42743507003056D',
            '0xbcf39F0EDDa668C58371E519AF37CA705f2bFcbd',
            '0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F',
            '0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28',
            '0xBf5140A22578168FD562DCcF235E5D43A02ce9B1',
            '0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe',
            '0xbFa0841F7a90c4CE6643f651756EE340991F99D5',
            '0xC0eFf7749b125444953ef89682201Fb8c6A917CD',
            '0xC13B7a43223BB9Bf4B69BD68Ab20ca1B79d81C75',
            '0xc2098a8938119A52B1F7661893c0153A6CB116d5',
            '0xC40C9A843E1c6D01b7578284a9028854f6683b1B',
            '0xc53708664b99DF348dd27C3Ac0759d2DA9c40462',
            '0xc5E6689C9c8B02be7C49912Ef19e79cF24977f03',
            '0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731',
            '0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51',
            '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
            '0xd07e82440A395f3F3551b42dA9210CD1Ef4f8B24',
            '0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13',
            '0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb',
            '0xD44FD09d74cd13838F137B590497595d6b3FEeA4',
            '0xD48474E7444727bF500a32D5AbE01943f3A59A64',
            '0xdaacB0Ab6Fb34d24E8a67BfA14BF4D95D4C7aF92',
            '0xDAe6c2A48BFAA66b43815c5548b10800919c993E',
            '0xDB021b1B247fe2F1fa57e0A87C748Cc1E321F07F',
            '0xdB8D30b74bf098aF214e862C90E647bbB1fcC58c',
            '0xdFF8cb622790b7F92686c722b02CaB55592f152C',
            '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
            '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f',
            '0xe2604C9561D490624AA35e156e65e590eB749519',
            '0xe369fec23380f9F14ffD07a1DC4b7c1a9fdD81c9',
            '0xE40255C5d7fa7ceEc5120408C78C787CECB4cfdb',
            '0xe4Cc45Bb5DBDA06dB6183E8bf016569f40497Aa5',
            '0xe550a593d09FBC8DCD557b5C88Cea6946A8b404A',
            '0xe552Fb52a4F19e44ef5A967632DBc320B0820639',
            '0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5',
            '0xE64F5Cb844946C1F102Bd25bBD87a5aB4aE89Fbe',
            '0xE69cAef10A488D7AF31Da46c89154d025546e990',
            '0xe792f64C582698b8572AAF765bDC426AC3aEfb6B',
            '0xE8176d414560cFE1Bf82Fd73B986823B89E4F545',
            '0xE85aFCcDaFBE7F2B096f268e31ccE3da8dA2990A',
            '0xe898EDc43920F357A93083F1d4460437dE6dAeC2',
            '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
            '0xeBd49b26169e1b52c04cFd19FCf289405dF55F80',
            '0xECa41281c24451168a37211F0bc2b8645AF45092',
            '0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C',
            '0xEe9801669C6138E84bD50dEB500827b776777d28',
            '0xf05E45aD22150677a017Fbd94b84fBB63dc9b44c',
            '0xf07a32Eb035b786898c00bB1C64d8c6F8E7a46D5',
            '0xF215A127A196e3988C09d052e16BcFD365Cd7AA3',
            '0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e',
            '0xF218184Af829Cf2b0019F8E6F0b2423498a36983',
            '0xF35262a9d427F96d2437379eF090db986eaE5d42',
            '0xF5d8A096CcCb31b9D7bcE5afE812BE23e3D4690d',
            '0xF750A26EB0aCf95556e8529E72eD530f3b60f348',
            '0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4',
            '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
            '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
            '0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE',
            '0xFa40d8FC324bcdD6Bbae0e086De886c571C225d4',
            '0xFeea0bDd3D07eb6FE305938878C0caDBFa169042',
            '0xffEecbf8D7267757c2dc3d13D730E97E15BfdF7F',
            '0x6679eB24F59dFe111864AEc72B443d1Da666B360',
            '0x810EE35443639348aDbbC467b33310d2AB43c168',
            '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
            '0xCA1aCAB14e85F30996aC83c64fF93Ded7586977C',
            '0xe0F94Ac5462997D2BC57287Ac3a3aE4C31345D66',
            '0xf307910A4c7bbc79691fD374889b36d8531B08e3',
            '0x6f9F0c4ad9Af7EbD61Ac5A1D4e0F2227F7B0E5f9',
            '0x5857c96DaE9cF8511B08Cb07f85753C472D36Ea3',
            '0x93D8d25E3C9A847a5Da79F79ecaC89461FEcA846',
            '0xaA9E582e5751d703F85912903bacADdFed26484C',
            '0xE1d1F66215998786110Ba0102ef558b22224C016',
            '0x5E2689412Fae5c29BD575fbe1d5C1CD1e0622A8f',
            '0x2eD9a5C8C13b93955103B9a7C167B67Ef4d568a3',
            '0x9F882567A62a5560d147d64871776EeA72Df41D3',
            '0x1fC9004eC7E5722891f5f38baE7678efCB11d34D',
            '0xCD40F2670CF58720b694968698A5514e924F742d',
            '0x6a0b66710567b6beb81A71F7e9466450a91a384b',
            '0xEd8c8Aa8299C10f067496BB66f8cC7Fb338A3405',
            '0x17B7163cf1Dbd286E262ddc68b553D899B93f526',
            '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
            '0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A',
            '0xb6C53431608E626AC81a9776ac3e999c5556717c',
            '0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5',
            '0x7324c7C0d95CEBC73eEa7E85CbAac0dBdf88a05b',
            '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
            '0xD3b71117E6C1558c1553305b44988cd944e97300'
        ],
        MonitorAddress: [
            "0xEded14271227967cD24970dbF43CBc580D21A8e7",
            "0x4476B96c00470CB39734187cB0675d995e5a1c8c",
        ]
    }
];

export default config;
