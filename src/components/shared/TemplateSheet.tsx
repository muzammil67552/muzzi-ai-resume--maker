"use client";
import { Layout, PanelsLeftBottom } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet-no-overlay";
import { cn } from "@/lib/utils";
import { DEFAULT_TEMPLATES } from "@/config";
import { useResumeStore } from "@/store/useResumeStore";
import ResumeTemplateComponent from "@/components/templates";



const TemplateSheet = () => {
  const t = useTranslations("templates");
  const { activeResume, setTemplate } = useResumeStore();
  const currentTemplate =
    DEFAULT_TEMPLATES.find((t) => t.id === activeResume?.templateId) ||
    DEFAULT_TEMPLATES[0];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <PanelsLeftBottom size={20} />
      </SheetTrigger>
      <SheetContent side="left" className="w-1/2 sm:max-w-1/2">
        <SheetHeader>
          <SheetTitle>{t("switchTemplate")}</SheetTitle>
        </SheetHeader>

        {/* 解决警告问题 */}
        <SheetDescription></SheetDescription>

        <div className="grid grid-cols-2 gap-4 mt-4 max-h-[80vh] overflow-y-auto">
          {DEFAULT_TEMPLATES.map((template) => (
            <div key={template.id} className="space-y-2">
              <div className="text-sm font-medium text-center">
                {t(`${template.id}.name`)}
              </div>
              <button
                onClick={() => setTemplate(template.id)}
                className={cn(
                  "relative group rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-[1.02] w-full",
                  template.id === currentTemplate.id
                    ? "border-primary dark:border-primary shadow-lg dark:shadow-primary/30"
                    : "dark:border-neutral-800 dark:hover:border-neutral-700 border-gray-100 hover:border-gray-200"
                )}
              >
                <div className="w-full h-48 overflow-hidden bg-white">
                  <div className="transform scale-[0.15] origin-top-left w-[667%] h-[667%]">
                    {activeResume && (
                      <ResumeTemplateComponent
                        data={activeResume}
                        template={template}
                      />
                    )}
                  </div>
                </div>
                {template.id === currentTemplate.id && (
                  <motion.div
                    layoutId="template-selected"
                    className="absolute inset-0 flex items-center justify-center bg-black/20 dark:bg-white/30"
                  >
                    <Layout className="w-6 h-6 text-white dark:text-primary" />
                  </motion.div>
                )}
              </button>
              <div className="text-xs text-muted-foreground text-center px-2">
                {t(`${template.id}.description`)}
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TemplateSheet;
