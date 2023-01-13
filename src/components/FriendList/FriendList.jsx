import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className="item">
          <span className="status">{isOnline}</span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};
