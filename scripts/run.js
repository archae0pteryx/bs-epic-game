const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame')
  const gameContract = await gameContractFactory.deploy(
    ['Bill Murray', 'Nick Cage', 'Kitten'],
    [
      'https://www.fillmurray.com/500/500',
      'https://www.placecage.com/500/500',
      'https://placekitten.com/500/500',
    ],
    [500, 300, 100],
    [100, 200, 300],
    'BACONATOR', // Boss name
    'https://baconmockup.com/640/360', // Boss image
    1000, // Boss hp
    50 // Boss attack damage
  )
  await gameContract.deployed()
  let txn
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2)
  await txn.wait()

  txn = await gameContract.attackBoss();
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();
  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1)
  console.log('Token URI:', returnedTokenUri)
  console.log('Contract deployed to:', gameContract.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
