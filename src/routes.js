import { Switch, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Card from './pages/card/Card'
import Checkout from './pages/checkout/Checkout'
import Favorites from "./pages/favorites/Favorites"
import Address from "./pages/address/Address"
import Requests from "./pages/requests/Requests"
import Faq from './pages/faq/Faq'
import Policy_security from './pages/policy_security/Policy_security'
import HowToBuy from './pages/howToBuy/HowToBuy'
import AboutUs from './pages/aboutUs/AboutUs'
import PlansVed from './pages/plansVed/PlansVed'
import Suggestion from './pages/suggestion/Suggestion'
import Register  from './pages/register/Register'
import Error from './pages/error404/Error'
import PasswordRecovery from './pages/passwordRecovery/PasswordRecovery'
import PasswordChange from "./pages/passwordChange/PasswordChange"
import Contact from './pages/contact/Contact'
import SucessBuy from './pages/successBuy/SucessBuy'
import Login from "./pages/login/Login"
import Bill from './pages/bill/Bill'
import Category from "./pages/category/Category"
import Basket from "./pages/basket/Basket"


export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/product" component={Product} />
            <Route path="/cesta" component={Basket}/>
            <Route path="/checkout" component={Checkout} /> 
            <Route path="/favorites" component={Favorites} />
            <Route path="/address" component={Address} />
            <Route path="/meuscartao" component={Card} />
            <Route path="/requests" component={Requests} />
            <Route path="/faq" component={Faq}/>
            <Route path="/policy_security" component={Policy_security}/>
            <Route path="/howToBuy" component={HowToBuy}/>
            <Route path="/aboutUS" component={AboutUs}/>
            <Route path="/plansVed" component={PlansVed}/>
            <Route path="/suggestion" component={Suggestion}/>
            <Route path="/cadastro" component={Register} />             
            <Route component={() => 
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>Oops!</h1>
                            <h2>404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div className="error-actions">
                                <a href="#" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                                    Take Me Home </a><a href="#" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope"></span> Contact Support </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}/>
            <Route path="/error404" component={Error} /> 
           
            
            <Route path="/Login" component={Login} exact/>
            <Route path="/SucessBuy" component={SucessBuy} exact/>
            <Route path="/Contact" component={Contact} exact/>
            <Route path="/PasswordChange" component={PasswordChange}/>
            <Route path="/PasswordRecovery" component={PasswordRecovery}/>
            <Route path="/cadastro" component={Register} /> 
            <Route path="/bill" component={Bill} />
            <Route path="/category" component={Category} />
            <Route component={() => <h1>Ops! Página não encontrada</h1>} />
            <Route path="/suggestion" component={Suggestion}/>
        
        </Switch>
    )
}