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

// Компонент должен принимать несколько пропов:

// avatar - ссылка на аватар
// name - имя друга
// isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
// В зависимости от пропа isOnline, должен меняться цвет фона span.status. Это можно сделать через разный CSS-класс или Styled Components.

// Компонент должен создавать DOM следующей структуры.

// Пример использования
// import friends from 'path/to/friends.json';

// <FriendList friends={friends} />;
