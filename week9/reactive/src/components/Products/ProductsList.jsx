import ProductCard from "./ProductCard";

import purchase1 from "../../assets/img/purchase1.jpg";
import purchase2 from "../../assets/img/purchase2.jpg";
import purchase3 from "../../assets/img/purchase3.jpg";
import purchase4 from "../../assets/img/purchase4.jpg";

const products = [
  {
    img: purchase1,
    title: "Kettlebell / 5kg",
    price: "89,99$ / 59,99$",
  },
  {
    img: purchase2,
    title: "Kettlebell / 10kg",
    price: "99,99$ / 69,99$",
  },
  {
    img: purchase3,
    title: "Kettlebell / 15kg",
    price: "109,99$ / 79,99$",
  },
  {
    img: purchase4,
    title: "Kettlebell / 20kg",
    price: "119,99$ / 89,99$",
  },
];

function ProductsList() {
  return (
    <div className="products-list">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
}
export default ProductsList;
