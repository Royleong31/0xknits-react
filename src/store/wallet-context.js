import { createContext } from "react";

export const Connection = { connected: 2, connecting: 1, notConnected: 0 };

const WalletContext = createContext({
	connectionStatus: Connection.notConnected,
	connectingWallet: () => {},
	connectedWallet: () => {},
	disconnectWallet: () => {},
});

export default WalletContext;
