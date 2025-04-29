import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Titan Trails | Epic Journeys Await" },
    {
      name: "description",
      content:
        "Embark on legendary adventures with Titan Trails — the ultimate travel platform for booking epic trips and managing them with titan-level control.",
    },
  ];
}

const Home = () => {
  return <div>Home</div>;
};

export default Home;
