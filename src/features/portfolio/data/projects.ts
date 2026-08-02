export const PROJECTS = [
  {
    id: "autonomous-wildfire-detection",
    title: "Capstone Project: Autonomous Wildfire Detection",
    skills: ["STM32", "Infrared Vision", "YOLO", "NeRF", "3D Reconstruction"],
    description:
      "An autonomous wildfire intelligence system combining an STM32-controlled drone, RGB and infrared fire detection models, and a custom NeRF pipeline that turns captured video into spatial context for firefighters.",
    contribution:
      "All project work shown on this website is my personal work and direct contribution to the capstone project.",
    model: "/projects/wildfire/wildfire-nerf.ply",
    video: "/projects/wildfire/forest-reference.mp4",
  },
] as const;

export type PortfolioProject = (typeof PROJECTS)[number];
