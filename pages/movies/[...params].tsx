import Seo from "@/components/Seo";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
  params?: string[];
}

const MovieDetail: React.FC<IProps> = ({ params }) => {
  const router = useRouter();
  const data = router.query.params;
  console.log(data);
  const [title, id] = Array.isArray(data) ? data : [undefined, undefined];

  return (
    <div>
      <Seo title={title || "영화"} />
      <h2>{title || "Loading..."}</h2>
    </div>
  );
};

export default MovieDetail;

// export function getServerSideProps({ params: { params } }: any) {
//   return {
//     props: {
//       params,
//     },
//   };
// }
