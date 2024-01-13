"use client";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef } from "react";
const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initialize = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });
      const { Map } = await loader.importLibrary("maps");
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;
      const pos = {
        lat: 22.6813214390088,
        lng: 75.87922607893798,
      };
      const opt: google.maps.MapOptions = {
        center: pos,
        zoom: 15,
        mapId: "GDSC_LOCATION",
      };
      const map = new Map(mapRef.current as HTMLDivElement, opt);
      const marker = new Marker({
        map: map,
        position: pos,
      });
    };
    initialize();
  }, []);

  return <div style={{ height: "400px" }} ref={mapRef}></div>;
};

export default Map;

// "use client"
// import { useEffect, useRef, useMemo } from "react";
// import { Loader } from "@googlemaps/js-api-loader";
// function Map({ address }) {
//     const mapRef = useRef(null);
//     // const geocoder = useMemo(() => new google.maps.Geocoder(), []);
//     useEffect(() => {
//         const loader = new Loader({
//             apiKey: 'YOUR_API_KEY',
//             version: 'weekly',
//             libraries: ['places'],
//         });

//     }, [address, geocoder]);
//     return <div style={{ height: "400px" }} ref={mapRef} />;
// }
// export default Map;
