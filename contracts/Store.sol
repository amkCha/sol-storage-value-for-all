pragma solidity ^0.5.1;

contract Store {

  uint storeduint1 = 15;
  uint constant constuint = 16;
  uint128 investmentsLimit = 17055;
  uint32 investmentsDeadlineTimeStamp = uint32(now);

  bytes16 string1 = 'test1';
  bytes32 string2 = 'test1236';
  string string3 = "let's string something";

  mapping (address => uint) uints1;
  mapping (address => DeviceData) structs1;

  uint[] uintArray;
  DeviceData[] deviceDataArray;


  mapping (uint256 => mapping (address => bool)) mapmap;

  struct DeviceData {
    string deviceBrand;
    string deviceYear;
    string batteryWearLevel;
  }

  // mapping(uint => uint) uints1;
  // uint[] uintArray;
  address initAddress = 0x659E3140ee3495D23021D1eDA53Dc02aa6cDcBbF;
  address initAddress2 = 0xcB8834509f296d31844534d1548AE8DAF98703c2;

  constructor()
  public payable {
    uints1[initAddress] = 88;
    uints1[initAddress2] = 99;

    structs1[initAddress] = DeviceData('brand', 'year', 'wearLevel');
    structs1[initAddress2] = DeviceData('brand2', 'year2', 'wearLevel2');

    uintArray.push(8000);
    uintArray.push(9000);

    deviceDataArray.push(DeviceData('brand', 'year', 'wearLevel'));
    deviceDataArray.push(DeviceData('brand', 'year', 'wearLevel'));

    mapmap[0][initAddress] = true;
    mapmap[1][initAddress2]= false;
  }
}