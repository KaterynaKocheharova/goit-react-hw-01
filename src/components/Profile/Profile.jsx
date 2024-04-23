import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={clsx(css["user-card"])}>
      <div>
        <img
          className={clsx(css["user-image"])}
          src={image}
          alt="User avatar"
          width="100"
          height="100"
        />
        <p className={clsx(css["user-name"])}>{name}</p>
        <p className={clsx(css["user-nickname"])}>{tag}</p>
        <p className={clsx(css["user-location"])}>{location}</p>
      </div>
      <ul className={clsx(css["user-stat-list"])}>
        <li className={clsx(css["user-stat-item"])}>
          <span className={clsx(css["user-stat-detail"])}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={clsx(css["user-stat-item"])}>
          <span className={clsx(css["user-stat-detail"])}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={clsx(css["user-stat-item"])}>
          <span className={clsx(css["user-stat-detail"])}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired, // Add this line for name validation
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
