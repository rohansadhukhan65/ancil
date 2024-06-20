"use client";

import UserCard from "@/components/UserCard";
import { GlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const [nameFilter, setNameFilter] = useState("asc");
  const { peoples, setPeoples, selectPeoples, setSelectedPeoples }: any =
    useContext(GlobalContext);

  const nameFilterHandler = () => {
    setNameFilter((p) => (p === "asc" ? "dsc" : "asc"));
  };

  const fetchData = async (mode: string) => {
    let response: any;
    switch (mode) {
      case "read":
        response = await fetch("/api/read");
        const readData = await response.json();
        if (readData.success) setPeoples(readData.data);
        break;
      case "nameasc":
        response = await fetch("/api/read?filter=asc");
        const nameascData = await response.json();
        if (nameascData.success) setPeoples(nameascData.data);
        break;
      case "namedesc":
        response = await fetch("/api/read?filter=dsc");
        const namedescData = await response.json();
        if (namedescData.success) setPeoples(namedescData.data);
        break;
      case "young":
        response = await fetch("/api/read?filter=young");
        const youngData = await response.json();
        if (youngData.success) setPeoples(youngData.data);
        break;
      default:
        break;
    }
  };
  const addNewPeople = async () => {
    try {
      const peopleApiResponse = await fetch("https://randomuser.me/api", {
        method: "GET",
      });
      const { results } = await peopleApiResponse.json();
      let response = await fetch("/api/create", {
        method: "POST",
        body: JSON.stringify(results[0]),
      });

      const { success } = await response.json();
      if (success) {
        alert("New data added !");
        await fetchData('read');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePeople = async (id: any) => {
    try {
      if (!selectPeoples.length)
        return alert("Select Card by clicking on it for delete !");
      const response = await fetch("/api/delete", {
        method: "POST",
        body: JSON.stringify({ ids: selectPeoples }),
      });

      const { success } = await response.json();
      if (success) {
        setSelectedPeoples([]);
        await fetchData('read');
        alert("Data Deleted !");
      }
    } catch (error) {
      console.log(error);
    }
  };


  

  useEffect(() => {
    fetchData(nameFilter === "asc" ? "nameasc" : "namedesc");
  }, [nameFilter]);

  useEffect(() => {
    fetchData("read");
  }, []);

  return (
    <main className="h-[100dvh] w-full">
      <div className="flex justify-between items-end p-10">
        <div className="px-5 flex gap-x-5">
          <button onClick={(()=> fetchData('young'))} className="border-[2px] border-gray-500  px-3 py-2 text-gray-500 rounded-lg">Filter Youngest</button>
          <button
            onClick={nameFilterHandler}
            className="border-[2px] border-gray-500  px-3 py-2 text-gray-500 rounded-lg"
          >
            Filter Name In{" "}
            {nameFilter === "asc" ? "Asending Order" : "Desending Order"}
          </button>
          <button
            onClick={() => {
              fetchData("read");
            }}
            className="border-[2px] border-red-500  px-3 py-2 text-gray-500 rounded-lg"
          >
            Clear filters
          </button>
        </div>
        <div className="flex gap-x-10">
          <button
            onClick={deletePeople}
            className={`${
              selectPeoples.length === 0 ? "bg-gray-500" : "bg-red-500"
            } text-white px-3 py-2 rounded-md`}
          >
            Delete all
          </button>
          <button
            onClick={addNewPeople}
            className="bg-emerald-800 text-white px-3 py-2 rounded-md"
          >
            Add New <span className="text-xl">+</span>
          </button>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-y-5">
          {peoples.map((people: any, key: number) => (
            <UserCard key={key} people={people} />
          ))}
        </div>
      </div>
    </main>
  );
}
