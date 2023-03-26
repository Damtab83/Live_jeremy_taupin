import logo from './logo.svg'
import './App.css'
import {
  ListArticles, 
  TestComponent, 
  FormDelivery
} from './Components'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import speciale from './img/pizza-speciale.jpg'
import margherita from './img/pizza-margherita.jpg'
import calzone from './img/pizza-calzone.jpg'
// index.css
// App.css
// Shop.css
const fakeDate = [
  {name : 'marguarita', price : 25, img: margherita},
  {name : '4 saisons', price: 32},
  {name : 'Royal sans prix'},
  {name : 'La spécial Luigi', price: 50, img: speciale},
  {name : 'Calzone (surgelé Lidl)', price: 3000, img: calzone},
  {name : 'Tartiflette', price: 58}
]
let point = 0

const addSomePoint = () => {
  point = point + 1
  console.log(point)
}
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/Delivery' element={<FormDelivery />} />
          <Route path='/List' element={<ListArticles articles={fakeDate}/>} />
          <Route path='/Test' element={<TestComponent functionClick={addSomePoint} points={point} />}/>
          <Route path='/Pomme' element={<h1>Quel idée des pommes sur une pizza ?!</h1>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
