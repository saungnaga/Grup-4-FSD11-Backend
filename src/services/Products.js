export const getProducts = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
};