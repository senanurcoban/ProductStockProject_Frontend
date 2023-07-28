import React from 'react'
import Navi from "./Navi"
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid, GridColumn, GridRow} from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
          <Categories/>
          </GridColumn>
          <GridColumn width={12}>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/products" component={ProductList} />
          <Route path="/products/:name" component={ProductDetail} />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  )
}

  
 