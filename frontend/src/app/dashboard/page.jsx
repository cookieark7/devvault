"use client";
import Sidebar from "@/common/Sidebar";
import { Plus, Search } from "lucide-react";
import Button from "@/common/Button";
const Dashboard = ({}) => {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <section className="flex flex-col w-full">
          <nav className="flex h-8 p-5 justify-between w-full">
            <span>
              <h1>Dashboard</h1>
              <p>Manage all your contect in one place</p>
            </span>
            {/* <button
              type="button"
              className="bg-black text-white rounded-lg cursor-pointer h-auto flex items-center gap-2 p-4 border border-transparent hover:bg-amber-200 hover:border-black hover:text-black"
            >
              <Plus />
              Add New
            </button> */}
            <Button
              title="Add New"
              icon={<Plus/>}
            />
          </nav>
          <div className="relative w-full p-5 mt-8">
            <div className="absolute inset-y-0 left-7 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search all items"
              className="w-full p-2 pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="flex w-full justify-start gap-4 px-4">
            <button
              type="button"
              className="bg-black text-white rounded-lg cursor-pointer h-auto flex items-center gap-2 p-2 border border-transparent hover:bg-amber-200 hover:border-black hover:text-black"
            >
              <Plus />
              Add New
            </button>
            <button
              type="button"
              className="bg-black text-white rounded-lg cursor-pointer h-auto flex items-center gap-2 p-2 border border-transparent hover:bg-amber-200 hover:border-black hover:text-black"
            >
              <Plus />
              Add New
            </button>
            <button
              type="button"
              className="bg-black text-white rounded-lg cursor-pointer h-auto flex items-center gap-2 p-2 border border-transparent hover:bg-amber-200 hover:border-black hover:text-black"
            >
              <Plus />
              Add New
            </button>
            <button
              type="button"
              className="bg-black text-white rounded-lg cursor-pointer h-auto flex items-center gap-2 p-2 border border-transparent hover:bg-amber-200 hover:border-black hover:text-black"
            >
              <Plus />
              Add New
            </button>
            <button
              type="button"
              className="bg-black text-white rounded-lg cursor-pointer h-auto flex items-center gap-2 p-2 border border-transparent hover:bg-amber-200 hover:border-black hover:text-black"
            >
              <Plus />
              Add New
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
