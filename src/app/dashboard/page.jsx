"use client";
import Sidebar from "@/common/Sidebar";
import { Plus } from "lucide-react";
const Dashboard = ({}) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <nav className="flex h-8 p-5 justify-between w-full">
          <span>
            <h1>Dashboard</h1>
            <p>Manage all your contect in one place</p>
          </span>
          <button className="bg-black rounded-lg cursor-pointer  flex gap-2  ">
            <Plus /> 
            Add New
          </button>
        </nav>
      </div>
    </>
  );
};

export default Dashboard;
