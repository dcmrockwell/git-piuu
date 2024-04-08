import { useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import Home from "./pages/Home";
import { base, bscTestnet, bsc } from "wagmi/chains";
import {
  metaMaskWallet,
  trustWallet,
  uniswapWallet,
  braveWallet,
  injectedWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const config = getDefaultConfig({
  appName: "Pixiu-Dashboard",
  projectId: "4ca78a0cd84ee1e3fdc5bfa83e00ae6b",
  chains: [bscTestnet, bsc, base],
});

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider showRecentTransactions={true} modalSize="compact">
            <Home />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

export default App;
