async function main() {
    const NewsPortal = await ethers.getContractFactory("NewsPortal");
    const newsPortal = await NewsPortal.deploy();

    await newsPortal.deployed();

    console.log("NewsPortal deployed to:", newsPortal.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
