import { render, screen, logRoles } from "@testing-library/react";

import Options from "../Options";

test("display image for each scoop from the server", async () => {
  render(<Options optionsType="scoops" />);

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("should display image for each toppings from the server", async () => {
  render(<Options optionsType="toppings" />);

  const toppingsImages = await screen.findAllByRole("img", {
    name: /toppings$/i,
  });
  expect(toppingsImages).toHaveLength(3);

  const altText = toppingsImages.map((image) => image.alt);
  expect(altText).toEqual([
    "Cherries toppings",
    "M&Ms toppings",
    "Hot fudge toppings",
  ]);
});
