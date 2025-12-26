import { useParams } from "react-router-dom";
import { Products } from "../data/Products";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const productos = Products;
  const productoDetalle = productos.find(
    (producto) => producto.id === Number(id)
  );

  return (
    <>
      <h1>Hola Mundfo {productoDetalle?.stock}</h1>
    </>
  );
};
