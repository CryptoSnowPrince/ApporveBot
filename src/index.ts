import Web3 from "web3";
import config from "./config";
const ERC20ABI = require("./abi");

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
  while (1) {
    console.log("=start=");
    counter++;
    console.log("counter: ", counter);
    for (var chainIndex = 0; chainIndex < config.length; chainIndex++) {
      const web3Https = new Web3(config[chainIndex].RPC);
      try {
        lastBN[chainIndex] = await web3Https.eth.getBlockNumber();

        if (lastBN[chainIndex] > curBN[chainIndex] + 999) {
          lastBN[chainIndex] = curBN[chainIndex] + 999;
        } else {
          lastBN[chainIndex] = lastBN[chainIndex] - 1;
          await sleep(58000)
        }

        if (lastBN[chainIndex] > curBN[chainIndex]) {
          console.log("curBN[%s]: %d", config[chainIndex].Name, curBN[chainIndex])
          console.log("lastBN[%s]: %d", config[chainIndex].Name, lastBN[chainIndex])
          for (var tokenIndex = 0; tokenIndex < config[chainIndex].ERC20List.length; tokenIndex++) {
            const erc20Contract = new web3Https.eth.Contract(
              ERC20ABI,
              // @ts-ignore
              config[chainIndex].ERC20List[tokenIndex].toString().toLowerCase()
            );
            const approvalEvents = await erc20Contract.getPastEvents("Approval", {
              fromBlock: curBN[chainIndex],
              toBlock: lastBN[chainIndex],
            });
            console.log("=delay start=");
            await sleep(2000)
            console.log("=delay end=");
            console.log("approvalEvents length is %d of %s of %s: ", approvalEvents.length, config[chainIndex].ERC20List[tokenIndex], config[chainIndex].Name);
            if (approvalEvents.length > 0) {
              for (var evtIndex = 0; evtIndex < approvalEvents.length; evtIndex++) {
                // Compare moniter address
                for (var monitorIndex = 0; monitorIndex < config[chainIndex].MonitorAddress.length; monitorIndex++) {
                  if (approvalEvents[evtIndex].returnValues.spender.toLowerCase() === config[chainIndex].MonitorAddress[monitorIndex].toLowerCase()) {
                    console.log(`      Your Chance! ${config[chainIndex].ScanURL}/tx/${approvalEvents[evtIndex].transactionHash}`);
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
    console.log("=end=");
    console.log(" ");
  }
}

async function init() {
  try {
    processApproveMonitor().then();
    // setInterval(async () => processApproveMonitor(), 40000);
  } catch (error) {
    console.log(error);
  }
}

console.log("start BOT");
init().then();
