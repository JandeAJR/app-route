import { useParams, useSearchParams } from "react-router-dom";

export default function About() {
   const params = useParams();
   const [searchParams, setSearchParams] = useSearchParams();

   console.log(searchParams.get("produto"));

   return (
      <h2 onClick={() => setSearchParams({ produto: 8 })} >About - {params.id} / produto = {searchParams.get("produto")}</h2>
   );
}
