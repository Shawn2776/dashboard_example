import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-5 bg-bgSoft">
        <Sidebar />
      </div>
      <div className="relative p-5 flex-4">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
