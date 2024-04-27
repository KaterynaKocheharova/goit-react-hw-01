import css from "./Profile.module.css";

function Profile({
  profileData: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css["user-card"]}>
      <div>
        <img
          className={css["user-image"]}
          src={avatar}
          alt="User avatar"
          width="100"
          height="100"
        />
        <p className={css["user-name"]}>{username}</p>
        <p className={css["user-nickname"]}>{tag}</p>
        <p className={css["user-location"]}>{location}</p>
      </div>
      <ul className={css["user-stat-list"]}>
        <li className={css["user-stat-item"]}>
          <span className={css["user-stat-detail"]}>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css["user-stat-item"]}>
          <span className={css["user-stat-detail"]}>Views</span>
          <span>{views}</span>
        </li>
        <li className={css["user-stat-item"]}>
          <span className={css["user-stat-detail"]}>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;
