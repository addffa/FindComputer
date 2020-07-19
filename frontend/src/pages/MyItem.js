import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { Container } from '@material-ui/core';
import { getUserItems } from '../services/user.service';


export default function MyItem(props) {
  const [items, setItems] = useState();

  useEffect(() => {
    getUserItems(props.userId).then(res => {
      setItems(res.data)
    })
  }, [props.userId]);

  return (
    <React.Fragment>
      <Container>
        <div>
          {items && items.length > 0 && items.map(({ id, name, description, category, price }) => (
            <Card key={id} name={name} description={description} category={category} price={price} />
          ))}
        </div>
      </Container>
    </React.Fragment>
  );
}
