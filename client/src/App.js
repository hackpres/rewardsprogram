import './App.css';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from './utils/queries';
import H1 from './components/header/H1';
import H2 from './components/header/H2';
import UserSelect from './components/form/UserSelect';
import QuarterSelect from './components/form/QuarterSelect';
import Monthly from './components/display/Monthly';


function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  const [quarter, setQuarter] = useState([]);
  const { loading, error, data } = useQuery(QUERY_USERS);
  console.log(useQuery(QUERY_USERS))
  console.log(data)
  useEffect(() => {
    const onCompleted = (data) => {
      setUsers(data);
    }
    const onError = (error) => <div>{error}</div>
    if(onCompleted || onError) {
      if(onCompleted && !loading && !error) {
        onCompleted(data);
      } else if(onError && !loading && error) {
        onError(error)
      }
    }
  }, [loading, error, data])
  if (loading) return <div>Loading...</div>;

  const getNames = (dataSet) => {
    const names = [];
    dataSet.forEach((userData) => {
      names.push(`${userData.firstName} ${userData.lastName}`)
    })
    return names
  }
  const updateSelected = (e) => {
    const selectedUser = e.target.value.split(' ');
    for (let i = 0; i < users.users.length; i++) {
      if (users.users[i].firstName === selectedUser[0]) {
        setUser(users.users[i]);
        setQuarter([]);
      }
    }
  }
  const updateQuarter = (e) => {
    const selectedQuarter = e.target.value;
    console.log(quarter)
    switch (selectedQuarter) {
      case "Q1":
        setQuarter([{january: user.purchaseHistory.january}, {february: user.purchaseHistory.february}, {march: user.purchaseHistory.march}]);
        break;
      case "Q2":
        setQuarter([{april: user.purchaseHistory.april}, {may: user.purchaseHistory.may}, {june: user.purchaseHistory.june}]);
        break;
      case "Q3":
        setQuarter([{july: user.purchaseHistory.july}, {august: user.purchaseHistory.august}, {september: user.purchaseHistory.september}]);
        break;
      case "Q4":
        setQuarter([{october: user.purchaseHistory.october}, {november: user.purchaseHistory.november}, {december: user.purchaseHistory.december}]);
        break;
      default:
        setQuarter([])
        break;
    }
  }

  return (
    <>
      <H1 />
      <H2 name={user} />
      <UserSelect name={getNames(data.users)} change={updateSelected} />
      {user ? <QuarterSelect change={updateQuarter} /> : null}
      <Monthly quarter={quarter}/>
    </>
  );
}

export default App;
