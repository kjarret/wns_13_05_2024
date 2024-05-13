import { useRouter } from "next/router";

const CountryDetail = ({ country }: any) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="bg-indigo-500 min-h-screen flex flex-col justify-start items-center text-white pt-20">
      <p className="text-9xl mb-7">{country.emoji}</p>
      <p className="text-lg">
        Name : {country.name} ({country.code})
      </p>
      {country.continent && (
        <p className="text-lg">Continent: {country.continent.name}</p>
      )}
      <button
        className="mt-4 bg-white text-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white focus:outline-none"
        onClick={handleGoBack}
      >
        Retour
      </button>
    </div>
  );
};

export default CountryDetail;
