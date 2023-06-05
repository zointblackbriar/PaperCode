import React from "react";
import { render } from "@testing-library/react";
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import Mint from './artifacts/contracts/AdministrativeRoles/Issuer.sol/Issuer.json'
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import GridRow from "semantic-ui-react/dist/commonjs/collections/Grid/GridRow";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';


const mintAddress = "0xd439A27FCAE82d7AF590762E4D8e8044E115c20D"

function MintedTokens() {
  const [userAccount, setUserAccount] = useState()
  let tokenIdArray: string | any[];
  const navigate = useNavigate();

  const goToSecondsComp = () => {

    // This will navigate to second component
    navigate('/AccessResource');
  };

  async function requestAccount() {
    console.log("inside set greeting0");

    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }
  async function getTokens() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const contract = new ethers.Contract(mintAddress, Mint.abi, provider)
      //console.log(t_tokenAddress);
      try {
        tokenIdArray = await contract.tokensOfOwner('0x2cE3aC6bbA2D1e30E40cA2F6D6136359D901fE41');
        console.log("tokenid array", tokenIdArray.length);
        for (var i = 0; i < tokenIdArray.length; i++) {
          console.log(tokenIdArray[i].toString().split(','));

        }
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }
  async function showTokens() {
  getTokens();
    await requestAccount()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(mintAddress, Mint.abi, signer);

    console.log("test")
    let account_address;
    try {

      if (userAccount) {
        account_address = userAccount;
        console.log(account_address)
      } else {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
        account_address = account;
        console.log(account_address)
      }
      const balance = await provider.getBalance(account_address)
      ethers.utils.formatEther(balance)
      ethers.utils.parseEther("1.0")
      console.log("Balance of Metamask Account ", ethers.utils.formatEther(balance));

      for (let i = 0; i < tokenIdArray.length; i++) {
        const tokenId: number = +tokenIdArray[i] //await contract.methods.tokenOfOwnerByIndex(account_address, i).call()

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
        img.height = 100;
        img.width = 100;

        var title = document.createElement("label");
        title.innerHTML = tokenMetadata["name"]



        var description = document.createElement("label");
        description.innerHTML = tokenMetadata["description"]


        var btn = document.createElement("button");
        btn.innerHTML = "Tranfer NFT"
        btn.id = i.toString();

        columns.appendChild(img)
        columns.appendChild(title)
        columns.appendChild(description)
        columns.appendChild(btn)

        document.getElementById("imgdiv").appendChild(columns)

      }
    } catch (e) {
      console.log(e);
    }
    console.log("done")
  }



useEffect(() => {
 // getTokens();
 // showTokens();

}, []);
return(
  <div className="App">
          <Header/>
    <h2>Minted Tokens</h2>
    <div>
    <button  onClick={showTokens}> Show Tokens </button>

    <button className = "menu-button" onClick={goToSecondsComp}> Access Resource </button>


    <Grid container centered divided='vertically' verticalAlign='middle' textAlign='center'>
        <GridRow class="grid" >
          <Grid id='imgdiv' class='box' >
          </Grid>
        </GridRow>
      </Grid>
      </div>
   
    </div >

  );
}

export default MintedTokens;