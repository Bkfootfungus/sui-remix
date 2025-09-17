import React from "react";
import { ConnectButton, useWallet } from "@suiet/wallet-kit";

export default function App() {
  const wallet = useWallet();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sui Wallet Test</h1>
      <ConnectButton />
      {wallet.account?.address && (
        <p>Connected Wallet: {wallet.account.address}</p>
      )}
    </div>
  );
}
