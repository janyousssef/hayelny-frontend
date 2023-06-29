import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const Result = () => {
  const [data , setData] = useState(null)
  const {id} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/images/${id}/diagnosis`);
      const data = await response.json();
      setData(data);
    };
    
    fetchData();
  }, []);
  return (
    <div className="bg-primary h-screen">
      <div className="flex justify-center items-center bg-primary  py-36">
        <div className="bg-white border-gray-400 border-2 rounded-xl py-36 pl-16 w-[981px] ">
          <h2 className="text-center my-10 text-4xl font-semibold text-blue-300">
            Results
          </h2>
          <div className="flex gap-10 items-center">
            <div className="flex flex-col justify-center items-center gap-4 w-[432px]  bg-blue-300 rounded-xl p-10">
              <img src={data?._links?.image?.href} alt="result image" />
            </div>
            <div className="bg-white shadow-xl rounded-2xl h-full p-20 text-blue-400 font-semibold text-2xl">
              <p className="mb-10 text-blue-600">
                {/* You have{" "} */}
                <span
                  className={
                    data?.judgement === "POSITIVE"
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  {data?.judgement === "POSITIVE"?"You have ":"You don't have "}{data?.disease.toLowerCase()}
                </span>
                .{" "}
                {data?.judgement === "POSITIVE"
                  ? "You should consult a doctor immediately."
                  : "There is no need to worry, but you should still follow up with a doctor."}
              </p>
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-4">
                  <p>confidence : </p>
                  <p className="text-black">{data?.confidence}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p>diagnosisId : </p>
                  <p className="text-black">{data?.diagnosisId}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p>diagnosisStatus : </p>
                  <p className="text-black">{data?.diagnosisStatus}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p>disease : </p>
                  <p className="text-black">{data?.disease}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p>judgement : </p>
                  <p className="text-black">{data?.judgement}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result