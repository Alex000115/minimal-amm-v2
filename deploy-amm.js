const hre = require("hardhat");

async function main() {
  const TOKEN_A = "0x..."; // Mock Token A
  const TOKEN_B = "0x..."; // Mock Token B
  
  const AMM = await hre.ethers.getContractFactory("SimpleAMM");
  const amm = await AMM.deploy(TOKEN_A, TOKEN_B);
  await amm.waitForDeployment();

  console.log("AMM V2 Core deployed to:", await amm.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
