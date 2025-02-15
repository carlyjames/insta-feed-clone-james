import Image from "next/image";
import Page from "./components/feed/Page"
import Sidebar from "./components/common/Sidebar";
import Suggestions from "./components/common/Suggestions";


export default function Home() {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <Page  />
      <Suggestions />
    </div>
  );
}
