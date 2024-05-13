import CountryDetail from "@/components/CountryDetails";
import Header from "@/components/Header";
import { GET_ALL_COUNTRIES } from "@/graphql/client";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const CountryDetailsPage = () => {
  const router = useRouter();
  const { countryId } = router.query;

  const { loading, error, data } = useQuery(GET_ALL_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data.countries.find(
    (country: any) => country.id.toString() === countryId
  );

  if (!country) return <p>Country not found</p>;

  return (
    <>
      <Header />
      <CountryDetail country={country} />
    </>
  );
};

export default CountryDetailsPage;
