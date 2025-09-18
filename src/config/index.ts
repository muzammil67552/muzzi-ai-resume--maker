import { BasicFieldType } from "@/types/resume";
import { ResumeTemplate } from "@/types/template";
export const DEFAULT_FIELD_ORDER: BasicFieldType[] = [
  { id: "1", key: "name", label: "姓名", type: "text", visible: true },

  { id: "2", key: "title", label: "职位", type: "text", visible: true },
  {
    id: "3",
    key: "employementStatus",
    label: "状态",
    type: "text",
    visible: true
  },
  { id: "4", key: "birthDate", label: "生日", type: "date", visible: true },
  { id: "5", key: "email", label: "邮箱", type: "text", visible: true },
  { id: "6", key: "phone", label: "电话", type: "text", visible: true },
  { id: "7", key: "location", label: "所在地", type: "text", visible: true }
];

export const DEFAULT_TEMPLATES: ResumeTemplate[] = [
  {
    id: "classic",
    name: "经典模板",
    description: "传统简约的简历布局，适合大多数求职场景",
    thumbnail: "classic",
    layout: "classic",
    colorScheme: {
      primary: "#000000",
      secondary: "#4b5563",
      background: "#ffffff",
      text: "#212529"
    },
    spacing: {
      sectionGap: 24,
      itemGap: 16,
      contentPadding: 32
    },
    basic: {
      layout: "center"
    }
  },
  {
    id: "modern",
    name: "两栏布局",
    description: "经典两栏，突出个人特色",
    thumbnail: "modern",
    layout: "modern",
    colorScheme: {
      primary: "#000000",
      secondary: "#6b7280",
      background: "#ffffff",
      text: "#212529"
    },
    spacing: {
      sectionGap: 20,
      itemGap: 20,
      contentPadding: 1
    },
    basic: {
      layout: "center"
    }
  },
  {
    id: "left-right",
    name: "模块标题背景色",
    description: "模块标题背景鲜明，突出美观特色",
    thumbnail: "leftRight",
    layout: "left-right",
    colorScheme: {
      primary: "#000000",
      secondary: "#9ca3af",
      background: "#ffffff",
      text: "#212529"
    },
    spacing: {
      sectionGap: 24,
      itemGap: 16,
      contentPadding: 32
    },
    basic: {
      layout: "left"
    }
  },
  {
    id: "timeline",
    name: "时间线风格",
    description: "时间线布局，突出经历的时间顺序",
    thumbnail: "timeline",
    layout: "timeline",
    colorScheme: {
      primary: "#18181b",
      secondary: "#64748b",
      background: "#ffffff",
      text: "#212529"
    },
    spacing: {
      sectionGap: 1,
      itemGap: 12,
      contentPadding: 24
    },
    basic: {
      layout: "right"
    }
  },
  {
    id: "creative",
    name: "创意模板",
    description: "现代创意设计，适合设计师和创意工作者",
    thumbnail: "creative",
    layout: "creative",
    colorScheme: {
      primary: "#8b5cf6",
      secondary: "#64748b",
      background: "#ffffff",
      text: "#1f2937"
    },
    spacing: {
      sectionGap: 28,
      itemGap: 18,
      contentPadding: 36
    },
    basic: {
      layout: "center"
    }
  },
  {
    id: "executive",
    name: "高管模板",
    description: "专业高端设计，适合高级管理人员",
    thumbnail: "executive",
    layout: "executive",
    colorScheme: {
      primary: "#1e40af",
      secondary: "#6b7280",
      background: "#ffffff",
      text: "#111827"
    },
    spacing: {
      sectionGap: 32,
      itemGap: 20,
      contentPadding: 40
    },
    basic: {
      layout: "left"
    }
  },
  {
    id: "minimal",
    name: "极简模板",
    description: "简洁优雅，突出内容本身",
    thumbnail: "minimal",
    layout: "minimal",
    colorScheme: {
      primary: "#374151",
      secondary: "#9ca3af",
      background: "#ffffff",
      text: "#1f2937"
    },
    spacing: {
      sectionGap: 20,
      itemGap: 14,
      contentPadding: 28
    },
    basic: {
      layout: "center"
    }
  },
  {
    id: "elegant",
    name: "优雅模板",
    description: "优雅精致，适合金融和咨询行业",
    thumbnail: "elegant",
    layout: "elegant",
    colorScheme: {
      primary: "#0f172a",
      secondary: "#64748b",
      background: "#ffffff",
      text: "#1e293b"
    },
    spacing: {
      sectionGap: 30,
      itemGap: 18,
      contentPadding: 36
    },
    basic: {
      layout: "center"
    }
  },
  {
    id: "tech",
    name: "科技模板",
    description: "现代科技风格，适合IT和技术人员",
    thumbnail: "tech",
    layout: "tech",
    colorScheme: {
      primary: "#0ea5e9",
      secondary: "#64748b",
      background: "#ffffff",
      text: "#0f172a"
    },
    spacing: {
      sectionGap: 24,
      itemGap: 16,
      contentPadding: 32
    },
    basic: {
      layout: "left"
    }
  },
  {
    id: "artistic",
    name: "艺术模板",
    description: "创意艺术设计，适合艺术家和设计师",
    thumbnail: "artistic",
    layout: "artistic",
    colorScheme: {
      primary: "#ec4899",
      secondary: "#6b7280",
      background: "#ffffff",
      text: "#111827"
    },
    spacing: {
      sectionGap: 28,
      itemGap: 20,
      contentPadding: 40
    },
    basic: {
      layout: "center"
    }
  },
  {
    id: "corporate",
    name: "企业模板",
    description: "传统企业风格，适合大型企业申请",
    thumbnail: "corporate",
    layout: "corporate",
    colorScheme: {
      primary: "#1f2937",
      secondary: "#6b7280",
      background: "#ffffff",
      text: "#111827"
    },
    spacing: {
      sectionGap: 26,
      itemGap: 16,
      contentPadding: 34
    },
    basic: {
      layout: "left"
    }
  },
  {
    id: "academic",
    name: "学术模板",
    description: "学术研究风格，适合教育和研究领域",
    thumbnail: "academic",
    layout: "academic",
    colorScheme: {
      primary: "#059669",
      secondary: "#6b7280",
      background: "#ffffff",
      text: "#0f172a"
    },
    spacing: {
      sectionGap: 22,
      itemGap: 14,
      contentPadding: 30
    },
    basic: {
      layout: "center"
    }
  },
  {
    id: "startup",
    name: "创业模板",
    description: "创业公司风格，适合创业和创新行业",
    thumbnail: "startup",
    layout: "startup",
    colorScheme: {
      primary: "#f59e0b",
      secondary: "#6b7280",
      background: "#ffffff",
      text: "#1f2937"
    },
    spacing: {
      sectionGap: 25,
      itemGap: 17,
      contentPadding: 33
    },
    basic: {
      layout: "left"
    }
  },
  {
    id: "medical",
    name: "医疗模板",
    description: "专业医疗风格，适合医疗健康行业",
    thumbnail: "medical",
    layout: "medical",
    colorScheme: {
      primary: "#dc2626",
      secondary: "#6b7280",
      background: "#ffffff",
      text: "#111827"
    },
    spacing: {
      sectionGap: 24,
      itemGap: 15,
      contentPadding: 32
    },
    basic: {
      layout: "center"
    }
  },
  {
    id: "legal",
    name: "法律模板",
    description: "专业法律风格，适合法律和政府部门",
    thumbnail: "legal",
    layout: "legal",
    colorScheme: {
      primary: "#7c3aed",
      secondary: "#6b7280",
      background: "#ffffff",
      text: "#1f2937"
    },
    spacing: {
      sectionGap: 28,
      itemGap: 18,
      contentPadding: 36
    },
    basic: {
      layout: "left"
    }
  },
  {
    id: "sales",
    name: "销售模板",
    description: "销售导向设计，适合销售和市场人员",
    thumbnail: "sales",
    layout: "sales",
    colorScheme: {
      primary: "#ea580c",
      secondary: "#6b7280",
      background: "#ffffff",
      text: "#1f2937"
    },
    spacing: {
      sectionGap: 26,
      itemGap: 16,
      contentPadding: 34
    },
    basic: {
      layout: "center"
    }
  },
  {
    id: "consulting",
    name: "咨询模板",
    description: "专业咨询风格，适合咨询和服务行业",
    thumbnail: "consulting",
    layout: "consulting",
    colorScheme: {
      primary: "#0d9488",
      secondary: "#6b7280",
      background: "#ffffff",
      text: "#0f172a"
    },
    spacing: {
      sectionGap: 30,
      itemGap: 19,
      contentPadding: 38
    },
    basic: {
      layout: "left"
    }
  },
  {
    id: "finance",
    name: "金融模板",
    description: "金融专业风格，适合银行和投资行业",
    thumbnail: "finance",
    layout: "finance",
    colorScheme: {
      primary: "#1e40af",
      secondary: "#64748b",
      background: "#ffffff",
      text: "#1e293b"
    },
    spacing: {
      sectionGap: 32,
      itemGap: 20,
      contentPadding: 40
    },
    basic: {
      layout: "center"
    }
  },
  {
    id: "education",
    name: "教育模板",
    description: "教育专业风格，适合教师和教育工作者",
    thumbnail: "education",
    layout: "education",
    colorScheme: {
      primary: "#7c2d12",
      secondary: "#6b7280",
      background: "#ffffff",
      text: "#1f2937"
    },
    spacing: {
      sectionGap: 24,
      itemGap: 16,
      contentPadding: 32
    },
    basic: {
      layout: "center"
    }
  }
];

export const GITHUB_REPO_URL = "https://github.com/JOYCEQL/magic-resume";

export const PDF_EXPORT_CONFIG = {
  SERVER_URL:
    "https://1255612844-0z3iovadu8.ap-chengdu.tencentscf.com/generate-pdf",
  TIMEOUT: 30000, // 30秒超时
  MAX_RETRY: 3 // 最大重试次数
} as const;
