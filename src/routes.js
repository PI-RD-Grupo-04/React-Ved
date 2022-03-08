import { Switch, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart' 
import Checkout from './pages/checkout/Checkout'
import Favorites from "./pages/favorites/Favorites"
import Address from "./pages/address/Address"
import Requests from "./pages/requests/Requests"
import Register  from "./pages/register/Register"

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} /> 
            <Route path="/checkout" component={Checkout} /> 
            <Route path="/favorites" component={Favorites} />
            <Route path="/address" component={Address} />
            <Route path="/requests" component={Requests} />
            <Route path="/cadastro" component={Register} /> 
            <Route component={() => <h1>Ops! Página não encontrada</h1>}/>
        </Switch>
    )
}