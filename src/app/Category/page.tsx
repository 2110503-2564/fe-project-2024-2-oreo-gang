
import CategoryComponent from "@/components/CarCatalogue";
import OreoFooter from "@/components/OreoFooter";
import getCarProviders from "@/libs/getCarProviders";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function Category() {

  const providers = getCarProviders()

  return (
    <main >
      <Suspense fallback={<div className="my-10 flex width-[50%] justify-center"><p>Loading... <LinearProgress/></p></div>}>
        <CategoryComponent ProviderJson={providers}/>
      </Suspense>
      <OreoFooter/>
    </main>
  );
}
