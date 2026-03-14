import punrekHero from "@/assets/vids/punrek.png";
import anomalyDetector from "@/assets/vids/anomaly-detector.jpg";
import healthWellness from "@/assets/vids/health wellness.png";
import verispiFpga from "@/assets/vids/fpgaspi.png";
import biosDiagnostic from "@/assets/vids/bios-diagnostic.jpg";
import uiuxMobileApp from "@/assets/vids/uiux-mobile-app.jpg";
import uiuxWebRedesign from "@/assets/vids/uiux-web-redesign.jpg";
import uiuxBranding from "@/assets/vids/uiux-branding.jpg";
import electronicsEmbedded from "@/assets/vids/electronics-embedded.jpg";
import electronicsPcb from "@/assets/vids/electronics-pcb.jpg";
import greensense from "@/assets/vids/greensense.png";
import legstarImage from "@/assets/vids/LEGSTAR.png";
import ieeeAppImage from "@/assets/vids/IEEEAPP.png";
import cgan from "@/assets/vids/cgan.png";

// Additional imports for videos
import sphereVideo from "@/assets/vids/sphere.mp4";
import wavepoolVideo from "@/assets/vids/wavepool0001-0060.mp4";
import rotationVideo from "@/assets/vids/rotation.mp4";
import djVideo from "@/assets/vids/dj0001-0140.mp4";
import trainVideo from "@/assets/vids/train shot0001-0060.mp4";
import sequenceVideo from "@/assets/vids/0001-0120.mp4";
import extendedVideo from "@/assets/vids/0001-0200.mp4";
import newestVideo from "@/assets/vids/newest0000-0120.mp4";

import { PortfolioCategory } from "@/contexts/PortfolioContext";

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  video?: string;
  links?: {
    live?: string;
    github?: string;
  };
  category: PortfolioCategory;
}

