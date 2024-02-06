import React, { useEffect, useState } from "react";
import MiddleCard from "./MiddleCard";
import NormalCard from "./NormalCard";
import { data } from "./constants";
import DomainDesc from "./DomainDesc";
const TechStack = () => {
  const [w, setW] = useState(0);
  useEffect(() => {
    setW(window.innerWidth);
  }, [w]);
  return (
    <div id="domains">
      {w >= 1280 ? (
        // <div
        //   className="flex flex-col gap-16 pt-24"
        //   style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        // >
        //   <div className="flex gap-6 justify-between items-center">
        //     {data.slice(0, 3).map((item, index) => {
        //       return (
        //         <NormalCard
        //           name={item.names}
        //           stack={item.stack}
        //           custom={index}
        //           key={index}
        //         />
        //       );
        //     })}
        //   </div>
        //   <div className="flex flex-row gap-6 justify-between items-center">
        //     {data.slice(3, 4).map((item, index) => {
        //       return (
        //         <NormalCard
        //           name={item.names}
        //           stack={item.stack}
        //           custom={index}
        //           key={index}
        //         />
        //       );
        //     })}
        //     <MiddleCard />
        //     {data.slice(4, 5).map((item, index) => {
        //       return (
        //         <NormalCard
        //           name={item.names}
        //           stack={item.stack}
        //           custom={index}
        //           key={index}
        //         />
        //       );
        //     })}
        //   </div>
        //   <div className="flex flex-row gap-6 justify-between items-center">
        //     {data.slice(5, 9).map((item, index) => {
        //       return (
        //         <NormalCard
        //           name={item.names}
        //           stack={item.stack}
        //           custom={index}
        //           key={index}
        //         />
        //       );
        //     })}
        //   </div>
        // </div>
        <div
          className="flex flex-col gap-16 pt-24 w-full"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <div className="flex flex-col gap-6 justify-between items-baseline">
            <div className="w-full flex items-center justify-center">
              {/* <MiddleCard /> */}
              <DomainDesc />
            </div>
            <div className="flex flex-row flex-wrap gap-12 justify-center w-full">
              {data.slice(0, 9).map((item, index) => {
                return (
                  <div className="">
                    <NormalCard
                      name={item.names}
                      stack={item.stack}
                      custom={index}
                      color={item.color}
                      desc={item.desc}
                      key={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className="flex flex-row gap-6 justify-between items-center">
            {data.slice(5, 9).map((item, index) => {
              return (
                <NormalCard
                  name={item.names}
                  stack={item.stack}
                  custom={index}
                  key={index}
                />
              );
            })}
          </div> */}
        </div>
      ) : (
        <div
          className="flex flex-col gap-16 pt-24 lg:justify-center lg:items-center"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <MiddleCard />
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 justify-between items-center">
            {data.map((item, index) => {
              return (
                <NormalCard
                  name={item.names}
                  stack={item.stack}
                  color={item.color}
                  custom={index}
                  desc={item.desc}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechStack;
