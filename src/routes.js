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

import HowToBuy from './pages/howToBuy/HowToBuy'
import AboutUs from './pages/aboutUs/AboutUs'
import PlansVed from './pages/plansVed/PlansVed'
import PasswordRecovery from './pages/passwordRecovery/PasswordRecovery'
import PasswordChange from "./pages/ passwordChange/PasswordChange"
import Contact from './pages/contact/Contact'
import SucessBuy from './pages/successBuy/SucessBuy'
import Login from "./pages/login/Login"
import Register  from './pages/register/Register'
import Bill from './pages/bill/Bill'
import Category from "./pages/category/Category"
import Suggestion from './pages/suggestion/Suggestion';



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
            <Route path="/faq" component={Faq}/>
            <Route path="/policy_security" component={Policy_security}/>
            <Route path="/howToBuy" component={HowToBuy}/>
            <Route path="/aboutUS" component={AboutUs}/>
            <Route path="/plansVed" component={PlansVed}/>
            <Route path="/Login" component={Login} exact/>
            <Route path="/SucessBuy" component={SucessBuy} exact/>
            <Route path="/Contact" component={Contact} exact/>
            <Route path="/PasswordChange" component={PasswordChange} exact/>
            <Route path="/PasswordRecovery" component={PasswordRecovery} exact/>
            <Route path="/cadastro" component={Register} /> 
            <Route path="/bill" component={Bill} />
            <Route path="category" component={Category} />
            <Route component={() => <h1>Ops! Página não encontrada</h1>} />
            <Route path="/suggestion" component={Suggestion}/>
        
        </Switch>
    )
}