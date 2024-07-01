import './App.css';
import Table from './componenet/Table';


const initialProducts = [
  { id: '1', name: 'Basic Tee', price: '$20', size: 'M' },
  { id: '2', name: 'Graphic Tee', price: '$25', size: 'L' },
  { id: '3', name: 'V-Neck Tee', price: '$30', size: 'S' },
  { id: '4', name: 'Long Sleeve Tee', price: '$35', size: 'XL' },
  { id: '5', name: 'Hooded Tee', price: '$40', size: 'M' },
];
function App() {
  return (
    <div>
        <h1>T-Shirt Products</h1>
        <Table initialProducts={initialProducts} />
    </div>
  );
}

export default App;
