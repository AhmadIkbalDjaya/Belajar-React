import CardProduct from "../components/Fragments/CardProduct";

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
export default function ProductsPage() {
  return (
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
  );
}
