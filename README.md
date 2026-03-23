# Minimal AMM V2

A professional-grade implementation of a decentralized exchange (DEX) core. This repository demonstrates the mathematical foundations of DeFi by managing two-token liquidity pools and facilitating trustless swaps without an order book.

## Core Features
* **Constant Product Market Maker:** Uses the $x \cdot y = k$ invariant for price discovery.
* **Liquidity Provision:** Mint LP tokens to providers proportionally to their share of the pool.
* **Slippage Management:** Built-in checks to ensure users receive a minimum expected output.
* **Flat Architecture:** All math, swap, and liquidity logic contained in the root directory.

## Mathematical Logic
The price of assets is determined by the ratio of reserves in the pool. When a swap occurs:
$$(x + \Delta x) \cdot (y - \Delta y) = k$$

## Setup
1. `npm install`
2. Deploy `SimpleAMM.sol` with two ERC-20 token addresses.
3. Add liquidity and perform your first swap!
