import clsx from "clsx";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={clsx(css["friends-list"])}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        const statusText = isOnline ? "Online" : "Offline";
        return (
          <li className={clsx(css["friend-card"])} key={id}>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>{statusText}</p>
          </li>
        );
      })}
    </ul>
  );
}
