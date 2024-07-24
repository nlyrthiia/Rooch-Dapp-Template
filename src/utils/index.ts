export const getExplorer = () => {
  const ua = window.navigator.userAgent;
  const isExplorer = (exp: string) => {
    return ua.indexOf(exp) > -1;
  };
  if (isExplorer("MSIE")) return "IE";
  if (isExplorer("Firefox")) return "Firefox";
  if (isExplorer("Edg")) return "Edge";
  if (isExplorer("Chrome")) return "Chrome";
  if (isExplorer("Opera")) return "Opera";
  if (isExplorer("Safari")) return "Safari";

  return "Unknown"; // Add a default return statement
};

export const WALLETURL = {
  UnisatWallet:
    "https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo",
};

export const installWallet = (connectorId: string, e: any) => {
  const explorerName = getExplorer();

  if (connectorId === "unisat") {
    e.preventDefault();
    window.open(WALLETURL.UnisatWallet, "_blank");
  }
};
