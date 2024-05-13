import CountryList from "@/components/CountryList";
import AddCountryForm from "@/components/FormCountry";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-indigo-500 p-8">
        <AddCountryForm />
        <CountryList />
      </main>
    </>
  );
}
