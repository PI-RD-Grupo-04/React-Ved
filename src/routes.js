import { Switch, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart' 
import Checkout from './pages/checkout/Checkout'
import Favorites from "./pages/favorites/Favorites"
import Address from "./pages/address/Address"
import Requests from "./pages/requests/Requests"
import Faq from './pages/faq/Faq'
import Policy_security from './pages/policy_security/Policy_security'
import HowToBuy from './pages/howToBuy/HowToBuy';
import AboutUs from './pages/aboutUs/AboutUs';
import PlansVed from './pages/plansVed/PlansVed';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} /> 
            <Route path="/checkout" component={Checkout} /> 
            <Route path="/cart" component={Cart}   />
            <Route path="/favorites" component={Favorites} />
            <Route path="/address" component={Address} />
            <Route path="/requests" component={Requests} />
            <Route path="/faq" component={Faq}/>
            <Route path="/policy_security" component={Policy_security}/>
            <Route path="/howToBuy" component={HowToBuy}/>
            <Route path="/aboutUS" component={AboutUs}/>
            <Route path="/plansVed" component={PlansVed}/>
        </Switch>
    )
}