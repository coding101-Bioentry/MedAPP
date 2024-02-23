import React, { useState, useEffect } from "react";
import axios from "axios";

import Clock from "../components/Clock";
import PrescriptionCard from "../components/PrescriptionCard";

function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('/record').then(response => {
      setData(response.data);
    });
  }, []);


  return (
    <div className="flex flex-col items-center gap-y-8">
      <p className="font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">即時用藥管理</p>
      <Clock />
      <p className="sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl border rounded-full p-2 pr-24 pl-24">心臟病處方</p>
      {data && data.map((time) => (
        <PrescriptionCard key={time._id} time={time.time} origin_time={time.origin_time} medication_info={time.medication_info} />
      ))}
    </div>
  );
}
export default Home;
