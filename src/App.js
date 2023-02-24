import './App.css';
import Products from './products';

function App() {
  let arr=[
    {
      id:1,
      produktName:"bestWine",
      inStock:false
    },
    {
      id:2,
      produktName:"lastWine",
      inStock:true
    },
    {
      id:3,
      produktName:"secondWine",
      inStock:true
    }
  ]
  return (
    <div className="App">
  {
    
    arr.map(user=><Products
      id={user.id}
      produktName={user.produktName}
      inStock={user.inStock}
      />)
  }
    </div>
  );
}

export default App;
