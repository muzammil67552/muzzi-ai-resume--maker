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

interface MinimalTemplateProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({
  data,
  template,
}) => {
  const { colorScheme } = template;
  const enabledSections = data.menuSections.filter(
    (section) => section.enabled
  );
  const sortedSections = [...enabledSections].sort((a, b) => a.order - b.order);

  const renderSection = (sectionId: string) => {
    const sectionWrapper = (content: React.ReactNode, showDivider = true) => (
      <div className="mb-6">
        {content}
        {showDivider && <div className="w-12 h-px bg-gray-300 mt-6"></div>}
      </div>
    );

    switch (sectionId) {
      case "basic":
        return sectionWrapper(
          <>
            <BaseInfo basic={data.basic} globalSettings={data.globalSettings} />
            {data.basic.githubContributionsVisible && (
              <GithubContribution
                className="mt-3"
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
          />
        );
      case "education":
        return sectionWrapper(
          <EducationSection
            education={data.education}
            globalSettings={data.globalSettings}
          />
        );
      case "skills":
        return sectionWrapper(
          <SkillSection
            skill={data.skillContent}
            globalSettings={data.globalSettings}
          />
        );
      case "projects":
        return sectionWrapper(
          <ProjectSection
            projects={data.projects}
            globalSettings={data.globalSettings}
          />
        );
      default:
        if (sectionId in data.customData) {
          const sectionTitle = data.menuSections.find(s => s.id === sectionId)?.title || sectionId;
          return sectionWrapper(
            <CustomSection
              title={sectionTitle}
              key={sectionId}
              sectionId={sectionId}
              items={data.customData[sectionId]}
              globalSettings={data.globalSettings}
            />
          );
        }
        return null;
    }
  };

  return (
    <div
      className="flex flex-col w-full min-h-screen max-w-2xl mx-auto"
      style={{
        backgroundColor: colorScheme.background,
        color: colorScheme.text,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div className="px-6 py-8">
        {sortedSections.map((section, index) => (
          <div key={section.id}>
            {renderSection(section.id)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinimalTemplate;