import { useReducer } from "react";
import WalletContext, { Connection } from "./wallet-context";

const defaultWalletState = { connectionStatus: Connection.notConnected };

const walletReducer = (state, action) => {
	switch (action.type) {
		case "connecting":
			return { connectionStatus: Connection.connecting };

		case "connected":
			return { connectionStatus: Connection.connected };

		case "disconnect":
			return { connectionStatus: Connection.notConnected };

		default:
			return state;
	}
};

export default function WalletProvider({ children }) {
	const [walletState, dispatchWalletAction] = useReducer(walletReducer, defaultWalletState);

	const walletContext = {
		connectionStatus: walletState.connectionStatus,
		connectingWallet: () => dispatchWalletAction({ type: "connecting" }),
		connectedWallet: () => dispatchWalletAction({ type: "connected" }),
		disconnectWallet: () => dispatchWalletAction({ type: "disconnect" }),
	};

	return <WalletContext.Provider value={walletContext}>{children}</WalletContext.Provider>;
}
