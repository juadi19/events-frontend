"use client";
import { useEffect } from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ECommerce from "@/components/Dashboard/E-commerce";
import useTokenValidation from "@/app/auth/custom-hooks/useTokenValidation";

// export const metadata: Metadata = {
//   title:
//     "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Home for TailAdmin Dashboard Template",
// };

const Home = () => {
  useTokenValidation();

  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
};

export default Home;
