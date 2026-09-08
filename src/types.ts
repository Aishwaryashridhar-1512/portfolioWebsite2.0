export interface NavItem {
  id: string;
  label: string;
}

export interface PipelineStage {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  detail: string;
  dim: string;
  latency: string;
  status: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  githubUrl: string;
}

export interface EthosStep {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface ExperienceItem {
  type: string;
  year: string;
  title: string;
  tagline: string;
  organizerOrTeammate: string;
  problem?: string;
  solution?: string;
  impact?: string;
  description?: string;
  tags: string[];
}

export interface TechCategory {
  category: string;
  icon: string;
  items: { name: string; tag: string }[];
}

export interface CertificationItem {
  module: string;
  title: string;
  status: string;
  issuer: string;
}
