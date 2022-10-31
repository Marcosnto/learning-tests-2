import { useEffect, useState } from "react";
import axios from "axios";

import ScoopOptions from "./ScoopOptions";
import { Row } from "react-bootstrap";

export default function Options({ optionsType }) {
  const [items, setItems] = useState([]);

  //optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionsType}`)
      .then((response) => setItems(response.data))
      .catch((err) => {
        //TODO: handle error response
      });
  }, [optionsType]);

  // TODO: replace 'null'with ToppingOptions when available
  const ItemComponent = optionsType === "scoops" ? ScoopOptions : null;

  const optionsItem = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionsItem}</Row>;
}
