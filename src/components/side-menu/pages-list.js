import {
  Dashboard,
  DashboardActive,
  Nft,
  NftActive,
  UserWallets,
  UserWalletsActive,
  Deposits,
  DepositsActive,
  Settings,
  SettingsActive,
} from "../../svg";
const PagesList = [
  {
    title: "Dashboard",
    path: "/",
    icon: Dashboard,
    activeIcon: DashboardActive,
  },
  {
    title: "NFT",
    path: "/nft",
    icon: Nft,
    activeIcon: NftActive,
  },
  {
    title: "User Wallets",
    path: "/user-wallets",
    icon: UserWallets,
    activeIcon: UserWalletsActive,
  },
  {
    title: "Deposits",
    path: "/deposits",
    icon: Deposits,
    activeIcon: DepositsActive,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
    activeIcon: SettingsActive,
  },
];
export default PagesList;
