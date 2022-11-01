import { useEffect, useState } from "react";
import axios from "axios";

import ScoopOptions from "./ScoopOptions";
import ToppingsOptions from "./ToppingsOptions";
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

  const ItemComponent =
    optionsType === "scoops" ? ScoopOptions : ToppingsOptions;

  const optionsItem = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionsItem}</Row>;
}
