
import CategoryComponent from "@/components/CarCatalogue";
import OreoFooter from "@/components/OreoFooter";
import getCarProviders from "@/libs/getCarProviders";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function Category() {

  const providers = getCarProviders()

  return (
    <main >
      <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
        <CategoryComponent ProviderJson={providers}/>
      </Suspense>
      <OreoFooter/>
    </main>
  );
}
