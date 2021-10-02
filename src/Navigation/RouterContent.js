import {Switch,Route} from 'react-router-dom'
import Product_page from '../Pages/Content/Product/Index'

export const RouterContent = ()=>{
    return(
        <Switch>
            <Route exact path="/app/product" component={Product_page}/>
        </Switch>
    )
}