/**
 * Constants for the image sequence scroller
 */

export const FRAME_COUNT = 120;

export const getFrameUrl = (index: number) => {
  // Format: frame_000_delay-0.067s.webp
  const paddedIndex = index.toString().padStart(3, '0');
  return `/sequence/frame_${paddedIndex}_delay-0.067s.webp`;
};

export const PROJECT_DATA = [
  {
    id: 1,
    title: "iGAMING PLATFORM",
    category: "Lead Frontend",
    description: "Architected a high-scale B2B/B2C platform integrating multi-vendor game engines with custom transaction systems and real-time bankroll management.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "iQua.ai",
    category: "Full Stack",
    description: "A comprehensive assessment ecosystem featuring MCQ/MSQ engines and video-based interviewing modules with advanced hiring workflow automation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
  },
  // {
  //   id: 3,
  //   title: "PERMISSION ARCH",
  //   category: "Architecture / Security",
  //   description: "Successfully transformed legacy static permissions into a fully dynamic, attribute-based access control (ABAC) system for enterprise scale.",
  //   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000&auto=format&fit=crop",
  // },
  // {
  //   id: 4,
  //   title: "CI/CD PIPELINE x AWS",
  //   category: "DevOps / Automation",
  //   description: "Optimized release cycles by 40% through automated AWS Amplify deployments and standardized component-driven development workflows.",
  //   image: "https://images.unsplash.com/photo-1667372333318-3d4493eda530?q=80&w=1000&auto=format&fit=crop",
  // },
];
