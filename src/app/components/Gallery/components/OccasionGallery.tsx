import React, { useState, useEffect, FC, useCallback, useRef } from "react";
import Image from "next/image";
import Shimmer from "./Shimmer";
// import { useScrollBlock } from "@/utils/useScrollBlock";
import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { LightGallery as ILightGallery } from "lightgallery/lightgallery";
interface image {
  kind: string;
  mimeType: string;
  id: string;
  name: string;
}

const OccasionGallery = ({
  name,
  folderID,
}: {
  name: string;
  folderID: string | null;
}) => {
  const [imageData, setImageData] = useState<image[] | null>(null);
  const [url, setUrl] = useState(
    `https://www.googleapis.com/drive/v3/files?q='${folderID}'+in+parents&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`
  );
  const [error, setError] = useState<{
    code: string | null;
    message: string | null;
  }>({ code: null, message: null });
  const [selectedItem, setSelectedItem] = useState<null | {
    id: string;
    type: string;
    name: string;
  }>(null);

  // const [blockScroll, allowScroll] = useScrollBlock();

  const fetchImages = async () => {
    try {
      const data = await fetch(url);
      const json = await data.json();
      if (json.error) {
        const { code, message } = json.error;
        setError({
          code: code,
          message: message,
        });
      }
      if (json) {
        setImageData((prevImageData) => {
          const newImages = json?.files?.filter((newImage: image) => {
            return (
              !prevImageData ||
              !prevImageData.some((prevImage) => prevImage.id === newImage.id)
            );
          });
          return prevImageData ? [...prevImageData, ...newImages] : newImages;
        });
      }
      if (json.nextPageToken) {
        setUrl(url + `&pageToken=${json.nextPageToken}`);
      }
    } catch (e) {
      console.error("Error fetching images: ", error);
      setError({
        code: error.code || "UNKNOWN",
        message:
          error.message || "Unknown error occurred while fetching images",
      });
    }
  };
  useEffect(() => {
    fetchImages();
  }, [url]);
  // const handleItemClick = (videoId: string, type: string, name: string) => {
  //   setSelectedItem({ id: videoId, type: type, name: name });
  //   blockScroll();
  // };

  // const handleCloseModal = () => {
  //   setSelectedItem(null);
  //   allowScroll();
  // };

  // const handleDownload = async (imageUrl: string, imageName: string) => {
  //   try {
  //     const response = await fetch(imageUrl);
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.setAttribute("download", imageName);
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.error("Error downloading image:", error);
  //   }
  // };
  const lightGalleryRef = useRef(null);
  const onInit = useCallback((detail: any) => {}, []);

  const dynamicEl = [
    {
      src: "https://via.placeholder.com/1400x800.png?text=Image+1",
      responsive:
        "https://via.placeholder.com/800x480.png?text=Image+1 800w, https://via.placeholder.com/480x240.png?text=Image+1 480w",
      thumb: "https://via.placeholder.com/240x120.png?text=Image+1",
      subHtml: `<div class="lightGallery-captions"> <h4>Placeholder Image 1</h4> <p>Published on January 1, 2023</p> </div>`,
    },
    {
      src: "https://via.placeholder.com/1400x800.png?text=Image+2",
      responsive:
        "https://via.placeholder.com/800x480.png?text=Image+2 800w, https://via.placeholder.com/480x240.png?text=Image+2 480w",
      thumb: "https://via.placeholder.com/240x120.png?text=Image+2",
      subHtml: `<div class="lightGallery-captions"> <h4>Placeholder Image 2</h4><p>Published on January 2, 2023</p></div>`,
    },
    // Add more placeholder images as needed
  ];

  return !error.code ? (
    imageData ? (
      <div className="pt-36 h-full flex flex-col">
        <div className="text-3xl font-medium">
          Our Memories on{" "}
          <span className="font-semibold">{name ? name.toString() : null}</span>
        </div>
        <div className="w-full my-8 columns-1 md:columns-2 xl:columns-3 gap-8 overflow-y-scroll">
          {/* <LightGallery
            onInit={onInit}
            speed={500}
            mode="lg-fade"
            allowMediaOverlap={true}
            plugins={[lgThumbnail, lgZoom]}
          >
            {imageData.map((singleItem: image, index: number) => {
              const src = `https://lh3.googleusercontent.com/d/${singleItem.id}?w=200&q=50`;
              // const isVideo = singleItem.mimeType.includes("video");
              return (
                <a href={src}>
                  <Image
                    loader={() => src}
                    src={src}
                    height={400}
                    width={400}
                    alt={`${singleItem.name}`}
                    key={singleItem.name}
                    className="my-3 cursor-pointer"
                  />
                </a>
              );
            })}
          </LightGallery> */}

          <LightGallery
            onInit={onInit}
            speed={500}
            mode="lg-fade"
            allowMediaOverlap={true}
            plugins={[lgThumbnail, lgZoom]}
          >
            {imageData.map((singleItem: image, index: number) => {
              const src = `https://lh3.googleusercontent.com/d/${singleItem.id}?w=200&q=50`;
              const isVideo = singleItem.mimeType.includes("video");
              return !isVideo ? (
                <a href={src}>
                  <Image
                    loader={() => src}
                    src={src}
                    height={400}
                    width={400}
                    alt={`${singleItem.name}`}
                    key={singleItem.name}
                    className="my-3 cursor-pointer"
                  />
                </a>
              ) : (
                <a
                  data-lg-size="1280-720"
                  data-video={
                    '{"source": [{"src":"' +
                    `https://drive.google.com/file/d/${singleItem.id}/preview` +
                    '", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}'
                  }
                  data-poster={`https://lh3.googleusercontent.com/d/${singleItem.id}?w=200&q=50`}
                  // data-sub-html="<h4>'Peck Pocketed' by Kevin Herron | Disney Favorite</h4>"
                >
                  <img
                    width={300}
                    height={100}
                    className="img-responsive"
                    src={`https://lh3.googleusercontent.com/d/${singleItem.id}?w=200&q=50`}
                    alt="video-thumbnail"
                  />
                </a>
              );
            })}
          </LightGallery>
        </div>
        {/* {selectedItem && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-2 rounded-lg relative flex flex-col gap-3 max-w-screen-md mx-auto lg:h-[90%]">
              <div className="w-full flex justify-between items-center mb-1 px-2">
                <div className="text-lg font-medium px-2 pt-2">
                  {selectedItem.name}
                </div>
                <Image
                  src={"/cross.png"}
                  className="top-0 right-0 text-gray-600 cursor-pointer"
                  width={18}
                  height={18}
                  onClick={handleCloseModal}
                  alt="close"
                />
              </div>
              <div className="lg:h-[95%]">
                {selectedItem.type.includes("video") ? (
                  <div className="h-[80vh] pb-10">
                    <iframe
                      src={`https://drive.google.com/file/d/${selectedItem.id}/preview`}
                      className="h-full object-contain"
                      height={screen.width > 1000 ? 420 : 350}
                      width={screen.width > 1000 ? 420 : 350}
                      allow="autoplay"
                    />
                  </div>
                ) : (
                  <div className="lg:h-[98%] pb-10">
                    <Image
                      loader={() =>
                        `https://lh3.googleusercontent.com/d/${selectedItem.id}?q=80`
                      }
                      src={`https://lh3.googleusercontent.com/d/${selectedItem.id}?q=80`}
                      className="object-contain h-full w-auto"
                      unoptimized={true}
                      height={screen.width > 1000 ? 420 : 350}
                      width={screen.width > 1000 ? 420 : 350}
                      alt={selectedItem.name}
                    />
                  </div>
                )}
                <div className="w-full flex justify-end absolute bottom-1 md:bottom-2 px-4 md:px-8">
                  <button
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onClick={() => {
                      selectedItem.type.includes("video")
                        ? handleDownload(
                            `https://drive.google.com/file/d/${selectedItem.id}/preview`,
                            selectedItem.name
                          )
                        : handleDownload(
                            `https://lh3.googleusercontent.com/d/${selectedItem.id}?q=80`,
                            selectedItem.name
                          );
                    }}
                  >
                    <Image
                      src={"/download-logo.png"}
                      width={20}
                      height={20}
                      alt="download-logo"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )} */}
        {error.code && (
          <div className="text-red-500">Error: Failed to load images.</div>
        )}
      </div>
    ) : (
      <Shimmer />
    )
  ) : (
    <div className="flex flex-col items-center justify-center mt-48 h-full w-full">
      <div className="text-red-500 text-4xl font-bold">{error.code}</div>
      <div className="text-red-500 text-lg">{error.message}</div>
    </div>
  );
};

export default OccasionGallery;

/**
 * 
 *  <a
        data-lg-size="1280-720"
        data-video='{"source": [{"src":"/videos/video1.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}'
        data-poster="/images/demo/html5-video-poster.jpg"
        data-sub-html="<h4>'Peck Pocketed' by Kevin Herron | Disney Favorite</h4>"
    >
        <img
            width="300"
            height="100"
            class="img-responsive"
            src="/images/demo/html5-video-poster.jpg"
        />
    </a>
 */
