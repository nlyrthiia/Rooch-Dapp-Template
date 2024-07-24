import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RoochProvider, WalletProvider } from "@roochnetwork/rooch-sdk-kit";
import { networkConfig } from "./utils/networks";

import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RoochProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider chain={"bitcoin"} autoConnect>
          <App />
        </WalletProvider>
      </RoochProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
