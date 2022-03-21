const deploy = async () => {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract...", deployer.address);

    const Cryptopunks = await ethers.getContractFactory("Cryptopunks");
    const deployed = await Cryptopunks.deploy(10000);

    console.log("Cryptopunks Contracts is deployed at:", deployed.address);
}
deploy().then(() => process.exit(0)).catch(error => {
    console.log(error)
    process.exit(1)
})
