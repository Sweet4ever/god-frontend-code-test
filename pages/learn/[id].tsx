import { useRouter } from "next/router";

const LearnPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Learn about {id}</p>;
};

export default LearnPage;
