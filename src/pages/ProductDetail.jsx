//import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import React, { useState ,useEffect} from "react";
import ProductService from "../services/productService";
export default function ProductDetail() {

  let { name } = useParams();

  const[product,setProduct]=useState({})      // Bu yapı kullanılarak;sistemde ne kadar ürün sayısı varsa o kadar tablo hücre sayısı elde edilecek.
 useEffect(() => {
 let productService = new ProductService();
 productService.getByProductName(name).then((result) => setProduct(result.data.data));
}, []);

  return (
    <div>
      <Card.Group>
    <Card fluid > 
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>{product.name}</Card.Header>
        <Card.Meta>{product.category.name}</Card.Meta>
        <Card.Description>
          Bu ürünü sepetinize eklemek ister misiniz? <strong>Eklenen Ürünler</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Onayla
          </Button>
          <Button basic color='red'>
            Sil
          </Button>
        </div>
      </Card.Content>
    </Card>
    
      
      
  </Card.Group>
    </div>
  )
}
