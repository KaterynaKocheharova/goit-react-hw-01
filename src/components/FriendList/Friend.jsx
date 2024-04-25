import clsx from "clsx";
import css from "./FriendList.module.css";

export default function Friend({ friend: { avatar, isOnline, name } }) {
  const statusText = isOnline ? "Online" : "Offline";
  return (
    <li className={clsx(css["friend-card"])}>
      <img
        className={clsx(css["friend-image"])}
        src={avatar}
        alt="Avatar"
        width="70"
      />
      <p className={clsx(css["friend-name"])}>{name}</p>
      <p
        className={clsx(
          css["friend-status"],
          isOnline ? css["online"] : css["offline"]
        )}
      >
        {statusText}
      </p>
    </li>
  );
}
