import Image from "next/image";
import {
  ArrowLeft,
  Bell,
  Bookmark,
  BriefcaseBusiness,
  ChevronsUpDown,
  Clock3,
  Dot,
  House,
  Info,
  Languages,
  MapPin,
  MessageCircleMore,
  Plus,
  Search,
  Settings,
  SidebarClose,
  Star,
  WalletCards,
} from "lucide-react";
import Avatar from "../../public/avatar.png";
import { Midlevel, Sparkles, ThumbsDown } from "../components/icons";
import { cn } from "@/lib/utils";
export default function Page() {
  return (
    <div className=" flex items-stretch w-full relative">
      {/* sidebar */}
      <div className="h-dvh bg-gray30 w-60 shrink-0 border-r border-borderNeutralSecondary sticky top-0">
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
            <div className=" w-8 h-8 flex items-center justify-center">
              <SidebarClose className="text-neutralSecondary w-4 h-4" />
            </div>
          </div>

          {/* sidebar content */}

          <div className=" px-3 pt-3 pb-4">
            {/* profile name */}
            <div className=" flex items-center justify-between p-2 mb-4">
              <div className=" flex items-center gap-2">
                <div className="relative w-10 h-8">
                  <div className=" w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={Avatar}
                      alt="avatar"
                      className="rounded-full h-full w-full object-cover"
                    />
                  </div>
                  <Image
                    src={"/company.png"}
                    width={100}
                    height={100}
                    alt="company"
                    className=" absolute rounded-full w-5 h-5 z-10 bottom-0 right-0"
                  />
                </div>
                <div>
                  <p className=" text-sm font-medium text-neutralPrimary">
                    Alex Johnson
                  </p>
                  <p className=" text-xs text-neutralTertiary">DevStudio</p>
                </div>
              </div>

              <div className=" w-8 h-8 flex items-center justify-center">
                <ChevronsUpDown className=" text-neutralSecondary w-4 h-4" />
              </div>
            </div>

            <div className=" flex flex-col items-start w-full gap-5 p-[10px]">
              <div className=" flex items-center gap-3">
                <House className=" w-4 h-4 text-neutralSecondary" />
                <p className=" text-sm text-neutralSecondary">Dashboard</p>
              </div>
              <FadedSeparator />
              <div className=" flex items-center gap-3">
                <MessageCircleMore className=" w-4 h-4 text-neutralSecondary" />
                <p className=" text-sm text-neutralSecondary">Messages</p>
              </div>
              <div className=" flex items-center gap-3">
                <Search className=" w-4 h-4 text-neutralSecondary" />
                <p className=" text-sm text-neutralSecondary">
                  Discover Freelancers
                </p>
              </div>
              <div className=" flex items-center justify-between w-full">
                <div className=" flex items-center gap-3">
                  <MessageCircleMore className=" w-4 h-4 text-neutralSecondary" />
                  <p className=" text-sm text-neutralSecondary">Messages</p>
                </div>
                <div className=" w-6 h-6 flex items-center justify-center">
                  <Plus className=" text-neutralSecondary w-4 h-4" />
                </div>
              </div>

              <div className=" flex items-center justify-between w-full">
                <div className=" flex items-center gap-3">
                  <MessageCircleMore className=" w-4 h-4 text-neutralSecondary" />
                  <p className=" text-sm text-neutralSecondary">Messages</p>
                </div>
                <div className=" w-6 h-6 flex items-center justify-center">
                  <Plus className=" text-neutralSecondary w-4 h-4" />
                </div>
              </div>

              <FadedSeparator />
              <div className=" flex items-center gap-3">
                <WalletCards className=" w-4 h-4 text-neutralSecondary" />
                <p className=" text-sm text-neutralSecondary">Payments</p>
              </div>
              <div className=" flex items-center gap-3">
                <Settings className=" w-4 h-4 text-neutralSecondary" />
                <p className=" text-sm text-neutralSecondary">Settings</p>
              </div>
            </div>
          </div>
          <div className=" absolute bottom-4 left-3 p-3 flex items-center gap-3">
            <Info className=" w-4 h-4 text-neutralSecondary" />
            <p className=" text-sm text-neutralSecondary">Support</p>
          </div>
        </div>
      </div>

      {/* main content */}

      <div className=" bg-white w-full text-neutralPrimary relative">
        {/* header */}

        <div className=" sticky top-0 bg-white w-full flex items-center justify-between px-8 py-3 border-b border-borderNeutralSecondary">
          <div className=" flex items-center gap-2">
            <div className=" w-8 h-8 flex items-center justify-center">
              <ArrowLeft className=" w-4 h-4 text-neutralSecondary" />
            </div>
            <p className=" font-medium text-xl tracking-tight">Jobs</p>
          </div>

          <div className=" flex items-center gap-0">
            <div className=" w-10 h-10 flex items-center justify-center">
              <MessageCircleMore className=" w-5 h-5 text-neutralSecondary" />
            </div>
            <div className=" w-10 h-10 flex items-center justify-center">
              <Bell className=" w-5 h-5 text-neutralSecondary" />
            </div>
          </div>
        </div>

        {/* jobs */}
        <div className=" px-10 pt-8 pb-20 flex items-stretch gap-5">
          <div className=" basis-2/5 shrink-0 flex flex-col gap-4 items-start">
            {/* Job */}

            <div className=" p-6 border border-borderNeutralPrimary flex flex-col items-start w-full gap-4 rounded-[20px]">
              {/* match indicator */}

              <div className=" bg-accentLime py-1 gap-[6px] px-[10px] rounded-full flex items-center w-fit">
                <Sparkles />
                <p className=" text-accentLimePrimary text-xs tracking-tight">
                  100% match
                </p>
              </div>
              <p className=" font-medium text-2xl tracking-tight">
                Freelance Marketing Consultant Needed for Strategic Audience
                Engagement
              </p>

              {/* tags */}

              <div className=" flex items-center gap-[10px] w-full tracking-tight">
                <p className="text-sm bg-purple100 py-1 px-3 rounded-full text-purple900">
                  $50-100/hr
                </p>
                <div className=" flex items-center px-3 py-1 rounded-full border border-borderNeutralPrimary">
                  <Midlevel />
                  <p className=" text-sm">Mid Level</p>
                </div>
                <p className=" text-sm py-1 px-3 rounded-full border border-borderNeutralPrimary">
                  Marketing Consultant
                </p>
              </div>

              <FadedSeparator fadeBothSides={true} />

              {/* job info */}
              <div className=" flex flex-col items-start gap-2 tracking-tight">
                <div className=" flex items-center gap-1">
                  <div className=" flex items-center gap-2">
                    <Clock3 className=" w-4 h-4 text-neutralTertiary" />
                    <p className=" text-sm">Ongoing</p>
                  </div>
                  <Dot className=" text-neutralDisabled w-5 h-5" />
                  <p className=" text-sm">30h/week</p>
                </div>
                <div className=" flex items-center gap-2">
                  <BriefcaseBusiness className=" w-4 h-4 text-[#17A34A]" />
                  <p className=" text-sm">This job could be contract-to-hire</p>
                </div>
              </div>

              {/* actions */}

              <div className=" flex items-center w-full justify-between">
                <button
                  className=" basis-[70%] h-12 shrink-0 bg-accentBlue text-white tracking-tight font-medium rounded-[14px] py-1 px-5"
                  style={{
                    boxShadow:
                      "0px 8px 16px -8px #3040FF33, 0px 13px 27px -5px #3040FF26",
                  }}
                >
                  Apply now
                </button>
                <button className=" w-12 h-12 flex items-center justify-center rounded-[14px] border border-borderNeutralPrimary">
                  <Bookmark className=" w-5 h-5 text-neutralPrimary" />
                </button>
                <button className=" w-12 h-12 flex items-center justify-center rounded-[14px] border border-borderDestructiveSecondary">
                  <ThumbsDown />
                </button>
              </div>

              <FadedSeparator fadeBothSides={true} />

              <div className=" flex flex-col items-start gap-2 tracking-tight">
                <div className=" flex items-center gap-2">
                  <MapPin className=" w-4 h-4 text-neutralTertiary" />
                  <p className=" text-sm">New York, USA</p>
                </div>
                <div className=" flex items-center gap-2">
                  <Clock3 className=" w-4 h-4 text-neutralTertiary" />
                  <p className=" text-sm">GMT-4</p>
                </div>
                <div className=" flex items-center gap-2">
                  <Languages className=" w-4 h-4 text-neutralTertiary" />
                  <p className=" text-sm">English, Spanish</p>
                </div>
              </div>

              <p className=" text-neutralTertiary text-sm tracking-tight">
                Posted just now
              </p>
            </div>

            <div className=" p-6 w-full rounded-[20px] border border-borderNeutralPrimary flex flex-col items-start gap-4">
              <div className=" flex items-center gap-2">
                <div className=" w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={"/company.png"}
                    width={100}
                    height={100}
                    className=" rounded-full object-cover h-full w-full"
                    alt="company"
                  />
                </div>
                <p className=" text-xl font-medium tracking-tight">DevStudio</p>
              </div>

              <div className=" flex items-center gap-3 text-sm">
                <p className=" py-[6px] px-3 rounded-full border border-borderNeutralPrimary">
                  Healthcare
                </p>
                <p className=" py-[6px] px-3 rounded-full border border-borderNeutralPrimary">
                  E-Commerce
                </p>
                <p className=" py-[6px] px-3 rounded-full border border-borderNeutralPrimary">
                  Media
                </p>
              </div>

              <FadedSeparator fadeBothSides={true} />

              <div className=" flex items-center gap-2 tracking-tight">
                <Star className=" w-4 h-4 text-[#EBB305] fill-[#EBB305]" />
                <p className=" text-sm">
                  <span className=" font-medium">100%</span>
                  <span className=" text-neutralTertiary">
                    of company&apos;s hires recommend them
                  </span>
                </p>
              </div>

              <FadedSeparator fadeBothSides={true} />
              <div className=" flex items-center gap-2 tracking-tight">
                <div className=" w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={"/ceo.jpeg"}
                    width={100}
                    height={100}
                    className=" rounded-full object-cover h-full w-full"
                    alt="company"
                  />
                </div>
                <div>
                  <p className=" font-medium tracking-tight">Joe Brown</p>
                  <p className=" text-neutralTertiary tracking-tight">CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" shrink-0 basis-3/5 pl-6 flex flex-col gap-8">
            <div className=" flex flex-col w-full gap-4">
              <div className=" flex items-center gap-2 pb-4 border-b border-borderNeutralSecondary">
                <p className=" font-medium text-sm w-28">Skills</p>
                <RoundedContainerTag>A/B Testing</RoundedContainerTag>
                <RoundedContainerTag>Account Management</RoundedContainerTag>
              </div>
              <div className=" flex items-center gap-2 pb-4 border-b border-borderNeutralSecondary">
                <p className=" font-medium text-sm w-28">Tools</p>
                <RoundedContainerTag className=" flex items-center gap-2">
                  <Image
                    src={"/shopify.png"}
                    width={50}
                    height={50}
                    className=" w-6 h-6"
                    alt="shopify"
                  />
                  <p>Shopify</p>
                </RoundedContainerTag>
                <RoundedContainerTag className=" flex items-center gap-2">
                  <Image
                    src={"/magento.png"}
                    width={50}
                    height={50}
                    className=" w-6 h-6"
                    alt="magento"
                  />
                  <p>Magento</p>
                </RoundedContainerTag>
                <RoundedContainerTag className=" flex items-center gap-2">
                  <Image
                    src={"/webflow.png"}
                    width={50}
                    height={50}
                    className=" w-6 h-6"
                    alt="webflow"
                  />
                  <p>Webflow</p>
                </RoundedContainerTag>
              </div>
              <div className=" flex items-center gap-2 pb-4 border-b border-borderNeutralSecondary">
                <p className=" font-medium text-sm w-28">Industries</p>
                <RoundedContainerTag>Ecommerce/DTC</RoundedContainerTag>
                <RoundedContainerTag>B2B/Tech</RoundedContainerTag>
              </div>
              <div className=" flex items-center gap-2 pb-4">
                <p className=" font-medium text-sm w-28">Niches</p>
                <RoundedContainerTag>
                  Beauty & Personal Care
                </RoundedContainerTag>
                <RoundedContainerTag>Health & Wellness</RoundedContainerTag>
                <RoundedContainerTag>Fashion & Apparel</RoundedContainerTag>
              </div>
            </div>
            <p className=" text-neutralSecondary tracking-tight">
              We are looking for a{" "}
              <span className=" font-bold">
                skilled and results-driven Marketing Specialist
              </span>{" "}
              to join our team on a freelance basis. You will play a key role in
              planning, executing, and optimizing marketing campaigns to achieve
              our business objectives.
            </p>
            <div>
              <p className=" text-2xl font-medium py-4">Responsibilities</p>
              <ol className=" list-outside text-neutralSecondary list-decimal pl-4 tracking-tight pr-3 flex flex-col items-start  gap-2 text-base">
                <li>
                  Develop and implement marketing strategies across digital and
                  traditional platforms.
                </li>
                <li>
                  Conduct market research to identify trends, customer needs,
                  and competitive positioning. Create and manage campaigns for
                  social media, email, SEO, and paid advertising.
                </li>
                <li>
                  Analyze campaign performance metrics and generate actionable
                  insights for improvement.
                </li>
                <li>
                  Collaborate with creative teams to produce engaging content
                  and promotional materials.
                </li>
              </ol>
            </div>
            <div>
              <p className="text-2xl font-medium py-4">Qualifications</p>
              <ol className="list-outside text-neutralSecondary list-decimal pl-4 tracking-tight pr-3 flex flex-col items-start gap-2 text-base">
                <li>
                  Develop and implement comprehensive marketing strategies
                  across digital and traditional platforms to enhance brand
                  visibility and customer engagement.
                </li>
                <li>
                  Conduct in-depth market research to identify emerging trends,
                  customer preferences, and competitive positioning, ensuring
                  data-driven decision-making.
                </li>
                <li>
                  Create and manage multi-channel campaigns, including social
                  media, email marketing, search engine optimization (SEO), and
                  paid advertising, to maximize reach and conversions.
                </li>
                <li>
                  Analyze key performance indicators (KPIs) from marketing
                  campaigns, generate detailed reports, and provide actionable
                  recommendations for continuous improvement.
                </li>
                <li>
                  Collaborate with cross-functional teams, including design,
                  content, and development teams, to produce high-quality
                  promotional materials and engaging content.
                </li>
                <li>
                  Develop and oversee content marketing strategies, ensuring
                  consistency in messaging and brand voice across all
                  communication channels.
                </li>
                <li>
                  Manage budgets for marketing initiatives, optimizing spending
                  efficiency and ensuring cost-effective campaign execution.
                </li>
                <li>
                  Stay updated with industry trends, new technologies, and
                  evolving marketing practices to implement innovative
                  strategies and maintain a competitive edge.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FadedSeparator({ fadeBothSides }: { fadeBothSides?: boolean }) {
  if (fadeBothSides)
    return (
      <span
        className=" block w-full"
        aria-hidden
        style={{
          border: "0.9px solid transparent",
          borderImage:
            "linear-gradient(to right, #fff 0%, #fff 13%, var(--border-neutral-primary) 60%, #fff 87%, #fff 100%) 0.9",
        }}
      ></span>
    );
  return (
    <span
      className=" block w-full"
      aria-hidden
      style={{
        border: "1px solid transparent",
        borderImage:
          "linear-gradient(to right, var(--border-neutral-primary), #fff) 1",
      }}
    ></span>
  );
}

function RoundedContainerTag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "py-2 px-3 rounded-full border border-borderNeutralPrimary text-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
