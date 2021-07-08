import './App.css';
import SideNav from './components/SideNav.js';
import Home from './pages/home/Home.js';
import Order from './pages/order/Order.js';
import Address from './pages/address/Address.js';
import Payment from './pages/payment/Payment.js';
import Cart from './pages/cart/Cart.js';
import Language from './Language.js';
import Login from './Login.js';
import Main from './Main.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" > <Login /></Route>
        <Route path="/main" > <Main /></Route>
        {/* <Route exact path="/home" component={Home} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/address" component={Address} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/language" component={Language} /> */}
      </Switch>
    </Router>
  );
}

export default App;
