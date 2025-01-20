const { ethers } = require("ethers");

// Connect to xDai
const provider = new ethers.providers.JsonRpcProvider("https://rpc.gnosischain.com");

// Token Contract Example (Replace with real token address)
const tokenAddress = "0x4ECaBa5870353805a9F068101A40E0f32ed605C6"; // USDT on xDai
const abi = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
];

// Create Contract Instance
const tokenContract = new ethers.Contract(tokenAddress, abi, provider);

(async () => {
  const name = await tokenContract.name();
  const symbol = await tokenContract.symbol();
  const decimals = await tokenContract.decimals();
  console.log(`Name: ${name}, Symbol: ${symbol}, Decimals: ${decimals}`);
})();
