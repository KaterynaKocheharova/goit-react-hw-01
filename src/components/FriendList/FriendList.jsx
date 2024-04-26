import clsx from "clsx";
import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={clsx(css["friends-list"])}>
      {friends.map((friend) => (
        <li className={clsx(css["friend-list-item"])} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
