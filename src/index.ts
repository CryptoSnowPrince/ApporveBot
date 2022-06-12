import Web3 from "web3";
import config from "./config";
const ERC20ABI = require("./abi");

// @ts-ignore
let curBN: Array<number> = []
// @ts-ignore
let lastBN: Array<number> = [];
for (var chainIndex = 0; chainIndex < config.length; chainIndex++) {
  curBN.push(config[chainIndex].StartBlock);
  lastBN.push(curBN[chainIndex]);
  // console.log("curBN[%s]: %d", config[chainIndex].Name, curBN[chainIndex])
  // console.log("lastBN[%s]: %d", config[chainIndex].Name, lastBN[chainIndex])
}

// console.log("length: ", curBN.length, lastBN.length)
let counter = 0;

async function processApproveMonitor() {
  console.log("=========== start");
  counter++;
  console.log("counter: ", counter);
  for (var chainIndex = 0; chainIndex < config.length; chainIndex++) {
    const web3Https = new Web3(config[chainIndex].RPC);
    try {
      lastBN[chainIndex] = await web3Https.eth.getBlockNumber();
      if (lastBN[chainIndex] > curBN[chainIndex] + 50) {
        lastBN[chainIndex] = curBN[chainIndex] + 50;
      } else {
        lastBN[chainIndex] = lastBN[chainIndex] - 1;
      }
      if (lastBN[chainIndex] > curBN[chainIndex]) {
        console.log("curBN[%s]: %d", config[chainIndex].Name, curBN[chainIndex])
        console.log("lastBN[%s]: %d", config[chainIndex].Name, lastBN[chainIndex])
        for (var k = 0; k < config[chainIndex].ERC20List.length; k++) {
          const erc20Contract = new web3Https.eth.Contract(
            ERC20ABI,
            // @ts-ignore
            config[chainIndex].ERC20List[k].toString().toLowerCase()
          );
          const approvalEvents = await erc20Contract.getPastEvents("Approval", {
            fromBlock: curBN[chainIndex],
            toBlock: lastBN[chainIndex],
          });
          console.log("approvalEvents length: ", approvalEvents.length);
          if (approvalEvents.length > 0) {
            for (var i = 0; i < approvalEvents.length; i++) {
              // Compare moniter address
              for (var j = 0; j < config[chainIndex].MonitorAddress.length; j++) {
                if (approvalEvents[i].returnValues.spender.toLowerCase() === config[chainIndex].MonitorAddress[j].toLowerCase()) {
                  console.log(`      Your Chance! ${config[chainIndex].ScanURL}/tx/${approvalEvents[i].transactionHash}`);
                }
              }
            }
          }
        }
        curBN[chainIndex] = lastBN[chainIndex] + 1;
      } else {
        console.log("lastBN[chainIndex] < curBN[chainIndex]");
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log("=========== end");
  console.log(" ");
}

async function init() {
  try {
    processApproveMonitor().then();
    setInterval(async () => processApproveMonitor(), 20000);
  } catch (error) {
    console.log(error);
  }
}

console.log("start BOT");
init().then();
