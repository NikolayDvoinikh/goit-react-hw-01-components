{
  /* <ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem -->
</ul> */
}

// Компонент должен принимать несколько пропов:

// avatar - ссылка на аватар
// name - имя друга
// isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
// В зависимости от пропа isOnline, должен меняться цвет фона span.status. Это можно сделать через разный CSS-класс или Styled Components.

// Компонент должен создавать DOM следующей структуры.

// <li class="item">
//   <span class="status"></span>
//   <img class="avatar" src="" alt="User avatar" width="48" />
//   <p class="name"></p>
// </li>

// Пример использования
// import friends from 'path/to/friends.json';

// <FriendList friends={friends} />;
