import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { slide } from "./animations";
import { useAppState } from "@/utils/appStateContext";
import { revelAnim } from "./animations";
interface ItemProps {
  data: {
    href: Url;
    title: String;
    index: number;
  };
}
// interface ItemProps {
//   href: String;
//   title: String;
// }
const Item: React.FC<ItemProps> = ({ data }) => {
  const { isOpen, setIsOpen } = useAppState();
  return (
    <motion.div
      custom={data.index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      // custom={data.index}
      // variants={revelAnim}
      // initial="initial"
      // animate={isOpen ? "open" : "closed"}
      // className=""
    >
      <Link
        href={data.href}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {data.title}
      </Link>
    </motion.div>
  );
};

export default Item;
