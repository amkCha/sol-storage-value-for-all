// Paste the deployed address of Store contract here
let contractAddress = '0xEb00e5B6EEE5528EedF51eA1c90A3627fd8D3c33';

function increaseHexByOne(hex) {
 let x = new BigNumber(hex);
 let sum = x.plus(1);
 let result = '0x' + sum.toString(16);
 return result;
}

module.exports = async function getGlobalData () {

  // all data
  // for (index = 0; index < 15; index++){
  //   let temp;
  //   temp = await web3.eth.getStorageAt(contractAddress, index);
  //   console.log(`[${index}]` + temp)
  // }

  // index 0 => OK
  let temp;
  temp = await web3.eth.getStorageAt(contractAddress, 0);
  console.log('storeduint1:' + web3.extend.utils.toDecimal(temp));

  // index 1 => KO
  // let temp1;
  // temp1 = await web3.eth.getStorageAt(contractAddress, 1);
  // console.log('DEC:' + web3.extend.utils.toDecimal(temp1));

    // index 2 & 3 & 4 => OK
  // let temp2;
  // temp2 = await web3.eth.getStorageAt(contractAddress, 2);
  // console.log(temp2);
  // console.log('DEC:' + web3.extend.utils.toAscii(temp2));

  // let temp3;
  // temp3 = await web3.eth.getStorageAt(contractAddress, 3);
  // console.log(temp3);
  // console.log('DEC:' + web3.extend.utils.toAscii(temp3));

  // let temp4;
  // temp4 = await web3.eth.getStorageAt(contractAddress, 4);
  // console.log(temp4);
  // console.log('DEC:' + web3.extend.utils.toAscii(temp4));

  // index 5 mapping => KO
  // let key5;
  // let index5;

  // key5 = '00000000000000000000000xcB8834509f296d31844534d1548AE8DAF98703c2'
  // index5 = '0000000000000000000000000000000000000000000000000000000000000005';

  // key5_low = key5.toLowerCase()

  // let newKeyTest = web3.extend.utils.soliditySha3('0x' + key5_low + index5);
  // let newKeyTest_2 = increaseHexByOne(newKeyTest);

  // let pythonKey = '0xd033d80a79c6deb77c053d3944a2363c9bb549b9df42f92f89428bd03368e83e';

  // temp5 = await web3.eth.getStorageAt(contractAddress, newKeyTest); 
  // console.log('DEC:' + web3.extend.utils.toDecimal(temp5));


  // index 6 mapping => KO
  // let temp6;
  // let index6;
  // let key6;
  // index6 = '0000000000000000000000000000000000000000000000000000000000000006';
  // key6 =  '00000000000000000000000x659E3140ee3495D23021D1eDA53Dc02aa6cDcBbF';

  // let newKey6;
  // newKey6 =  web3.extend.utils.soliditySha3( '0x' + key6.toLowerCase() + index6);
  // let newKey6_2= increaseHexByOne(newKey6);
  // temp6 = await web3.eth.getStorageAt(contractAddress, newKey6_2);
  // console.log('DEC:' + web3.extend.utils.toAscii(temp6));


  // // index 7 array => OK for 1st item
  // let temp7;
  // let index7;
  // index7 = '0000000000000000000000000000000000000000000000000000000000000007';

  // newKey7 =  web3.utils.soliditySha3(index7);
  // let newKey7_2 = increaseHexByOne(newKey7);
  // temp7 = await web3.eth.getStorageAt(contractAddress, newKey7_2); 
  // console.log('DEC:' + web3.extend.utils.toDecimal(temp7));

  // newKey7_2= newKey7 + 1;
  // temp7_2 = await web3.eth.getStorageAt(contractAddress, newKey7_2); 
  // console.log('DEC:' + web3.extend.utils.toDecimal(temp7_2));

  // index 9, mapping (uint256 => mapping (address => bool)) mapmap

  let store;
  let temp9;
  let index9;
  let key9;
  index9 = '0000000000000000000000000000000000000000000000000000000000000009';
  key9 = '0000000000000000000000000000000000000000000000000000000000000001';
  key9plus = '00000000000000000000000xcB8834509f296d31844534d1548AE8DAF98703c2';

  newKey9 =  web3.extend.utils.soliditySha3('0x' + key9 + index9);
  let newKey99 = newKey9.replace('0x', '');
  let newKey9plus = web3.extend.utils.soliditySha3( '0x' + key9plus.toLowerCase() + newKey99)

  temp9 = await web3.eth.getStorageAt(contractAddress, newKey9plus); 
  console.log('DEC:' + temp9);
};