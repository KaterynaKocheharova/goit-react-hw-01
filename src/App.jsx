import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import userData from "./data/user-data.json";
import friendsData from "./data/friends-data.json";

export default function App() {
  return (
    <section>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
    </section>
  );
}
