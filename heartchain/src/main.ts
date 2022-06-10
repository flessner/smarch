import { ethers } from 'ethers';

const ws = new ethers.providers.WebSocketProvider("https://api.avax.network/ext/bc/C/ws");
const web3 = new ethers.providers.JsonRpcProvider("https://api.avax.network/ext/bc/C/rpc");

async function getBlock(blockNumber) {
  try {
    return await web3.getBlock(blockNumber);
  } catch (e) {
    return getBlock(blockNumber)
  }
}

async function handleContract(hash) {
  web3.getCode(hash).then((code) => {
    console.log(code);
  });
}

async function handleTnx(hash) {
  web3.getTransactionReceipt(hash).then((tnx) => {
    try {
      if (tnx.contractAddress != null) {
        handleContract(tnx.contractAddress);
      }
    } catch (e) {
      handleTnx(hash);
    }
  })
}

async function main() {
  ws.on("block", async (blockNumber) => {
    let blockData = await getBlock(blockNumber);
    blockData.transactions.forEach(handleTnx);
  });
}

main();