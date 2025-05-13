import AboutUs from "./AboutUs";
import FAQ from "./FAQ";
import Branches from "./Branches";

export function meta() {
  return [
    { title: "Acquasuisse - Index" },
    { name: "description", content: "Acquasuisse" },
  ];
}

export default function Index() {
  return (
    <>
      <AboutUs />
      <FAQ />
      <Branches />
    </>
  )
}
