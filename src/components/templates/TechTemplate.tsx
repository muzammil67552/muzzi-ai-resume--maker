import React from "react";
import GithubContribution from "@/components/shared/GithubContribution";
import BaseInfo from "../preview/BaseInfo";
import ExperienceSection from "../preview/ExperienceSection";
import EducationSection from "../preview/EducationSection";
import SkillSection from "../preview/SkillPanel";
import CustomSection from "../preview/CustomSection";
import { ResumeData } from "@/types/resume";
import { ResumeTemplate } from "@/types/template";
import ProjectSection from "../preview/ProjectSection";

interface TechTemplateProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const TechTemplate: React.FC<TechTemplateProps> = ({ data, template }) => {
  const { colorScheme } = template;
  const enabledSections = data.menuSections.filter((section) => section.enabled);
  const sortedSections = [...enabledSections].sort((a, b) => a.order - b.order);

  const renderSection = (sectionId: string) => {
    const sectionWrapper = (content: React.ReactNode, title?: string, icon?: string) => (
      <div className="mb-6">
        {title && (
          <div className="flex items-center mb-4 pb-2 border-b-2 border-blue-500">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <h2 className="text-lg font-bold text-blue-600 uppercase tracking-wide">
              {title}
            </h2>
          </div>
        )}
        <div className="pl-5">{content}</div>
      </div>
    );

    switch (sectionId) {
      case "basic":
        return sectionWrapper(
          <>
            <BaseInfo basic={data.basic} globalSettings={data.globalSettings} />
            {data.basic.githubContributionsVisible && (
              <GithubContribution
                className="mt-4"
                githubKey={data.basic.githubKey}
                username={data.basic.githubUseName}
              />
            )}
          </>
        );
      case "experience":
        return sectionWrapper(
          <ExperienceSection experiences={data.experience} globalSettings={data.globalSettings} />,
          "Experience"
        );
      case "education":
        return sectionWrapper(
          <EducationSection education={data.education} globalSettings={data.globalSettings} />,
          "Education"
        );
      case "skills":
        return sectionWrapper(
          <SkillSection skill={data.skillContent} globalSettings={data.globalSettings} />,
          "Technical Skills"
        );
      case "projects":
        return sectionWrapper(
          <ProjectSection projects={data.projects} globalSettings={data.globalSettings} />,
          "Projects"
        );
      default:
        if (sectionId in data.customData) {
          const sectionTitle = data.menuSections.find(s => s.id === sectionId)?.title || sectionId;
          return sectionWrapper(
            <CustomSection
              title=""
              key={sectionId}
              sectionId={sectionId}
              items={data.customData[sectionId]}
              globalSettings={data.globalSettings}
            />,
            sectionTitle
          );
        }
        return null;
    }
  };

  return (
    <div
      className="flex flex-col w-full min-h-screen relative"
      style={{
        backgroundColor: colorScheme.background,
        color: colorScheme.text,
      }}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
      <div className="pl-8 pr-6 py-6">
        {sortedSections.map((section) => (
          <div key={section.id}>{renderSection(section.id)}</div>
        ))}
      </div>
    </div>
  );
};

export default TechTemplate;