import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { fetchProducts } from "../features/products/productsSlice";

function ProductList() {
  const products = useSelector((state: RootState) => state.products.items);
  const status = useSelector((state: RootState) => state.products.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch])

  if (status === 'loading') {
    return <div>
      Loading...
    </div>
  }
  console.log(status);

  if (status === 'failed') {
    return <p>
      Failed to Load Products...
    </p>
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList;
