import React from "react";
import Image from "next/image";
interface item {
  kind: string;
  mimeType: string;
  id: string;
  name: string;
}
const Modal = ({
  item,
  closeModal,
}: {
  item: item;
  closeModal: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg relative flex flex-col gap-3">
        <div className="w-full flex justify-between items-center mb-1 px-2">
          <div className="text-lg font-medium">{item.name}</div>
          <Image
            src={"/cross.png"}
            className="top-0 right-0 text-gray-600 cursor-pointer"
            width={18}
            height={18}
            onClick={closeModal}
            alt="close"
          />
        </div>
        <div className="">
          <iframe
            src={`https://drive.google.com/file/d/${item.id}/preview`}
            width="640"
            height="480"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
