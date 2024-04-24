import PropTypes from "prop-types";
// import clsx from "clsx";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => {
        const statusText = isOnline ? "Online" : "Offline";
        return (
          <li key={id}>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>{statusText}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
