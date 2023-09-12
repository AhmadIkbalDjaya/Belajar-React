import React from "react";
import CardProduct from "../components/Fragments/CardProduct";

export default function ProductsPage() {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odio
          vero, sit quae dolore error, mollitia cum incidunt ratione repellat
          eos quos. Suscipit officiis nemo eos corrupti ea voluptatibus eveniet?
        </CardProduct.Body>
        <CardProduct.Footer price="1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odio
          vero, sit quae dolore error, mollitia cum incidunt ratione repellat
          eos quos. Suscipit officiis nemo eos corrupti ea voluptatibus eveniet?
        </CardProduct.Body>
        <CardProduct.Footer price="1.000.000" />
      </CardProduct>
    </div>
  );
}
