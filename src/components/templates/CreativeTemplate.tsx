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

interface CreativeTemplateProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({
  data,
  template,
}) => {
  const { colorScheme } = template;
  const enabledSections = data.menuSections.filter(
    (section) => section.enabled
  );
  const sortedSections = [...enabledSections].sort((a, b) => a.order - b.order);

  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case "basic":
        return (
          <div className="relative">
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
            <BaseInfo basic={data.basic} globalSettings={data.globalSettings} />
            {data.basic.githubContributionsVisible && (
              <GithubContribution
                className="mt-4"
                githubKey={data.basic.githubKey}
                username={data.basic.githubUseName}
              />
            )}
          </div>
        );
      case "experience":
        return (
          <div className="relative">
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <ExperienceSection
              experiences={data.experience}
              globalSettings={data.globalSettings}
            />
          </div>
        );
      case "education":
        return (
          <div className="relative">
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-yellow-500 rounded-full"></div>
            <EducationSection
              education={data.education}
              globalSettings={data.globalSettings}
            />
          </div>
        );
      case "skills":
        return (
          <div className="relative">
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-yellow-500 to-red-500 rounded-full"></div>
            <SkillSection
              skill={data.skillContent}
              globalSettings={data.globalSettings}
            />
          </div>
        );
      case "projects":
        return (
          <div className="relative">
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <ProjectSection
              projects={data.projects}
              globalSettings={data.globalSettings}
            />
          </div>
        );
      default:
        if (sectionId in data.customData) {
          const sectionTitle = data.menuSections.find(s => s.id === sectionId)?.title || sectionId;
          return (
            <div className="relative">
              <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>
              <CustomSection
                title={sectionTitle}
                key={sectionId}
                sectionId={sectionId}
                items={data.customData[sectionId]}
                globalSettings={data.globalSettings}
              />
            </div>
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
      {/* Creative header decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-200 to-transparent rounded-bl-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200 to-transparent rounded-tr-full opacity-30"></div>
      
      <div className="relative pl-12 pr-8">
        {sortedSections.map((section, index) => (
          <div key={section.id} className={index > 0 ? "mt-8" : ""}>
            {renderSection(section.id)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreativeTemplate;