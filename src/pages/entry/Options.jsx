import { useEffect, useState } from "react";
import axios from "axios";

import ScoopOptions from "./ScoopOptions";
import ToppingsOptions from "./ToppingsOptions";
import AlertBanner from "../common/AlertBanner";

import { Row } from "react-bootstrap";

export default function Options({ optionsType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  //optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionsType}`)
      .then((response) => setItems(response.data))
      .catch((err) => {
        setError(true);
      });
  }, [optionsType]);

  if (error) {
    return <AlertBanner />;
  }

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
