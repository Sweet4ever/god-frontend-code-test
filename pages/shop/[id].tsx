import { useRouter } from "next/router";

const ShopPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Shop for {id}</p>;
};

export default ShopPage;
