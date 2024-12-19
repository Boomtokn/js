const web3 = require("@solana/web3.js");
(async () => {
  const solana = new web3.Connection("https://late-serene-feather.solana-mainnet.quiknode.pro/3efa333c9866046a5a40f12c3d04a3e918e13421/");
  console.log(await solana.getSlot());
})();
