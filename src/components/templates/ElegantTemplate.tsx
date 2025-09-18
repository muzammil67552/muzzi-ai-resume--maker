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

interface ElegantTemplateProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const ElegantTemplate: React.FC<ElegantTemplateProps> = ({ data, template }) => {
  const { colorScheme } = template;
  const enabledSections = data.menuSections.filter((section) => section.enabled);
  const sortedSections = [...enabledSections].sort((a, b) => a.order - b.order);

  const renderSection = (sectionId: string) => {
    const sectionWrapper = (content: React.ReactNode, title?: string) => (
      <div className="mb-8">
        {title && (
          <div className="relative mb-6">
            <h2 className="text-lg font-semibold text-slate-800 uppercase tracking-wider text-center">
              {title}
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-slate-800 mt-2"></div>
          </div>
        )}
        <div className="px-4">{content}</div>
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
          "Skills"
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
      className="flex flex-col w-full min-h-screen"
      style={{
        backgroundColor: colorScheme.background,
        color: colorScheme.text,
      }}
    >
      <div className="border-t-4 border-slate-800 pt-8">
        {sortedSections.map((section) => (
          <div key={section.id}>{renderSection(section.id)}</div>
        ))}
      </div>
    </div>
  );
};

export default ElegantTemplate;