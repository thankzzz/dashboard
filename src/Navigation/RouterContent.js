import {Switch,Route} from 'react-router-dom'
import Product_page from '../Pages/Content/Product/Index'
import Brand_page from '../Pages/Content/Brand/Index'
export const RouterContent = ()=>{
    return(
        <Switch>
            <Route exact path="/app/product" component={Product_page}/>
            <Route exact path="/app/brand" component={Brand_page}/>
        </Switch>
    )
}