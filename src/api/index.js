import { API, graphqlOperation } from "aws-amplify";
import { listProducts } from "./graphql/queries";
import { processOrder } from "./graphql/mutations";
import { v4 as uuidv4 } from "uuid";

export const checkout = async (orderDetails, cb) => {
  const payload = {
    id: uuidv4(),
    ...orderDetails,
  };
  console.log(payload);
  try {
    await API.graphql(graphqlOperation(processOrder, { input: payload }));
    console.log("Order is successful");
    cb();
    return payload;
  } catch (err) {
    console.log(err);
    return null;
  }
};
// Can add more advanced queries, such as getProducts with a limit, grab only 5 or 10 products from database (to reduce server load)

export const getProducts = async () => {
  try {
    // Switch authMode to API_KEY for public access
    const { data } = await API.graphql({
      query: listProducts,
      authMode: "API_KEY",
    });

    const products = data.listProducts.items;
    const featured = products.filter((product) => {
      return !!product.featured;
    });

    return { products: products, featured: featured, loaded: true };
  } catch (err) {
    console.log(err);
  }
};
