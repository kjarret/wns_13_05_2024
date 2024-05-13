import { GET_ALL_COUNTRIES } from "@/graphql/client";
import { useQuery } from "@apollo/client";
import Link from "next/link";

const CountryList = () => {
  const { loading, error, data } = useQuery(GET_ALL_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-indigo-500 min-h-screen flex flex-col justify-start items-center pt-20">
      <h1 className="text-3xl font-semibold text-white mb-8">
        List of Countries
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {data.countries.map((country: any) => (
          <div key={country.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2">
              <span className="mr-2 text-xl">{country.emoji}</span>
              {country.name}
            </h2>
            <div className="flex items-center mb-2">
              <span className="text-gray-500">{country.continent.name}</span>
            </div>
            <Link
              href={`/${country.id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
