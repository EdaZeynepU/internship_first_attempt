"use client"

import { useState, useEffect } from "react";
import { ReduxProvider } from "@/redux/provider";
import { store, useAppSelector } from "@/redux/store";
import RootLayout from "./layout";
import { Provider } from "react-redux";
import Dashboard from "@/components/Dashboard";
import Users from "@/components/Users/index.jsx";
import Products from "@/components/Products";
import { Settings } from "@/components/Settings/İndex";

export default function Home() {
  const x = useAppSelector((state) => state.prefrencesReducer.value.currentPage);
  const [currentSection, setCurrentSection] = useState(<Dashboard />);

  useEffect(() => {
    switch (x) {
      case 0:
        setCurrentSection(<Dashboard />)
        break;
      case 1:
        setCurrentSection(<Users/>)
        break;
      case 2:
        setCurrentSection(<Products />)
        break;
      case 3:
        setCurrentSection(<Settings />)
        break;
      default:
        break;
    }
  }, [x])
  

  return (
    <div className="flex w-full">{
      currentSection
    }</div>
  );
}
