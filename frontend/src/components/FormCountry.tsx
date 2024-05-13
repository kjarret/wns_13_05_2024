import { GET_ALL_CONTINENTS, GET_ALL_COUNTRIES } from "@/graphql/client";
import { ADD_NEW_COUNTRY } from "@/graphql/mutation";
import { useMutation, useQuery } from "@apollo/client";

const AddCountryForm = () => {
  const [addCountry, { loading, error }] = useMutation(ADD_NEW_COUNTRY);
  const {
    loading: loadingContinents,
    error: errorContinents,
    data: continentData,
  } = useQuery(GET_ALL_CONTINENTS);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;
    const code = e.target.code.value;
    const emoji = e.target.emoji.value;
    const continentId = e.target.continent.value;

    const continent = { id: continentId };

    addCountry({
      variables: {
        data: { name, code, emoji, continent },
      },
      refetchQueries: [{ query: GET_ALL_COUNTRIES }],
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto pt-4 bg-white rounded-lg shadow-md px-8 py-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="code"
          >
            Code
          </label>
          <input
            type="text"
            name="code"
            id="code"
            placeholder="Code"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="emoji"
          >
            Emoji
          </label>
          <input
            type="text"
            name="emoji"
            id="emoji"
            placeholder="Emoji"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 md:col-span-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="continent"
          >
            Continent
          </label>
          {loadingContinents ? (
            <p>Loading continents...</p>
          ) : errorContinents ? (
            <p>Error fetching continents: {errorContinents.message}</p>
          ) : (
            <select
              name="continent"
              id="continent"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {continentData.continents.map((continent: any) => (
                <option key={continent.id} value={continent.id}>
                  {continent.name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full mt-4 md:col-span-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add Country
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default AddCountryForm;
