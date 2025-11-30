"use client";

import { useState } from "react";
import Background from "../events/component/Background";
import HeroSection from "../../components/about/HeroSection";
import CommunityHeader from "../../components/about/CommunityHeader";
import TeamSection from "../../components/about/TeamSection";
import TeamsAccordionSection from "../../components/about/TeamsAccordionSection";
import FeaturesSection from "../../components/about/FeaturesSection";
import ContributorsSection from "../../components/about/ContributorsSection";
import { useContributors } from "../../components/about/hooks/useContributors";
import officeInfo from "../../office-info/index.js";
import { TeamMember, TeamInfo } from "./types";

function AboutPage() {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const contributors = useContributors();

  const mentors = officeInfo[0].Mentors;
  const management = officeInfo[0].Management;
  const technicalTeam = officeInfo[0]["Technical Team"];
  const creativeTeam = officeInfo[0]["Creative Team"];
  const prTeam = officeInfo[0]["Public Relations Team"];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Background />

      <HeroSection />
      <CommunityHeader />

      <TeamSection
        title={mentors[0].title!}
        members={mentors.slice(1) as TeamMember[]}
        useProfileCard={true}
        gridCols="grid-cols-1 sm:grid-cols-2"
      />

      <TeamSection
        title={management[0].title!}
        members={management.slice(1) as TeamMember[]}
        useProfileCard={false}
      />

      <TeamsAccordionSection
        technicalTeam={technicalTeam as [TeamInfo, ...TeamMember[]]}
        creativeTeam={creativeTeam as [TeamInfo, ...TeamMember[]]}
        prTeam={prTeam as [TeamInfo, ...TeamMember[]]}
        openAccordionIndex={openAccordionIndex}
        setOpenAccordionIndex={setOpenAccordionIndex}
      />

      <FeaturesSection />

      <ContributorsSection contributors={contributors} />
    </div>
  );
}

export default AboutPage;
