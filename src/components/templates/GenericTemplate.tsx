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

interface GenericTemplateProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const GenericTemplate: React.FC<GenericTemplateProps> = ({ data, template }) => {
  const { colorScheme, layout } = template;
  const enabledSections = data.menuSections.filter((section) => section.enabled);
  const sortedSections = [...enabledSections].sort((a, b) => a.order - b.order);

  const getTemplateStyle = () => {
    switch (layout) {
      case "artistic":
        return {
          headerStyle: "text-center text-xl font-bold text-pink-600 mb-4 relative",
          decorationStyle: "absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full",
          containerStyle: "relative overflow-hidden",
          backgroundDecoration: (
            <>
              <div className="absolute top-10 right-10 w-20 h-20 bg-pink-100 rounded-full opacity-30"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-purple-100 rounded-full opacity-30"></div>
            </>
          )
        };
      case "corporate":
        return {
          headerStyle: "text-left text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-300",
          decorationStyle: "",
          containerStyle: "bg-gray-50 border-l-4 border-gray-800 pl-4",
          backgroundDecoration: null
        };
      case "academic":
        return {
          headerStyle: "text-center text-lg font-medium text-green-700 mb-4 uppercase tracking-wide",
          decorationStyle: "absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-green-600",
          containerStyle: "border border-green-200 rounded-lg p-4 bg-green-50/30",
          backgroundDecoration: null
        };
      case "startup":
        return {
          headerStyle: "text-left text-xl font-bold text-orange-600 mb-3",
          decorationStyle: "absolute -bottom-1 left-0 w-6 h-1 bg-orange-500 rounded-full",
          containerStyle: "relative",
          backgroundDecoration: (
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full opacity-40"></div>
          )
        };
      case "medical":
        return {
          headerStyle: "text-center text-lg font-semibold text-red-700 mb-4",
          decorationStyle: "absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-red-600",
          containerStyle: "border-l-2 border-red-500 pl-4",
          backgroundDecoration: null
        };
      case "legal":
        return {
          headerStyle: "text-left text-lg font-bold text-purple-700 mb-3 uppercase",
          decorationStyle: "absolute -bottom-1 left-0 w-full h-0.5 bg-purple-600",
          containerStyle: "bg-purple-50/20 p-3 rounded",
          backgroundDecoration: null
        };
      case "sales":
        return {
          headerStyle: "text-center text-xl font-bold text-orange-600 mb-4",
          decorationStyle: "absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full",
          containerStyle: "relative",
          backgroundDecoration: null
        };
      case "consulting":
        return {
          headerStyle: "text-left text-lg font-semibold text-teal-700 mb-3",
          decorationStyle: "absolute -bottom-1 left-0 w-8 h-1 bg-teal-600 rounded-full",
          containerStyle: "border-t-2 border-teal-500 pt-3",
          backgroundDecoration: null
        };
      case "finance":
        return {
          headerStyle: "text-center text-lg font-bold text-blue-800 mb-4 uppercase tracking-wider",
          decorationStyle: "absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-blue-800",
          containerStyle: "bg-blue-50/30 border border-blue-200 rounded p-4",
          backgroundDecoration: null
        };
      case "education":
        return {
          headerStyle: "text-left text-lg font-medium text-amber-800 mb-3",
          decorationStyle: "absolute -bottom-1 left-0 w-6 h-1 bg-amber-700 rounded-full",
          containerStyle: "border-l-3 border-amber-600 pl-4 bg-amber-50/20",
          backgroundDecoration: null
        };
      default:
        return {
          headerStyle: "text-left text-lg font-semibold mb-3",
          decorationStyle: "",
          containerStyle: "",
          backgroundDecoration: null
        };
    }
  };

  const templateStyle = getTemplateStyle();

  const renderSection = (sectionId: string) => {
    const sectionWrapper = (content: React.ReactNode, title?: string) => (
      <div className={`mb-6 ${templateStyle.containerStyle}`}>
        {templateStyle.backgroundDecoration}
        {title && (
          <div className={`relative ${templateStyle.headerStyle}`}>
            {title}
            <div className={templateStyle.decorationStyle}></div>
          </div>
        )}
        <div>{content}</div>
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
      className="flex flex-col w-full min-h-screen p-6"
      style={{
        backgroundColor: colorScheme.background,
        color: colorScheme.text,
      }}
    >
      {sortedSections.map((section) => (
        <div key={section.id}>{renderSection(section.id)}</div>
      ))}
    </div>
  );
};

export default GenericTemplate;