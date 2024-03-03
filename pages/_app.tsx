import {
  ConnectWallet,
  ThirdwebProvider,
  bloctoWallet,
  coinbaseWallet,
  embeddedWallet,
  frameWallet,
  metamaskWallet,
  phantomWallet,
  rainbowWallet,
  safeWallet,
  trustWallet,
  walletConnect,
  zerionWallet,
} from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        safeWallet({
          personalWallets: [
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
            embeddedWallet({
              auth: {
                options: ["email", "google", "apple", "facebook"],
              },
            }),
            trustWallet(),
            zerionWallet(),
            bloctoWallet(),
            frameWallet(),
            rainbowWallet(),
            phantomWallet(),
          ],
        }),
        embeddedWallet({
          auth: {
            options: ["email", "google", "apple", "facebook"],
          },
        }),
        trustWallet(),
        zerionWallet(),
        bloctoWallet(),
        frameWallet(),
        rainbowWallet(),
        phantomWallet(),
      ]}
    >
      <ConnectWallet
        theme={"dark"}
        btnTitle={"Login"}
        switchToActiveChain={true}
        modalSize={"wide"}
        modalTitleIconUrl={""}
        showThirdwebBranding={false}
      />
    </ThirdwebProvider>
  );
}

export default MyApp;
