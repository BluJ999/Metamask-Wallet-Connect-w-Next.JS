import { useWeb3 } from "@3rdweb/hooks"

export default function Home() {
  const {address, chainId, connectWallet} = useWeb3()

// returns Adress and Chain ID of connected chain if metamask is connected otherwise shows connect wallet button
  if( address ) {
    return (
    <div> 
      <p> Address: {address}</p>
      <p> ChainId: {chainId}</p>
    </div>
    )
  }else{
    return(
      <div>
        <button onClick={() => connectWallet("injected")}> Connect Wallet</button>
      </div>
    )
  }

  return (
    <div>
      <p>Hello, World</p>
    </div>
  )
}
