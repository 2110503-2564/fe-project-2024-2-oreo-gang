import Image from "next/image";
import styles from "./page.module.css";
import  Homepage  from "../components/Homepage";
import OreoFooter from "@/components/OreoFooter";


export default function Home() {

  return (
    <main style={{backgroundColor:"#f2f0f1"}}>
      <Homepage />
      <OreoFooter/>
    </main>
  );
}
