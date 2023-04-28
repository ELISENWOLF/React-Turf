import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from "./component/NavBar";
import Banner from './component/Banner';
import BookNow from './component/BookNow';

import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <BookNow />
    </div>
  );
}

export default App;
