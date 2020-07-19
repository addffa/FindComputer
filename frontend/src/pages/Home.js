import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { Container } from '@material-ui/core';
import { getItems } from '../services/item.service';


export default function Home() {
  const [items, setItems] = useState();

  useEffect(() => {
    getItems().then(res => {
      setItems(res.data)
    })
  }, []);

  return (
    <React.Fragment>
      <Container>
        <div>
          {items && items.length > 0 && items.map(({ id, name, description, category, price }) => (
            <Card key={id} name={name} description={description} category={category} price={price} canBuy={true} />
          ))}
        </div>
      </Container>
    </React.Fragment>
  );
}
