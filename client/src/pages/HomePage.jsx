import React, { useState, useEffect } from "react";
import axios from "axios";

import Clock from "../components/Clock";
import PrescriptionCard from "../components/PrescriptionCard";
import TimesCard from "../components/TimesCard";

function Home() {
  const [data, setData] = useState(null);
  const [click, setClick] = useState(true);
  useEffect(() => {
    axios.get('/record').then(response => {
      setData(response.data);
    });
  }, []);

  const handletime = () => {
    setClick(true);
  }

  const handlepres = () => {
    setClick(false);
  }


  return (
    <div className="flex flex-col items-center gap-y-8">
      <p className="font-bold sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">即時用藥管理</p>
      <Clock />
      <div className="flex flex-row items-center gap-x-8">
        <p className="cursor-pointer sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl border rounded-full p-2 pr-12 pl-12" onClick={handletime}>用藥狀況</p>
        <p className="cursor-pointer sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl border rounded-full p-2 pr-12 pl-12" onClick={handlepres}>用藥處方</p>
      </div>
      {click ? (
        data && data.map((time) => (
          <PrescriptionCard key={time._id} time={time.time} origin_time={time.origin_time} medication_info={time.medication_info} />
        ))
      ) : (
        <>
          <TimesCard time={"08:00"} />
          <TimesCard time={"13:00"} />
          <TimesCard time={"18:00"} />
          <TimesCard time={"23:00"} />
        </>
      )}
    </div>
  );
}
export default Home;
