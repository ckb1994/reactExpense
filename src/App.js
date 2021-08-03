import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id : 'e1',
      title:'Toilet Paper',
      amount:27.45,
      date : new Date(2021,6,31)
    },
    {
      id : 'e2',
      title:'Car Insurance Paper', 
      amount:127.49,
      date : new Date(2021,6,25)},
    {
      id : 'e3',
      title:'LED TV', 
      amount:999.74,
      date : new Date(2021,6,12)},
    {
      id : 'e4',
      title:'Study Table', 
      amount:247.22,
      date : new Date(2021,6,19)}
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <h2>This is React Learning</h2>
      <Expenses items = {expenses}/>
      
    </div>
  );
}

export default App;
