import React from "react";
import ClassicTemplate from "./ClassicTemplate";
import ModernTemplate from "./ModernTemplate";
import LeftRightTemplate from "./LeftRightTemplate";
import TimelineTemplate from "./TimelineTemplate";
import CreativeTemplate from "./CreativeTemplate";
import ExecutiveTemplate from "./ExecutiveTemplate";
import MinimalTemplate from "./MinimalTemplate";
import ElegantTemplate from "./ElegantTemplate";
import TechTemplate from "./TechTemplate";
import GenericTemplate from "./GenericTemplate";
import { ResumeData } from "@/types/resume";
import { ResumeTemplate } from "@/types/template";

interface TemplateProps {
  data: ResumeData;
  template: ResumeTemplate;
}

const ResumeTemplateComponent: React.FC<TemplateProps> = ({
  data,
  template
}) => {
  const renderTemplate = () => {
    switch (template.layout) {
      case "modern":
        return <ModernTemplate data={data} template={template} />;
      case "left-right":
        return <LeftRightTemplate data={data} template={template} />;
      case "timeline":
        return <TimelineTemplate data={data} template={template} />;
      case "creative":
        return <CreativeTemplate data={data} template={template} />;
      case "executive":
        return <ExecutiveTemplate data={data} template={template} />;
      case "minimal":
        return <MinimalTemplate data={data} template={template} />;
      case "elegant":
        return <ElegantTemplate data={data} template={template} />;
      case "tech":
        return <TechTemplate data={data} template={template} />;
      case "artistic":
      case "corporate":
      case "academic":
      case "startup":
      case "medical":
      case "legal":
      case "sales":
      case "consulting":
      case "finance":
      case "education":
        return <GenericTemplate data={data} template={template} />;
      default:
        return <ClassicTemplate data={data} template={template} />;
    }
  };

  return renderTemplate();
};

export default ResumeTemplateComponent;
