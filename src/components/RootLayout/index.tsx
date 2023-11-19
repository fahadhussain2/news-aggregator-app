import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";
import Preferences from "../Preferences";

const RootLayout = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div id="root-layout">
      <Header setModalOpen={setModalOpen}/>
      <main className="flex-grow w-full max-w-4xl md:p-2 mx-auto">
        <Outlet />
      </main>
      <Footer />
      <Preferences modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default RootLayout;
