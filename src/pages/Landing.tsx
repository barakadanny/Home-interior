import { Hero, FeaturedProducts } from "@/components";
import { customFetch, type ProductsResponse } from "@/utils";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const url = "/products?featured=true";

export const loader: LoaderFunction = async () => {
  console.log("This is running 1");
  const response = await customFetch<ProductsResponse>(url);
  console.log("This is running 2");
  console.log(response);
  return { ...response.data };
};

function Landing() {
  const result = useLoaderData() as ProductsResponse;
  console.log(result);
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}

export default Landing;
