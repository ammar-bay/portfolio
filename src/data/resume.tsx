import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Database } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { FastAPI } from "@/components/ui/svgs/fastapi";
import { Spark } from "@/components/ui/svgs/spark";
import { Redis } from "@/components/ui/svgs/redis";
import { AWS } from "@/components/ui/svgs/aws";
import { Azure } from "@/components/ui/svgs/azure";
import { GoogleCloud } from "@/components/ui/svgs/googlecloud";
// import { PyTorch } from "@/components/ui/svgs/pytorch";
// import { TensorFlow } from "@/components/ui/svgs/tensorflow";
import { NumPy } from "@/components/ui/svgs/numpy";
import { Pandas } from "@/components/ui/svgs/pandas";
// import { HuggingFace } from "@/components/ui/svgs/huggingface";
import { LangChain } from "@/components/ui/svgs/langchain";
import { Databricks } from "@/components/ui/svgs/databricks";
import { DeltaLake } from "@/components/ui/svgs/delta-lake";
// import { Snowflake } from "@/components/ui/svgs/snowflake";
import { Dbt } from "@/components/ui/svgs/dbt";
import { Elasticsearch } from "@/components/ui/svgs/elasticsearch";
import { Airflow } from "@/components/ui/svgs/airflow";
import { Kafka } from "@/components/ui/svgs/kafka";
import { Terraform } from "@/components/ui/svgs/terraform";
import { Git } from "@/components/ui/svgs/git";

