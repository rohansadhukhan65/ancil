import { GlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const UserCard = ({ people, delpep }: any) => {
  const { selectPeoples, setSelectedPeoples }: any = useContext(GlobalContext);
  const [isSelected, setIsSelected] = useState(false);
  const cardClickHandler = () => {
    const isAlradySelected = selectPeoples.find((v:any) => v === people._id);
    if (isAlradySelected) {
        const newSelection = selectPeoples.filter((v)=> v !== people._id)
        setSelectedPeoples(newSelection);
        setIsSelected(false);
    } else {
      setSelectedPeoples([...selectPeoples, people._id]);
      setIsSelected(true);
    }
  };

  useEffect(()=>{
    const isAlradySelected = selectPeoples.find((v:any) => v === people._id);
    if(!isAlradySelected){
        setIsSelected(false)
    }
  },[selectPeoples])
  return (
    <div
      onClick={cardClickHandler}
      className={`mx-5 p-3 border flex justify-between w-[23rem] shadow-md rounded-md ${
        isSelected ? "border-blue-500" : ""
      }`}
    >
      <div>
        <Image
          src={people.picture}
          height={200}
          width={200}
          className="h-20 w-20 rounded-lg"
          alt=""
        />
      </div>
      <div>
        <p> Name : {people.name}</p>
        <p>Age : {people.age}</p>
      </div>
      <div className="flex flex-col justify-center">
        <Link href={`/edit/${people._id}`} className="bg-cyan-500 text-white px-3 py-1 border rounded-md">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
