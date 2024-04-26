import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, isOnline, name } }) {
  const statusText = isOnline ? "Online" : "Offline";
  return (
    <>
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
    </>
  );
}
