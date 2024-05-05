import './styles/App.css';
import Header from './components/Header';
import StaffList from './components/StaffList';
import { STAFFS } from './data/staff';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <StaffList data={STAFFS}/>
      </div>
    </div>
  );
}

export default App;