export const DATA = {
  name: "Muhammad Ammar Ibrahim",
  initials: "MA",
  url: "https://ammaribrahim.dev",
  location: "Lahore, Pakistan (Open to Relocation)",
  locationLink: "https://www.google.com/maps/place/lahore",
  description:
    "Senior AI Engineer & SaaS Founder. I build production AI systems, autonomous agents, and RAG platforms — owning the full stack from LLM orchestration to cloud deployment.",
  summary:
    "I'm a Senior AI Engineer with 4+ years building production AI systems and agentic workflows across AWS, Azure, and GCP. I founded and shipped [VidSpotAI](https://vidspotai.com) — an autonomous multi-agent video platform (plan → execute → critique → quality-gate) that grew to 1,200+ paying customers — and [MyCounsel](https://mycounsel.co), a RAG-powered legal intelligence platform over 230K+ documents. I love turning messy manual processes into reliable, automated systems: LLM orchestration, eval harnesses, vector search, and the data pipelines underneath. I currently work as a Senior Data Engineer while building my own products. Most of my work lives on [GitHub](https://github.com/ammar-bay).",
  avatarUrl: "/images/ammar.jpeg",
  skills: [
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "React", icon: ReactLight },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "LLM Agents", icon: Icons.openai },
    { name: "RAG / Vector Search", icon: Database },
    { name: "FastAPI", icon: FastAPI },
    { name: "PySpark", icon: Spark },
    { name: "Redis / BullMQ", icon: Redis },
    { name: "AWS", icon: AWS },
    { name: "Azure", icon: Azure },
    { name: "GCP", icon: GoogleCloud },
    { name: "LangChain", icon: LangChain },
    // { name: "PyTorch", icon: PyTorch },
    // { name: "TensorFlow", icon: TensorFlow },
    // { name: "Hugging Face", icon: HuggingFace },
    { name: "Pandas", icon: Pandas },
    { name: "NumPy", icon: NumPy },
    { name: "Databricks", icon: Databricks },
    { name: "Delta Lake", icon: DeltaLake },
    { name: "Apache Airflow", icon: Airflow },
    { name: "Apache Kafka", icon: Kafka },
    // { name: "Snowflake", icon: Snowflake },
    { name: "dbt", icon: Dbt },
    { name: "Elasticsearch", icon: Elasticsearch },
    { name: "Terraform", icon: Terraform },
    { name: "Git", icon: Git },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aizhar.ali@visionet.com",
    tel: "+92-303-6547188",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ammar-bay",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/m-ammar-ibrahim",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:aizhar.ali@visionet.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MyCounsel",
      href: "https://mycounsel.co",
      badges: [],
      location: "Remote",
      title: "Founder & AI Engineer",
      logoUrl: "/images/mycounsel-red.png",
      start: "Mar 2026",
      end: "Present",
      description:
        "Founded and independently built a RAG-powered legal intelligence platform over ~230K case records (1947–2025). Fault-tolerant multi-source ETL into normalized Postgres, a distributed embedding pipeline over OpenAI's Batch API populating pgvector and Qdrant, and hybrid lexical-semantic search (BM25 + dense) delivering sub-second results across the full case-law corpus.",
    },
    {
      company: "VidSpotAI",
      href: "https://vidspotai.com",
      badges: [],
      location: "Remote",
      title: "Founder & Senior AI Engineer",
      logoUrl: "/images/vidspot-light.png",
      start: "Dec 2025",
      end: "Present",
      description:
        "Founded and independently built an autonomous AI agent that turns a single prompt into a finished multi-scene video — a plan-then-execute pipeline routing across 13+ providers and 60+ models, with an LLM-as-judge eval harness, quality gate, and self-healing repair engine. Grew to 1,200+ paying customers and 32K+ users with $0 paid marketing.",
    },
    {
      company: "Systems Ltd",
      href: "https://systemsltd.com",
      badges: [],
      location: "Lahore, Pakistan",
      title: "Senior Data Engineer",
      logoUrl: "/images/systems.jpg",
      start: "Jan 2026",
      end: "Present",
      description:
        "Decomposed a monolithic monthly batch ingestion job into daily and monthly processing layers on Azure Databricks, improving data freshness for downstream investment-accounting workflows. Built batch ingestion pipelines processing financial trading data from BlackRock Aladdin and core accounting systems across 7+ upstream sources for a large-scale insurance investment platform, and led a one-time historical data migration for MetLife into ADLS-backed Delta Lake tables.",
    },
    {
      company: "Dubizzle Labs",
      href: "https://dubizzlelabs.com",
      badges: [],
      location: "Lahore, Pakistan",
      title: "Data Engineer",
      logoUrl: "/images/dubizzlabs.png",
      start: "Apr 2024",
      end: "Jan 2026",
      description:
        "Engineered CDC-based replication pipelines from PostgreSQL using replication-slot processing with Python multiprocessing, significantly improving ingestion throughput. Built OpenSearch indexing pipelines processing millions of records per day for sub-second search, designed star-schema dimensional models for the automotive domain, and orchestrated full/incremental/CDC ingestion with Kubernetes CronJobs. Implemented Row-Level Security and Dynamic Data Masking in Amazon Redshift.",
    },
    {
      company: "Nowasys",
      href: "",
      badges: [],
      location: "Remote",
      title: "Data Engineer",
      logoUrl: "/images/nowasys.png",
      start: "Jun 2023",
      end: "Mar 2024",
      description:
        "Developed and optimized PySpark pipelines for large-scale data processing via partition tuning, broadcast joins, and strategic caching. Designed master-to-master MySQL replication for high availability, built pipeline monitoring and alerting infrastructure, and delivered Power BI dashboards surfacing key business metrics across multiple business units.",
    },
    {
      company: "Smodin",
      href: "https://smodin.io",
      badges: [],
      location: "Remote",
      title: "AI Engineer",
      logoUrl: "/images/smodin.png",
      start: "Nov 2022",
      end: "Feb 2023",
      description:
        "Fine-tuned OpenAI models for automated text classification, iterating on prompt design, training-data curation, and evaluation methodology. Ran comparative evaluation of multiple LLMs for text generation and categorization to inform production model selection, and built web-scraping and annotation pipelines to generate structured training datasets.",
    },
  ],
  education: [
    {
      school: "Lahore University of Management Sciences (LUMS)",
      href: "https://lums.edu.pk",
      degree: "Bachelor of Science",
      logoUrl: "/images/lums.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "VidSpotAI",
      href: "https://vidspotai.com",
      dates: "2024 - Present",
      active: true,
      description:
        "Autonomous multi-model AI video platform. A single prompt becomes a finished multi-scene video — a Haiku-router classifies intent, a planner decomposes the storyboard, an executor drives generation across 13+ providers and 60+ models, and dual critics plus a quality gate score and gate the output. Grew to **1,200+ paying customers** and 32K+ users with $0 paid marketing.",
      technologies: [
        "Next.js",
        "Node.js",
        "FastAPI",
        "LLM Agents",
        "BullMQ / Redis",
        "Stripe",
        "Vercel AI Gateway",
      ],
      links: [
        {
          type: "Website",
          href: "https://vidspotai.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/vidspot-website.jpeg",
      video: "",
    },
    {
      title: "MyCounsel",
      href: "https://mycounsel.co",
      dates: "2024 - Present",
      active: true,
      description:
        "RAG-powered legal intelligence platform over **230K+ legal case records** (1947–2025). Fault-tolerant multi-source ETL into normalized Postgres, a distributed embedding pipeline over OpenAI's Batch API populating pgvector and Qdrant, and hybrid lexical-semantic search (BM25 + dense) delivering sub-second results across the full case-law corpus.",
      technologies: [
        "RAG",
        "pgvector",
        "Qdrant",
        "Elasticsearch",
        "Postgres",
        "OpenAI",
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://mycounsel.co",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/mycounsel-website.jpeg",
      video: "",
    },
    {
      title: "PyReplicatorX",
      href: "https://pypi.org/project/pyreplicatorx/",
      dates: "Open Source",
      active: true,
      description:
        "A pip-installable CDC & bulk-load library for PostgreSQL (WAL2JSON) and MySQL (binlog) with native Redshift, Snowflake, and BigQuery destinations — a lightweight, Python-native alternative to Airbyte with no JVM dependency. Unified `NormalizedRecord` abstraction, Parquet staging, automatic schema evolution, and SQLite-backed checkpointing.",
      technologies: [
        "Python",
        "PostgreSQL",
        "MySQL",
        "Redshift",
        "Snowflake",
        "BigQuery",
        "PyArrow",
      ],
      links: [
        {
          type: "PyPI",
          href: "https://pypi.org/project/pyreplicatorx/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/pyreplicatorX.jpeg",
      video: "",
    },
    {
      title: "BrightHouse — Platform Modernization",
      href: "",
      dates: "Notable Project",
      active: true,
      description:
        "Led migration from a 10-node HDInsight cluster ($50K/month) to Azure Databricks Serverless, cutting infrastructure cost **~80%** to ~$10K/month with no loss in throughput or SLA. Executed a UCX-based Unity Catalog migration and converted legacy Scala Spark pipelines to PySpark with Databricks Asset Bundles for reproducible IaC.",
      technologies: [
        "Azure Databricks",
        "PySpark",
        "Unity Catalog",
        "Delta Lake",
        "IaC",
      ],
      links: [],
      image: "/images/hdi-to-dbx-migration.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
