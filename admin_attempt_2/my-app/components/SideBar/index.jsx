"use client"

import "./style.css";
import axios from 'axios';
import { useState,useEffect } from "react";
import { darkModeSwitch, changeSection } from "@/redux/features/displayPreferences";
import { setUserData } from "@/redux/features/userData";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
// import { fetchData } from "@/api_related_funcs/api_fetching";
import { fetchData } from "@/api_related_funcs/api_fetching";


const Sidebar = () => {
  const dispatch = useDispatch();


  const currentPage = useAppSelector((state)=> state.prefrencesReducer.value.currentPage)
  const userData = useAppSelector((state)=> state.userDataReducer.value)
  

  useEffect(() => {
    console.log("Data çekti");
    dispatch(fetchData());
  }, []);

  function changeSec(val) {
    dispatch(changeSection(val));
  }

  return (
    <div className="flex">
      <nav className="bg-primary h-screen w-64 p-0">
        <div>
          <div className="avatar p-5 ">
            <img src={userData.data["avatar"]} alt="Avatar" />
            <p className="text-white text-3xl">{userData.data["name"]}</p>
            <p className="text-white text-xl">{userData.data["id"]}</p>
          </div>
        </div>
        <ul className="h-[50vh]">
          <li className={`sidebar-element p-[15px] ${currentPage==0? "active":""}`} onClick={()=>changeSec(0)}>
            <p className={`${currentPage==0? "translate-x-3":""}`}>Dashboard</p>
          </li>
          <li className={`sidebar-element p-[15px] ${currentPage==1? "active":""}`} onClick={()=>changeSec(1)}>
            <p className={`${currentPage==1? "translate-x-3":""}`}>Users</p>
          </li>
          <li className={`sidebar-element p-[15px] ${currentPage==2? "active":""}`} onClick={()=>changeSec(2)}>
            <p className={`${currentPage==2? "translate-x-3":""}`}>Products</p>
          </li>
          <li className={`sidebar-element p-[15px] ${currentPage==3? "active":""}`}  onClick={()=>changeSec(3)}>
            <p className={`${currentPage==3? "translate-x-3":""}`}>Settings</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;