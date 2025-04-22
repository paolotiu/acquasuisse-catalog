import { Outlet } from "react-router";

export function meta() {
  return [
    { title: "Acquasuisse - About" },
    { name: "description", content: "Acquasuisse" },
  ];
}

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Outlet />    
    </>
  )
}
