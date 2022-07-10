import { ethers } from 'ethers';
import { MultiGraph } from 'graphology';

const EventEmitter = require('events')
const ee = new EventEmitter()
const graph = new MultiGraph()

// chains
const chains = [
  {
    id: "ethereum",
    ws: new ethers.providers.WebSocketProvider("wss://main-light.eth.linkpool.io/ws"),
    web3: new ethers.providers.JsonRpcProvider("https://cloudflare-eth.com"),
  },
  /*
  {
    type: "chain",
    ws: new ethers.providers.WebSocketProvider("https://api.avax.network/ext/bc/C/ws"),
    web3: new ethers.providers.JsonRpcProvider("https://api.avax.network/ext/bc/C/rpc")
  }
  */
]

function addToken(chain, link, address,) {
  graph.addNode(address, { type: "token", chain: chain })

  for (let i in link) {
    graph.mergeNode(link[i], { type: "logical" })
    graph.mergeEdge(link[i], address)
  }
}

function addExchange(chain, name, address) {
  graph.addNode(address, { type: "exchange", chain: chain, name: name })
}

// wrapped
addToken("ethereum", ["weth"], "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")
addToken("ethereum", ["wbtc"], "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599")

// usd
addToken("ethereum", ["usdt", "usd"], "0xdAC17F958D2ee523a2206206994597C13D831ec7")
addToken("ethereum", ["usdc", "usd"], "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")
addToken("ethereum", ["busd", "usd"], "0xdAC17F958D2ee523a2206206994597C13D831ec7")
addToken("ethereum", ["dai", "usd"], "0xdAC17F958D2ee523a2206206994597C13D831ec7")

// assets
addToken("ethereum", ["bnb"], "0xB8c77482e45F1F44dE1745F52C74426C631bDD52")
addToken("ethereum", ["hex"], "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39")
addToken("ethereum", ["matic"], "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0")
addToken("ethereum", ["link"], "0x514910771AF9Ca656af840dff83E8264EcF986CA")

// exchanges
addExchange("ethereum", "uniswap_3", "0xE592427A0AEce92De3Edee1F18E0157C05861564")
addExchange("ethereum", "uniswap_3_2", "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45")
addExchange("ethereum", "1inch_4", "0x1111111254fb6c44bAC0beD2854e76F90643097d")
addExchange("ethereum", "metamask", "0x881D40237659C251811CEC9c364ef91dC08D300C")

async function getBlock(web3, blockNumber) {
  try {
    return await web3.getBlock(blockNumber);
  } catch (e) {
    return getBlock(web3, blockNumber)
  }
}

async function getTx(web3, hash) {
  try {
    let txData = await web3.getTransactionReceipt(hash)
    if (!txData.transactionHash) {
      throw Error()
    } else {
      return txData
    }
  } catch (e) {
    return getTx(web3, hash)
  }
}

// STARTUP
for (let chain of chains) {
  chain.ws.on("block", async (blockNumber) => {
    let blockData = await getBlock(chain.web3, blockNumber)
    ee.emit("block", { data: blockData, chain })

    blockData.transactions.forEach((tx) => {
      getTx(chain.web3, tx).then((txData) => {
        ee.emit("tx", { data: txData, chain })
      })
    })
  })
}

ee.on("block", ({ data, chain }) => {
  // console.log(chain.id, data.hash)
})

// Handle contract creation
/*
ee.on("tx", ({ data, chain }) => {
  if (data.contractAddress != null) {
    // console.log("contract", data.contractAddress)
  }
})
*/

// Ethereum Exchanges
ee.on("tx", ({ data, chain }) => {
  if (data.to == null) return

  for (let i in chain.exchanges) {
    if (data.to.toLowerCase() == chain.exchanges[i].address.toLowerCase()) {
      console.log(chain.id, chain.exchanges[i].id, data.transactionHash)

      for (let j in data.logs) {
        // swap events
        let swap_topics = [
          "0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67",
          "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822"
        ]
        for (let k in swap_topics) {
          if (data.logs[j].topics[0] == swap_topics[k]) {
            let pair = data.logs[j].address
            console.log("-", "swap", pair)
          }
        }
      }
    }
  }
})
