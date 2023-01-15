import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        padding: '40px 0',
        // height: '100vh',
        // display: 'flex',
        // flexDirection: 'column',
        // flexWrap: 'wrap',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
        backgroundColor: 'rgb(226, 241, 241)',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
