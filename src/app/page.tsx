"use client";
import Image from "next/image";
import {
  Bell,
  Bookmark,
  BriefcaseBusiness,
  Clock3,
  Dot,
  Languages,
  MapPin,
  MessageCircleMore,
  Star,
} from "lucide-react";
import { ArrowLeft, Midlevel, Sparkles } from "../components/icons";
import { cn } from "@/lib/utils";
import { DislikePopover } from "@/components/downvote-button";
import { Sidebar } from "@/components/sidebar";
import { FadedSeparator } from "@/components/ui/separator";
export default function Page() {
  return (
    <div className=" flex items-stretch w-full relative">
      {/* sidebar */}
      <Sidebar />
      {/* main content */}

      <div className=" bg-white w-full text-neutralPrimary relative">
        {/* header */}

        <div className=" sticky top-0 bg-white w-full flex items-center justify-between px-2 md:px-8 py-3 border-b border-borderNeutralSecondary">
          <div className=" flex items-center gap-2">
            <div className=" w-8 h-8 flex items-center justify-center">
              <ArrowLeft />
            </div>
            <p className=" font-medium text-xl tracking-tight">Jobs</p>
          </div>

          <div className=" flex items-center gap-2">
            <div className="relative cursor-pointer">
              <div className=" absolute p-[1px] w-2 h-2 z-10 bg-white rounded-full top-0 right-0">
                <div className=" w-full h-full bg-[#F43F5F] rounded-full"></div>
              </div>
              <MessageCircleMore className=" w-5 h-5 text-neutralSecondary relative "></MessageCircleMore>
            </div>
            <div className=" w-10 h-10 flex items-center justify-center cursor-pointer bg-inherit hover:bg-gray-50 transition-all p-1 rounded-md">
              <Bell className=" w-[22px] h-[22px] text-neutralSecondary" />
            </div>
          </div>
        </div>

        {/* jobs */}
        <div className=" px-4 md:px-10 pt-5 md:pt-8 pb-20 flex lg:flex-row flex-col md:items-stretch gap-5">
          <div className=" md:basis-2/5 shrink-0 flex flex-col gap-4 items-start">
            {/* Job */}

            <div className=" md:p-6 md:border md:border-borderNeutralPrimary flex flex-col items-start w-full gap-5 md:gap-4 md:rounded-[20px]">
              {/* match indicator */}

              <div className=" bg-accentLime py-1 gap-[6px] px-[10px] rounded-full flex items-center w-fit">
                <Sparkles />
                <p className=" text-accentLimePrimary text-xs md:text-sm">
                  100% match
                </p>
              </div>
              <p className=" font-medium text-lg md:text-2xl leading-7 tracking-tight">
                Freelance Marketing Consultant Needed for Strategic Audience
                Engagement
              </p>

              {/* tags */}

              <div className=" flex items-center flex-wrap gap-[10px] w-full tracking-tight">
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
                  className=" basis-3/5 md:basis-[70%] h-12 shrink-0 bg-accentBlue text-white tracking-tight font-medium rounded-[14px] py-1 px-5 hover:bg-[#2C36F0] transition-all duration-200"
                  style={{
                    boxShadow:
                      "0px 8px 16px -8px #3040FF33, 0px 13px 27px -5px #3040FF26",
                  }}
                >
                  Apply now
                </button>
                <button className=" w-12 h-12 flex items-center bg-white hover:bg-[#FCFCFC] transition-all justify-center rounded-[14px] border border-borderNeutralPrimary">
                  <Bookmark className=" w-5 h-5 text-neutralPrimary" />
                </button>
                <DislikePopover />
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

            <div className=" pt-2 md:p-6 w-full md:rounded-[20px] md:border md:border-borderNeutralPrimary flex flex-col items-start gap-5 md:gap-4">
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

              <div className=" flex items-center flex-wrap gap-3 text-sm">
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
                  <span className=" font-medium">100%</span>{" "}
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
          <div className=" md:hidden py-6">
            <FadedSeparator fadeBothSides={true} />
          </div>
          <div className=" shrink-0 md:basis-3/5 md:pl-6 flex flex-col gap-8 tracking-tight">
            <div className=" flex flex-col w-full gap-4">
              <div className=" flex items-start gap-2 pb-4 border-b border-borderNeutralSecondary">
                <p className=" font-medium text-sm w-[72px] shrink-0 md:w-28">
                  Skills
                </p>
                <div className=" flex items-center gap-2 flex-wrap">
                  <RoundedContainerTag>A/B Testing</RoundedContainerTag>
                  <RoundedContainerTag>Account Management</RoundedContainerTag>
                </div>
              </div>
              <div className=" flex items-start gap-2 pb-4 border-b border-borderNeutralSecondary">
                <p className=" font-medium text-sm w-[72px] shrink-0 md:w-28">
                  Tools
                </p>
                <div className=" flex items-center gap-2 flex-wrap">
                  <RoundedContainerTag className=" flex items-center gap-1 pl-1 pr-2">
                    <Image
                      src={"/shopify.png"}
                      width={50}
                      height={50}
                      className=" w-6 h-6"
                      alt="shopify"
                    />
                    <p>Shopify</p>
                  </RoundedContainerTag>
                  <RoundedContainerTag className=" flex items-center gap-1 pl-1 pr-2">
                    <Image
                      src={"/magento.png"}
                      width={50}
                      height={50}
                      className=" w-6 h-6"
                      alt="magento"
                    />
                    <p>Magento</p>
                  </RoundedContainerTag>
                  <RoundedContainerTag className=" flex items-center gap-1 pl-1 pr-2">
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
              </div>
              <div className=" flex items-start gap-2 pb-4 border-b border-borderNeutralSecondary">
                <p className=" font-medium text-sm w-[72px] shrink-0 md:w-28">
                  Industries
                </p>
                <div className=" flex items-center gap-2 flex-wrap">
                  <RoundedContainerTag>Ecommerce/DTC</RoundedContainerTag>
                  <RoundedContainerTag>B2B/Tech</RoundedContainerTag>
                </div>
              </div>
              <div className=" flex items-start gap-2 pb-4">
                <p className=" font-medium text-sm w-[72px] shrink-0 md:w-28">
                  Niches
                </p>
                <div className=" flex items-center gap-2 flex-wrap">
                  <RoundedContainerTag>
                    Beauty & Personal Care
                  </RoundedContainerTag>
                  <RoundedContainerTag>Health & Wellness</RoundedContainerTag>
                  <RoundedContainerTag>Fashion & Apparel</RoundedContainerTag>
                </div>
              </div>
            </div>
            <p className=" text-neutralSecondary tracking-tight pr-4">
              We are looking for a{" "}
              <span className=" font-bold">
                skilled and results-driven Marketing Specialist
              </span>{" "}
              to join our team on a freelance basis. You will play a key role in
              planning, executing, and optimizing marketing campaigns to achieve
              our business objectives.
            </p>
            <div className=" pr-4">
              <p className=" text-xl md:text-2xl font-medium py-4">
                Responsibilities
              </p>
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
            <div className=" pr-4">
              <p className=" text-xl md:text-2xl font-medium py-4">
                Qualifications
              </p>
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
        "py-1 px-[10px] rounded-full border border-borderNeutralPrimary text-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
