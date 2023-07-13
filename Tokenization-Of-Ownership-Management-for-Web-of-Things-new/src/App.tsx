import { useState, useEffect } from 'react';
import { ethers } from 'ethers'
import Mint from './artifacts/contracts/AdministrativeRoles/Issuer.sol/Issuer.json'
import CSS from 'csstype';
import { NftProvider, useNft } from "use-nft"
//import styles from "./App.module.scss";
import { useNavigate } from 'react-router-dom';
//import myMenu from './Menu';
import Header from './Header';
import { Link } from "react-router-dom";
import { Grid, GridRow, Button, Divider, Label, Input } from 'semantic-ui-react';


const mintAddress = "0xd439A27FCAE82d7AF590762E4D8e8044E115c20D"


const fetcher = ["ethers", { ethers, provider: ethers.getDefaultProvider() }]
const logo = require('./images/logo.png')
//const styles = require('./App.css');
const token1 = require('./images/token2.jpg')
const token2 = require('./images/token3.jpeg')
function App() {
  // request access t
  const [userAccount, setUserAccount] = useState()

  const navigate = useNavigate();

  const goToSecondsComp = () => {

    // This will navigate to second component
    navigate('/MintedTokens');
  };
  async function requestAccount() {
    console.log("inside set greeting0");

    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function showTokens() {
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
      // const bal = await contract.tokensOfOwner(account_address)//tokensOfOwner(account_address)
      // console.log("Total NFT's ",bal)
      for (let i = 0; i < 5; i++) {
        const tokenId = i //await contract.methods.tokenOfOwnerByIndex(account_address, i).call()

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
        console.log(tokenMetadata["name"])

        //  var owner = document.createElement("label");
        //  owner.innerHTML = tokenMetadata["owner"]

        var description = document.createElement("label");
        description.innerHTML = tokenMetadata["description"]

        //var inputTag = document.createElement("div");              
        //inputTag.innerHTML = "<input type = 'button' value = 'Buy NFT' onClick = 'mintNFT(i)'>";    

        var btn = document.createElement("button");
        btn.innerHTML = "Mint NFT"
        btn.id = i.toString();

        //description.innerHTML = tokenMetadata["description"]
        //const container = document.createElement('div', {}, [title, description]);


        //document.getElementById("imgdiv").appendChild( title)
        //document.getElementById("imgdiv").appendChild(description)
        //document.getElementById("imgdiv").appendChild(btn)
        columns.appendChild(img)
        columns.appendChild(title)
        columns.appendChild(description)
        // columns.appendChild(owner)

        columns.appendChild(btn)

        document.getElementById("imgdiv").appendChild(columns)
        //document.getElementById("imgdiv").appendChild(div)

        btn.onclick = function () { mintNFT(i); };
      }
    } catch (e) {
      console.log(e);
    }
    console.log("done")
  }

  async function mintNFT(tokenId: any) {
    console.log("Token Id :: ", tokenId)
    if (typeof window.ethereum !== 'undefined') {

      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(mintAddress, Mint.abi, signer);
      let account_address
      try {

        if (userAccount) {
          account_address = userAccount;
        } else {
          const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
          account_address = account;
        }
        const cost = ethers.utils.parseEther("0.5");
        const transation = await contract.safeMint(account_address, tokenId, {
          value: cost,//ethers.utils.parseEther('0.1'), //String(maxMintPrice)
        });
        await transation.wait();
        //   console.log("NFT Minted to address: ", account_address);
        //  console.log("Token Id : ", tokenId);
        // fetchNFTIndex();
      }
      catch (e) {
        console.log(e);
      }
    }

  }

  async function accessResource() {


    const tokenId = 1 //await contract.methods.tokenOfOwnerByIndex(account_address, i).call()

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

    var title = tokenMetadata["name"]

    var description = tokenMetadata["description"]

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
    } catch (e) {
      console.log(e);
    }


  }
  useEffect(() => {
    showTokens();
  }, []);
  return (


    <div className="App">

      <Header />

      <button className="menu-button" onClick={goToSecondsComp}> Minted NFT's </button>


      <Grid container centered divided='vertically' verticalAlign='middle' textAlign='center'>
        <GridRow className="grid" >
          <Grid id='imgdiv'  >
          </Grid>
        </GridRow>
      </Grid>
    </div>

  );
}

export default App;
