import { GET_ALL_COUNTRIES } from "@/graphql/client";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const CountryList = () => {
  const { loading, error, data } = useQuery(GET_ALL_COUNTRIES);
  const router = useRouter();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="min-h-screen flex flex-col justify-start items-center mt-6">
      <h1 className="text-3xl font-semibold text-white mb-8">
        List of countries
      </h1>
      <div className="grid max-[600px]:grid-cols-2 grid-cols-3 lg:grid-cols- gap-4">
        {data.countries.map((country: any) => (
          <div key={country.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2">
              <span className="mr-2 text-xl">{country.emoji}</span>
              {country.name}
            </h2>
            <div className="flex items-center mb-2">
              <span className="text-gray-500">
                {country.continent ? country.continent.name : "Unknown"}
              </span>
            </div>
            <button
              onClick={() => router.push(`/${country.id}`)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
