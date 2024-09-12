import Ballot from "./ballot";

export default async function Page() {
  const response = await fetch(
    `https://${process.env.NEXT_PUBLIC_API_URI}/api/ballot`,
    {
      method: "GET",
    }
  );
  const ballot = await response.json();

  return (
    <>
      <Ballot ballot={ballot} />
    </>
  );
}
