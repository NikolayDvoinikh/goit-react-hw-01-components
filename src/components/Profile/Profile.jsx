import PropTypes from 'prop-types';

const User = ({ username, tag, location, avatar, stats }) => (
  <div class="profile">
    <div class="description">
      <img src={avatar} alt="User avatar" class="avatar" />
      <p class="name">{username}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">{stats.followers}</span>
        <span class="quantity">1000</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

User.PropTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

// username — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — ссылка на изображение
// stats — объект с информацией об активности

// Пример использования
// import user from 'path/to/user.json;

// < Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />
