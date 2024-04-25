import clsx from "clsx";
import css from "./FriendList.module.css";
import Friend from "./Friend";

export default function FriendList({ friends }) {
  return (
    <ul className={clsx(css["friends-list"])}>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
