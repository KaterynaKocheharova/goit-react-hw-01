import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/Transactions/TransactionHistory";
import userData from "./data/user-data.json";
import friendsData from "./data/friends-data.json";
import transactionsData from "./data/transaction-history-data.json";
import clsx from "clsx";
import css from "./App.module.css";

export default function App() {
  return (
    <section className={clsx(css["main-profile-section"], css["container"])}>
      <Profile profileData={userData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionsData} />
    </section>
  );
}
