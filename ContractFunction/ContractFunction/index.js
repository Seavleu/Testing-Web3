// The Moralis API allows users to run smart contract functions that return read only data on any EVM chain.
const Moralis = require("moralis").default;
require("dotenv").config();
const ABI = require("abi.json");

Moralis.start({
    apiKey: process.env.MORALIS_KEY
}).then(async () => {
    const response = await Moralis.EvmApi.utils.runContractFunction({
        // provide contract address
        address: "0x1A92f7381B9F03921564a437210bB9396471050C",
        // functionName: "tokenURI",
        functionName: "getPrice",
        abi: ABI
        // params: { "tokenURI": 5 }
    })
    // GET nftlowestPrice
    const resLow = await Moralis.EvmApi.nft.getNFTLowestPrice({
        address: "0x1A92f7381B9F03921564a437210bB9396471050C",
    })
    let floor = resLow.raw.price
    let mint = res.raw;

    console.log("Mint Price: " + mint / 1e18 + "ETh")
    console.log("Current Floor: " + floor / 1e18 + "ETH")
    console.log("Current X since mint: " + Number(floor) / Number(mint) + "x")
    // console.log(response.raw)
})