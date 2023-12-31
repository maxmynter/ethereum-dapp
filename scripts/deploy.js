const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.provider.getBalance(deployer.address);

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  const address = await waveContract.getAddress();

  console.log("WavePortal address: ", address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
