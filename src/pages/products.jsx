import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "1.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, consequuntur aperiam? Voluptatum nobis inventore excepturi nemo voluptates quos ullam fugiat accusantium cupiditate maiores deserunt ipsam, quae totam explicabo obcaecati rerum.`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "100.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, consequuntur aperiam? Voluptatum nobis inventore.`,
  },
  {
    id: 3,
    name: "Sepatu Lagi",
    price: "2.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, consequuntur aperiam? Voluptatum`,
  },
];
const email = localStorage.getItem("email");
export default function ProductsPage() {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => {
          return (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} />
            </CardProduct>
          );
        })}
      </div>
    </Fragment>
  );
}
