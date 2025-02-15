import { useAnimation } from "motion/react";
import { motion } from "motion/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckBoxWithLabel } from "@/components/ui/checkbox";
import { Info } from "lucide-react";
import { ButtonHTMLAttributes, useState } from "react";

export function DownvoteButton({
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const controls = useAnimation();
  return (
    <button
      className="w-12 h-12 flex items-center justify-center rounded-[14px] border border-borderDestructiveSecondary bg-white hover:bg-[#FEFBFC] transition-all"
      onMouseEnter={(e) => {
        controls.start("animate");
      }}
      onMouseLeave={(e) => {
        controls.start("normal");
      }}
      onClick={onClick}
      {...props}
    >
      <motion.svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={{
          normal: {
            translateX: "0px",
            translateY: "0px",
            rotate: "0deg",
          },
          animate: {
            translateX: "-1px",
            translateY: "2px",
            rotate: "-8deg",
          },
        }}
        animate={controls}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        <path
          d="M6.0401 11.0833L3.43525 11.0833C2.57972 11.0833 1.81394 10.505 1.72336 9.65429C1.6859 9.30244 1.66669 8.94514 1.66669 8.58334C1.66669 6.21033 2.49325 4.03036 3.87418 2.31566C4.19719 1.91458 4.69653 1.70834 5.2115 1.70834L8.55815 1.70834C8.9612 1.70834 9.36163 1.77332 9.744 1.90078L12.3394 2.76591C12.7217 2.89336 13.1222 2.95834 13.5252 2.95834L14.6038 2.95834M6.0401 11.0833C6.55534 11.0833 6.86582 11.6866 6.6445 12.1519C6.25799 12.9645 6.04169 13.8737 6.04169 14.8333C6.04169 15.8689 6.88115 16.7083 7.91669 16.7083C8.26186 16.7083 8.54169 16.4285 8.54169 16.0833V15.5555C8.54169 15.0785 8.63272 14.6058 8.8099 14.1628C9.06311 13.5298 9.58529 13.0537 10.1871 12.7332C11.1153 12.2388 11.9273 11.5551 12.5716 10.7336C12.9863 10.2049 13.5926 9.83334 14.2645 9.83334H14.5843M6.0401 11.0833H7.87502M14.6038 2.95834C14.6126 3.00001 14.6267 3.04136 14.6465 3.08151C15.1396 4.08091 15.4167 5.20602 15.4167 6.39584C15.4167 7.6348 15.1163 8.80359 14.5843 9.83334M14.6038 2.95834C14.5396 2.65446 14.7563 2.33334 15.0828 2.33334H15.8393C16.5799 2.33334 17.2668 2.76503 17.4829 3.47338C17.765 4.39782 17.9167 5.37911 17.9167 6.39584C17.9167 7.68956 17.671 8.9259 17.2238 10.0607C16.9696 10.7058 16.3189 11.0833 15.6256 11.0833H14.7483C14.355 11.0833 14.1273 10.6201 14.3314 10.284C14.4207 10.137 14.5051 9.98671 14.5843 9.83334"
          stroke="#E11D48"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </button>
  );
}

export function DislikePopover() {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <DownvoteButton />
      </PopoverTrigger>
      <PopoverContent
        className=" w-80 rounded-2xl border border-borderNeutralPrimary text-sm bg-[#FFFFFFD9] p-4 flex flex-col gap-4 tracking-tight"
        style={{
          boxShadow: "0px 24px 48px -12px #1F29371F",
          backdropFilter: "blur(64px)",
        }}
      >
        <CheckBoxWithLabel>
          I&apos;m just not interested in this job
        </CheckBoxWithLabel>

        <CheckBoxWithLabel>
          Doesn&apos;t match my skills or preferences
        </CheckBoxWithLabel>

        <CheckBoxWithLabel>Vague project description</CheckBoxWithLabel>

        <CheckBoxWithLabel defaultCheck={true}>
          Unrealistic budget
        </CheckBoxWithLabel>

        <CheckBoxWithLabel>Overly lengthy requirements</CheckBoxWithLabel>

        <CheckBoxWithLabel defaultCheck={true}>
          Unprofessional tone
        </CheckBoxWithLabel>

        <CheckBoxWithLabel>Requesting unpaid test tasks</CheckBoxWithLabel>

        <button
          onClick={() => setOpen(false)}
          className=" w-full h-8 rounded-[10px] font-medium py-1 px-3 bg-accentBlue text-white hover:bg-[#2C36F0] transition-all duration-200"
          style={{
            boxShadow:
              "0px 8px 16px -8px #3040FF33, 0px 13px 27px -5px #3040FF26",
          }}
        >
          Send report
        </button>
        <p className=" text-neutralTertiary text-xs flex items-start gap-1 self-center">
          <span className=" inline">
            <Info className=" w-3 h-3 text-inherit inline" />
          </span>
          <span>
            {" "}
            Your report is private, the client won&apos;t be notified.
            We&apos;ll use your feedback to improve job matching.
          </span>
        </p>
      </PopoverContent>
    </Popover>
  );
}
