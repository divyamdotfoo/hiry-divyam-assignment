"use client";

import {
  BriefcaseBusiness,
  ChevronsUpDown,
  Clipboard,
  Dot,
  House,
  Info,
  LucideIcon,
  MessageCircleMore,
  Plus,
  Search,
  Settings,
  SidebarClose,
  SidebarOpen,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import { FadedSeparator } from "./ui/separator";
import { Ref, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";
export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [wasClosed, setWasClosed] = useState(false);
  const controls = useAnimation();

  const closeSidebar = () => {
    setIsOpen(false);
    setWasClosed(true);
    controls.start("close");
  };

  const openSidebar = () => {
    setIsOpen(true);
    controls.start("open");
  };

  return (
    <motion.div
      variants={{
        open: {
          width: "240px",
        },
        close: {
          width: "74px",
        },
      }}
      initial={false}
      animate={controls}
      transition={{ type: "spring", stiffness: 250, damping: 25 }}
      className="h-dvh bg-gray30 w-60 shrink-0 border-r border-borderNeutralSecondary sticky top-0 hidden xl:block"
    >
      <div className=" relative h-full">
        {/* sidebar logo */}
        <div className=" pl-5 py-4 pr-2 flex w-full items-center justify-between border-b border-borderNeutralSecondary">
          <Image
            src={"/logo.svg"}
            width={150}
            height={50}
            alt="hiry logo"
            className=" h-8 w-auto"
          />
          {isOpen && (
            <motion.button
              onClick={closeSidebar}
              className=" w-8 h-8 flex items-center justify-center bg-inherit hover:bg-gray-50 transition-all p-1 rounded-md"
            >
              <SidebarClose className="text-neutralSecondary w-4 h-4" />
            </motion.button>
          )}
        </div>

        {/* sidebar content */}

        <div className=" px-3 pt-3 pb-4">
          {/* profile name */}
          <div className=" flex items-center justify-between relative w-full p-2 mb-4 h-14">
            <div className=" flex items-center gap-2">
              <div className=" absolute w-10 h-8 left-2">
                <div className="relative h-full w-full">
                  <div className=" w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={"/avatar.png"}
                      width={200}
                      height={200}
                      alt="avatar"
                      className="rounded-full h-full w-full object-cover"
                    />
                  </div>
                  <div className=" absolute flex items-center justify-center rounded-full w-5 h-5 p-[1px] z-10 bottom-0 right-0 bg-white">
                    <Image
                      src={"/company.png"}
                      width={100}
                      height={100}
                      alt="company"
                      className=" rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <motion.div
                  layout
                  initial={
                    wasClosed ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                    delay: 0.15,
                  }}
                  className="pl-12"
                >
                  <p className=" text-sm font-medium text-neutralPrimary">
                    Alex Johnson
                  </p>
                  <p className=" text-xs text-neutralTertiary">DevStudio</p>
                </motion.div>
              )}
            </div>

            {isOpen && (
              <button className=" w-8 h-8 flex items-center justify-center bg-inherit hover:bg-gray-50 transition-all p-[10px] rounded-md">
                <ChevronsUpDown className=" text-neutralSecondary w-4 h-4" />
              </button>
            )}
          </div>

          <SidebarItems isOpen={isOpen} wasClosed={wasClosed} />
          {!isOpen && (
            <motion.button
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
                delay: 0.15,
              }}
              className=" h-10 w-full flex items-center justify-start bg-inherit hover:bg-gray-100 transition-all pr-[10px] pl-4 py-[10px rounded-md my-2"
              onClick={openSidebar}
            >
              <SidebarOpen className="text-neutralSecondary w-4 h-4" />
            </motion.button>
          )}
        </div>
        <motion.div
          layout
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 25,
            delay: 0.15,
          }}
          className=" absolute bottom-4 left-3 p-3 flex items-center gap-3 cursor-pointer"
        >
          <Info className=" w-4 h-4 text-neutralSecondary" />
          <p className=" text-sm text-neutralSecondary">Support</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function SidebarItems({
  isOpen,
  wasClosed,
}: {
  isOpen: boolean;
  wasClosed: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const changeIndex = (z: number | null) => setActiveIndex(z);

  useEffect(() => {
    const container = containerRef.current;
    const bgEl = bgRef.current;

    if (!container || !bgEl || activeIndex === null) return;

    const activeEl = itemRefs.current[activeIndex];
    if (!activeEl) return;

    const { offsetHeight, offsetTop } = activeEl;
    const containerHeight = container.offsetHeight;

    const clipTop = offsetTop;
    const clipBottom = offsetTop + offsetHeight;

    bgEl.style.clipPath = `inset(${Number(
      (clipTop / containerHeight) * 100
    ).toFixed()}% 0 ${Number(
      100 - (clipBottom / containerHeight) * 100
    ).toFixed()}% 0 round 6px)`;
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-start w-full h-fit relative"
    >
      {/* moving container */}
      <div
        ref={bgRef}
        style={{
          clipPath: "inset(0 0 88% 0 round 6px)",
          transition: "clip-path 0.25s ease",
        }}
        className=" w-full bg-gray-100 absolute -z-20 inset-0 rounded-md transition-none"
      ></div>

      <SidebarItem
        wasClosed={wasClosed}
        isOpen={isOpen}
        idx={0}
        changeIndex={changeIndex}
        ref={(el) => (itemRefs.current[0] = el)}
        title="Dashboard"
        Icon={House}
      />

      <div className=" p-[10px] w-full">
        <FadedSeparator />
      </div>
      <SidebarItem
        wasClosed={wasClosed}
        isOpen={isOpen}
        idx={1}
        changeIndex={changeIndex}
        ref={(el) => (itemRefs.current[1] = el)}
        Icon={MessageCircleMore}
        title="Messages"
      >
        <Dot className=" absolute w-7 h-7 -left-2 top-1/2 -translate-y-1/2 text-[#F43F5F]" />
      </SidebarItem>

      <SidebarItem
        wasClosed={wasClosed}
        isOpen={isOpen}
        idx={2}
        changeIndex={changeIndex}
        ref={(el) => (itemRefs.current[2] = el)}
        title="Discover Freelancers"
        Icon={Search}
      />

      <SidebarItem
        wasClosed={wasClosed}
        isOpen={isOpen}
        idx={3}
        changeIndex={changeIndex}
        ref={(el) => (itemRefs.current[3] = el)}
        title="Jobs"
        Icon={Clipboard}
      >
        {/* <div className=" flex items-center gap-3"> */}
        {/* </div> */}
        <span className=" w-6 h-6 flex items-center justify-center ml-auto">
          <Plus className=" text-neutralSecondary w-4 h-4" />
        </span>
      </SidebarItem>

      <SidebarItem
        wasClosed={wasClosed}
        isOpen={isOpen}
        idx={4}
        changeIndex={changeIndex}
        ref={(el) => (itemRefs.current[4] = el)}
        title="Projects"
        Icon={BriefcaseBusiness}
      >
        <span className=" w-6 h-6 flex items-center justify-center ml-auto">
          <Plus className=" text-neutralSecondary w-4 h-4" />
        </span>
      </SidebarItem>

      <div className=" p-[10px] w-full">
        <FadedSeparator />
      </div>
      <SidebarItem
        wasClosed={wasClosed}
        isOpen={isOpen}
        idx={5}
        changeIndex={changeIndex}
        ref={(el) => (itemRefs.current[5] = el)}
        title="Payments"
        Icon={WalletCards}
      />

      <SidebarItem
        wasClosed={wasClosed}
        isOpen={isOpen}
        idx={6}
        changeIndex={changeIndex}
        ref={(el) => (itemRefs.current[6] = el)}
        title="Settings"
        Icon={Settings}
      />
    </div>
  );
}

function SidebarItem({
  children,
  ref,
  className,
  changeIndex,
  idx,
  Icon,
  title,
  isOpen,
  wasClosed,
}: {
  changeIndex: (z: number | null) => void;
  idx: number;
  Icon: LucideIcon;
  title: string;
  isOpen: boolean;
  wasClosed: boolean;
  ref?: Ref<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.button
      onMouseEnter={() => changeIndex(idx)}
      onMouseLeave={() => changeIndex(null)}
      ref={ref}
      className={cn(
        "flex items-center gap-3 cursor-pointer h-10 w-full pr-[10px] pl-4 py-[10px] relative",
        className
      )}
    >
      <Icon className="w-4 absolute left-4 h-4 text-neutralSecondary" />

      {isOpen && (
        <>
          <motion.p
            layout="position"
            initial={wasClosed ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 25,
              delay: 0.15,
            }}
            className="text-sm pl-7 text-neutralSecondary"
          >
            {title}
          </motion.p>
          {children}
        </>
      )}
    </motion.button>
  );
}