export const projects: Project[] = [
  // Top-ranked projects
  {
    title: "PunRek",
    subtitle: "Flagship Project",
    description:
      "An AI-native EDA platform for India's future. Cloud-based, generative AI-powered design automation for PCBs and chipsets, enabling Indian SMEs to transition from assembly to original design.",
    tags: ["AI/ML", "cGANs", "EDA", "Deep Tech", "Make in India"],
    featured: true,
    image: punrekHero,
    links: { live: "#" },
    category: "technical",
  },
  {
    title: "VeriSPI FPGA Core",
    subtitle: "Hardware Design",
    description:
      "Optimized FPGA-based SPI master-slave system in Verilog with high-speed data transfer and pure synchronous logic. Testbench-driven simulation for digital design.",
    tags: ["Verilog", "FPGA", "Digital Design", "SPI"],
    featured: true,
    image: verispiFpga,
    links: { github: "#" },
    category: "technical",
  },
  {
    title: "BIOS Hardware Diagnostic",
    subtitle: "Systems Tool",
    description:
      "Designed a Linux tool for BIOS-level hardware detection; users extract code, run a script, and select options to automatically display advanced system information, with sudo password input when required. Developed a modular diagnostic suite with shell and C programs for automated checks on CPU, RAM, storage, battery, motherboard, and network, enabling comprehensive BIOS-level hardware analysis and reporting for Linux systems.",
    tags: ["Linux", "Shell", "C", "Bash"],
    featured: true,
    image: biosDiagnostic,
    links: { github: "https://github.com/grizzleyyybear/Hackonanz-Team-Blue" },
    category: "technical",
  },

  // Other projects
  {
    title: "Solar Cell CGAN",
    subtitle: "Generative AI",
    description:
      "Conditional Generative Adversarial Network implementation for solar cell design optimization. Using deep learning to generate novel solar cell architectures with improved efficiency.",
    tags: ["Python", "TensorFlow", "cGAN", "Solar Energy", "Generative AI"],
    image: cgan,
    links: { github: "https://github.com/grizzleyyybear/solar_cell_cgan" },
    category: "technical",
  },
  {
    title: "Greensense Farm Flow",
    subtitle: "Smart Agriculture",
    description:
      "Intelligent farm management system with sensor integration and automated monitoring. TypeScript-based platform for real-time crop monitoring, irrigation control, and yield optimization.",
    tags: ["TypeScript", "IoT", "Smart Agriculture", "Sensor Networks", "Automation"],
    image: greensense,
    links: {
      live: "https://greensense-peach.vercel.app/",
      github: "https://github.com/sumit-8305/Greensense",
    },
    category: "technical",
  },
  {
    title: "Analog Anomaly Detector",
    subtitle: "Signal Processing",
    description:
      "Real-time anomaly detection system for analog signals and sensor data. JavaScript-based implementation with advanced signal processing algorithms for industrial monitoring applications.",
    tags: ["JavaScript", "Signal Processing", "Anomaly Detection", "Real-time", "IoT"],
    image: anomalyDetector,
    links: { github: "https://github.com/grizzleyyybear/anomaly-analog-detector" },
    category: "technical",
  },
  {
    title: "Health & Wellness Analyser",
    subtitle: "Computer Vision",
    description:
      "Developed an AI-powered health and wellness app featuring real-time body and mood analysis, personalized diet plans, and privacy-focused local processing using TensorFlow.js, OpenCV.js, and React. Built a mobile-optimized platform with facial expression recognition, crowd density mapping, and user profile management, delivering secure, real-time health insights and recommendations with advanced computer vision.",
    tags: ["TensorFlow.js", "OpenCV.js", "React", "Face-API"],
    image: healthWellness,
    links: { live: "https://fancy-starburst-5c9828.netlify.app" },
    category: "technical",
  },

  // UI/UX Projects
  {
    title: "Legstar Company Website",
    subtitle: "Web Design Mockup",
    description:
      "Complete website design mockup for Legstar company, featuring modern UI/UX principles, responsive design, and professional branding for corporate presentation.",
    tags: ["Web Design", "Figma", "Corporate Design", "Responsive"],
    image: legstarImage,
    links: { live: "https://www.figma.com/design/0P4DCLcHA2AvjfMQsQtbo6/PROTOTYPE---Mr.1?node-id=0-1&t=VDHP2a8s970v3qFc-1" },
    category: "ui-ux",
  },
  {
    title: "IEEE NSUT Mobile App",
    subtitle: "Mobile App Design",
    description:
      "Complete mobile application design for IEEE NSUT chapter, featuring intuitive navigation, event management, and community engagement features.",
    tags: ["Mobile Design", "Figma", "App Design", "UI/UX"],
    image: ieeeAppImage,
    links: { live: "https://www.figma.com/design/pUmO62XVSxRCQxnUON3EhE/IEEE-NSUT-APP?node-id=530-3443&t=cjuUPo59v6RIlylL-1" },
    category: "ui-ux",
  },
  {
    title: "3D Sphere Animation",
    subtitle: "3D Render",
    description:
      "A mesmerizing 3D sphere that floats and rotates with smooth, fluid motion. Watch as light dances across its surface, creating beautiful reflections and shadows. One of my original 3D renders showcasing advanced animation techniques.",
    tags: ["3D Animation", "Blender", "Rendering", "Motion Graphics"],
    video: sphereVideo,
    category: "ui-ux",
  },
  {
    title: "Wave Pool Simulation",
    subtitle: "3D Fluid Dynamics",
    description:
      "Dive into this realistic water simulation featuring gentle waves rippling across a pool surface. The physics are incredibly lifelike, with water particles interacting naturally. A complex fluid dynamics render I created from scratch.",
    tags: ["3D Rendering", "Fluid Simulation", "Blender", "VFX"],
    video: wavepoolVideo,
    category: "ui-ux",
  },
  {
    title: "Rotational Geometry",
    subtitle: "3D Abstract Art",
    description:
      "Watch these geometric shapes dance in perfect harmony, rotating endlessly in 3D space. It's hypnotizing to see the mathematical precision come alive. An abstract 3D art piece I designed and rendered.",
    tags: ["3D Art", "Geometry", "Animation", "Abstract"],
    video: rotationVideo,
    category: "ui-ux",
  },
  {
    title: "DJ Interface Animation",
    subtitle: "3D UI Elements",
    description:
      "An interactive 3D DJ interface that comes to life with animated controls and glowing effects. Perfect for visualizing modern music production tools. A custom 3D interface design I built and animated.",
    tags: ["3D UI", "Interface Design", "Animation", "Interactive"],
    video: djVideo,
    category: "ui-ux",
  },
  {
    title: "Train Journey Sequence",
    subtitle: "3D Motion Study",
    description:
      "Take a cinematic journey on this beautifully detailed train as it moves through stunning 3D environments. Every detail from the tracks to the scenery is meticulously crafted. A motion study render I created to explore cinematic techniques.",
    tags: ["3D Animation", "Cinematic", "Motion Study", "Environment"],
    video: trainVideo,
    category: "ui-ux",
  },
  {
    title: "Complex Sequence Render",
    subtitle: "3D Multi-shot",
    description:
      "An extended 3D sequence that showcases multiple camera angles and dynamic lighting setups. Each shot tells its own visual story. A multi-angle composition render demonstrating advanced 3D techniques.",
    tags: ["3D Rendering", "Multi-angle", "Lighting", "Composition"],
    video: sequenceVideo,
    category: "ui-ux",
  },
  {
    title: "Extended Animation Study",
    subtitle: "3D Long-form",
    description:
      "A longer-form 3D animation that explores sustained storytelling through motion. It's amazing how much personality you can give to objects in 3D space. An extended animation piece I developed to push creative boundaries.",
    tags: ["3D Animation", "Long-form", "Narrative", "Technical"],
    video: extendedVideo,
    category: "ui-ux",
  },
  {
    title: "Newest Render Collection",
    subtitle: "3D Latest Work",
    description:
      "My latest collection of 3D renders, pushing the boundaries of what's possible with modern rendering techniques. Each piece represents my current artistic and technical capabilities. A showcase of my most recent 3D work and experiments.",
    tags: ["3D Rendering", "Latest Work", "VFX", "Contemporary"],
    video: newestVideo,
    category: "ui-ux",
  },
];
