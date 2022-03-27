import Dashboard from "../assets/dashboard.png";
import Transactions from "../assets/transactions.png";
import Plans from "../assets/plans.png";
import Purse from "../assets/purse.png";
import Portfolio from "../assets/portfolio.png";
import Support from "../assets/support.png";
import About from "../assets/about.png";
import GirlCode from "../assets/girlcode.png";
import BankCard from "../assets/bankcard.png";
import LogOut from "../assets/Logout.png";

const randomId = Math.floor(Math.random() * 2);
export const menuItems = [
  {
    id: 1,
    label: "Dashboard",
    icon: Dashboard,
    labelLink: "/",
  },
  {
    id: 2,
    label: "Plans",
    icon: Plans,
    labelLink: "/plans",
  },
  {
    id: 3,
    label: "Purse",
    icon: Purse,
    labelLink: "/purse",
  },
  {
    id: 4,
    label: "Transaction",
    icon: Transactions,
    labelLink: "/transactions",
  },
  {
    id: 5,
    label: "Banks & Cards",
    icon: BankCard,
    labelLink: "/banks",
  },
  {
    id: 6,
    label: "Girl Code",
    icon: GirlCode,
    labelLink: "/girlcode",
  },

  {
    id: 7,
    label: "Portfolio",
    icon: Portfolio,
    labelLink: "/portfolio",
  },
  {
    id: 8,
    label: "About Hervest",
    icon: About,
    labelLink: "/aboutHervest",
  },
  {
    id: 9,
    label: "Support ",
    icon: Support,
    labelLink: "/support",
  },
  {
    id: 10,
    label: "Logout ",
    icon: LogOut,
    labelLink: "/logout",
  },
];
