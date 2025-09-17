import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { ConnectButton, useWallet } from "@suiet/wallet-kit";

export default function SuiEditor() {
  const [code, setCode] = useState(
    `module Counter::Main {\n  // Your Move code here\n}`
  );
  const wallet = useWallet();

  const handleCompile = () => {
    alert(
      "👉 To compile this contract locally:\n\n1. Save your Move code into /contracts\n2. Open a terminal in your project root\n3. Run:\n\nsui move build"
    );
  };

  const handleDeploy = () => {
    alert(
      "👉 To deploy this contract:\n\n1. Make sure you have a Sui wallet with testnet SUI\n2. In your terminal, run:\n\nsui client publish --gas-budget <amount>\n\nReplace <amount> with e.g. 10000"
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sui Remix MVP (Free Tier)</h1>
      <ConnectButton />
      <Editor
        height="400px"
        defaultLanguage="move"
        value={code}
        onChange={(value) => setCode(value || "")}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleCompile}>Compile</button>
        <button onClick={handleDeploy} style={{ marginLeft: "10px" }}>
          Deploy
        </button>
      </div>

      {/* Extra instructions below editor */}
      <div style={{ marginTop: "20px", background: "#f5f5f5", padding: "10px", borderRadius: "8px" }}>
        <h3>🚀 How to Use</h3>
        <ol>
          <li>Write or paste Move code in the editor</li>
          <li>Click <b>Compile</b> to see the CLI build instructions</li>
          <li>Click <b>Deploy</b> to see the CLI publish instructions</li>
          <li>Open your Ubuntu terminal in this project folder and run the commands</li>
        </ol>
      </div>
    </div>
  );
}
