import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { communityAbi, communityAddress } from "../constants/contract";
import { connect, disconnect } from 'starknetkit'


// Create the context with default values
const FlowContext = createContext(undefined);

// Custom hook to use the Flow context
export const useFlow = () => useContext(FlowContext);

// Provider component to wrap around components that need access to the context
export const FlowProvider = ({ children }) => {
  const [allCommunity, setAllCommunity] = useState([]);
  const [active, setActive] = useState("learn");
  const [modalOpen, setModalOpen] = useState(false);
  const [isUserMember, setIsUserMember] = useState(false);
  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const [provider, setProvider] = useState()
  const [connection, setConnection] = useState()


  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
 
    const connectToStarknet = async () => {
    
      const { wallet } = await connect( { modalMode: "neverAsk" } )
    
      if (wallet && wallet.isConnected) {
        setConnection(wallet);
        setProvider(wallet.account);
        setWalletAddress(wallet.selectedAddress);
      }
    };
    
    connectToStarknet();
  }, [])

  const connectWallet = async () => {
    const { wallet } = await connect();
 
  if(wallet && wallet.isConnected) {
    setConnection(wallet)
    setProvider(wallet.account)
    setWalletAddress(wallet.selectedAddress)
  }
  };

  const conectwithContract = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window?.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          communityAddress,
          communityAbi,
          signer
        );
        return contract;
      } else {
        alert("no ethereum provider");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function to create a new community
  const createCommunity = async (name, description, image) => {
    try {
      const contract = await conectwithContract();
      if (contract) {
        const tx = await contract.createCommunity(name, description, image);
        // Wait for the tx to be mined
        const receipt = await tx.wait();

        // Retrieve the tx hash from the receipt
        const transactionHash = receipt.transactionHash;

        if (transactionHash) {
          location.reload();
        }

        // You may want to add additional logic here, such as updating state or showing a success message.
        return transactionHash;
      }
    } catch (error) {
      console.error("Error creating community:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  // Function to join an existing community
  const joinCommunity = async (communityId) => {
    try {
      const contract = await conectwithContract();
      if (contract) {
        const tx = await contract.joinACommunity(communityId);

        const receipt = tx.wait();

        if (receipt) {
          location.reload();
        }
        // You may want to add additional logic here, such as updating state or showing a success message.
      }
    } catch (error) {
      console.error("Error joining community:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  const retriveUserCommunity = async () => {
    try {
      const contract = await conectwithContract();
      // Call the retreiveCommunity function
      const communities = await contract.retreiveAllCommunities();
      // Return the result
      setAllCommunity(communities);
      return communities;
    } catch (error) {
      console.log(error.message);
    }
  };

  const ifMember = async (_communityId) => {
    try {
      if (address) {
        const contract = await conectwithContract();
        const isMember = contract.isUserMemberOfCommunity(_communityId, walletAddress);
        setIsUserMember(isMember);
        return isMember
      }
    } catch (error) {
      console.log("error checking if memeber", error.message);
    }
  };

  useEffect(() => {
    retriveUserCommunity();
    ifMember();
  }, [walletAddress]);

  return (
    <FlowContext.Provider
      value={{
        allCommunity,
        active,
        modalOpen,
        setModalOpen,
        isUserMember,
        createCommunity,
        joinCommunity,
        setActive,
        hideConnectBtn,
        setHideConnectBtn,
        walletAddress,
        connectWallet,
        setWalletAddress,
        ifMember
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};
