import React, { FC } from "react";
import { useFetch } from "./useFetch";


type DogImageType = { message: string; status: string };



  export const DogImage: FC<DogImageType> = () => {
    const data = useFetch<DogImageType>({
      url: "https://dog.ceo/api/breed/beagle/images/random"
    });
  
  
  return <>{data ? <img src={data.message} alt="dog"></img> : <div>Loading</div>}</>;
};


export default DogImage