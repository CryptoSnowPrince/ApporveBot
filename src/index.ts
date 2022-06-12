import Web3 from "web3";
import config from "./config";
const ERC20ABI = require("./abi");

// @ts-ignore
const web3Https = new Web3(config[56].RPC);
const erc20Contract = new web3Https.eth.Contract(
  ERC20ABI,
  // @ts-ignore
  config[56].ERC20List.busd.toString().toLowerCase()
);

let curBN = config[56].StartBlock;
let lastBN = curBN;
let counter = 0;

/**
 * Process the last auction, update cache and push socials if new auction or respective bid is discovered
 */
async function processApproveMonitor() {
  console.log("=========== start");
  counter++;
  try {
    lastBN = await web3Https.eth.getBlockNumber();
    lastBN = lastBN - 1;
    console.log("counter: ", counter);
    if (lastBN > curBN) {
      console.log("curBN: ", curBN);
      console.log("lastBN: ", lastBN);
      const approvalEvents = await erc20Contract.getPastEvents("Approval", {
        fromBlock: curBN,
        toBlock: lastBN,
      });
      console.log("approvalEvents length: ", approvalEvents.length);
      if (approvalEvents.length > 0) {
          console.log("     approvalEvents:", approvalEvents[0].returnValues);
        for (let i = 0; i < approvalEvents.length; i++) {
          // console.log(`     approvalEvents: ${approvalEvents[i].returnValues}`);
          // Compare moniter address
        }
      }
      curBN = lastBN + 1;
    } else {
      console.log("lastBN < curBN");
    }
  } catch (error) {
    console.log(error);
  }
  console.log("=========== end");
  console.log(" ");
}

async function init() {
  try {
    processApproveMonitor().then();
    setInterval(async () => processApproveMonitor(), 5000);
  } catch (error) {
    curBN = config[56].StartBlock;
    console.log(error);
  }
}

console.log("start BOT");
init().then();
