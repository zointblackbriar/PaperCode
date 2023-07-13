import { render } from "@testing-library/react";
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import React from "react";
import Header from './Header';
import Verifier from './artifacts/contracts/AdministrativeRoles/Verifier.sol/Verifier.json';
import FractionalNFT from './artifacts/contracts/FractionalNFT.sol/FractionalNFT.json';
import FNFToken from './artifacts/contracts/FNFToken.sol/FNFToken.json';

//import Test from './artifacts/contracts/Employee.sol/Test.json'

function AccessResource() {
  const verifierAddress = "0x67B3Ff97366E47455eBB9655cC0a7901EC6df28A";
  const testaddress = "0xA04F6E13596a9b28a5E150b94f448BE1703281d7";

  const fractionalNFTAddress = "0xa6acbCe36d09F8A78B91aE7f677334838e01A6b0";
const fnftTokenAddress = "0x3aE95fe211Fde8f855301cA6f54820e8B165693B";


async function mintfnft() {
  if (typeof window.ethereum !== 'undefined') {

    await requestAccount()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(fractionalNFTAddress, FractionalNFT.abi, signer);
  
      const transation = await contract.mint('0x2cE3aC6bbA2D1e30E40cA2F6D6136359D901fE41','QmRZRoFryzYUN9JY5YKYx75uyjfptGqWWmasFFRwz1eQJM/0',4);
      await transation.wait();
      //   console.log("NFT Minted to address: ", account_address);
      //  console.log("Token Id : ", tokenId);
      // fetchNFTIndex();fractionalNFTAddress

  }

  

}

async function mintfntoken() {
  if (typeof window.ethereum !== 'undefined') {

    await requestAccount()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(fnftTokenAddress, FNFToken.abi, signer);
  
      const transation = await contract.mint(fnftTokenAddress,4);
      await transation.wait();
      //   console.log("NFT Minted to address: ", account_address);
      //  console.log("Token Id : ", tokenId);
      // fetchNFTIndex();fractionalNFTAddress

  }

  

}
  async function requestAccount() {
    console.log("inside set greeting0");

    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }


  async function test() {
    if (typeof window.ethereum !== 'undefined') {

      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(testaddress, Test.abi, signer);
      try {
        const transation = await contract.testFunction();
        await transation.wait();

      }
      catch (e) {
        console.log(e);
      }
    }

  }
  async function accessResource() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const contract = new ethers.Contract(verifierAddress, Verifier.abi, provider)
      //console.log(t_tokenAddress);
      try {
        let result = await contract.verify("Read", "Receipts", "Supplier");
        console.log(result);
        let result2 = await contract.verify("Read", "Receipts", "Manager");
        console.log(result2);
      } catch (err) {
        console.log("Error: ", err)
      }
    }

  }
  async function accessResource_metadata() {
    //Getting Token Metadata
    let tokenId = 2;
    let tokenMetadataURI = "https://gateway.pinata.cloud/ipfs/QmRZRoFryzYUN9JY5YKYx75uyjfptGqWWmasFFRwz1eQJM/" + tokenId

    const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json())

    console.log(tokenMetadata)

    var imgUrl = tokenMetadata["image"].replace("ipfs://", "https://ipfs.io/ipfs/");

    console.log(imgUrl)
    var columns = document.createElement("GridRow")
    columns.className = "box";
    var img = document.createElement("img");
    img.setAttribute("id", "img" + tokenId)
    img.setAttribute("src", imgUrl)

    var resource = tokenMetadata["name"]

    var access_type = tokenMetadata["description"]

    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const contract = new ethers.Contract(verifierAddress, Verifier.abi, provider)
      console.log(resource);
      console.log(access_type);

      try {
        let result = await contract.verify(access_type.toString(), resource.toString(), "Supplier");
        console.log(result);
        let result2 = await contract.verify(access_type.toString(), resource.toString(), "Manager");
        console.log(result2);
      } catch (err) {
        console.log("Error: ", err)
      }
    }

  }
  return (
    <div >
      <Header />

      <h1>Access Resource</h1>
      <button onClick={accessResource_metadata}>Access Resource</button>

      <button onClick={mintfnft}>Mint FNFT</button>
      <button onClick={mintfntoken}>Mint ERC Tokens</button>


    </div>

  );
}

export default AccessResource;