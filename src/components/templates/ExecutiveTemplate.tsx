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

interface ExecutiveTemplateProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const ExecutiveTemplate: React.FC<ExecutiveTemplateProps> = ({
  data,
  template,
}) => {
  const { colorScheme } = template;
  const enabledSections = data.menuSections.filter(
    (section) => section.enabled
  );
  const sortedSections = [...enabledSections].sort((a, b) => a.order - b.order);

  const renderSection = (sectionId: string) => {
    const sectionWrapper = (content: React.ReactNode, title?: string) => (
      <div className="mb-8">
        {title && (
          <div className="border-l-4 border-blue-600 pl-4 mb-4">
            <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide">
              {title}
            </h2>
          </div>
        )}
        <div className="pl-6">
          {content}
        </div>
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
          <ExperienceSection
            experiences={data.experience}
            globalSettings={data.globalSettings}
          />,
          "Professional Experience"
        );
      case "education":
        return sectionWrapper(
          <EducationSection
            education={data.education}
            globalSettings={data.globalSettings}
          />,
          "Education"
        );
      case "skills":
        return sectionWrapper(
          <SkillSection
            skill={data.skillContent}
            globalSettings={data.globalSettings}
          />,
          "Core Competencies"
        );
      case "projects":
        return sectionWrapper(
          <ProjectSection
            projects={data.projects}
            globalSettings={data.globalSettings}
          />,
          "Key Projects"
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
      {/* Executive header with subtle background */}
      <div className="relative bg-gradient-to-r from-blue-50 to-gray-50 p-8 mb-6">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-blue-600"></div>
      </div>
      
      <div className="px-8">
        {sortedSections.map((section) => (
          <div key={section.id}>
            {renderSection(section.id)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutiveTemplate;