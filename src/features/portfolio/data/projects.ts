import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "geographic-information-system",
    title: "Geographic Information System",
    period: {
      start: "09.2023",
      end: "12.2023",
    },
    link: "https://www.youtube.com/watch?v=5z04O_qTp3s",
    skills: [
      "C/C++",
      "OpenGL",
      "OpenStreetMap",
      "TomTom API",
      "OpenWeatherMap API",
      "A* Algorithm",
      "Dijkstra",
      "BK-Trees",
    ],
    description: `Created as part of the ECE297 course (Software Design and Communication).

**Key Features:**
- Level of Detail (LOD) loaded according to zoom level for responsiveness
- Smart text suggestions using BK-Trees
- Pathfinding with A* and Dijkstra algorithms
- Live traffic data integration via TomTom API
- Live weather data integration via OpenWeatherMap API
- Raw geographic data from OpenStreetMap`,
    isExpanded: true,
  },
  {
    id: "acne-detection-localization",
    title: "Acne Detection & Localization",
    period: {
      start: "09.2024",
      end: "12.2024",
    },
    link: "#",
    skills: [
      "Python",
      "PyTorch",
      "NumPy",
      "Pandas",
      "Hugging Face",
      "RCNN",
      "Computer Vision",
      "Deep Learning",
    ],
    description: `Created as part of the APS360 course (Applied Fundamentals of Deep Learning).

**Key Features:**
- ACNE04 Dataset processing
- Data quality improvement using Hugging Face for removing poor quality images
- Development of RCNN algorithm for detection and localization
- Experimentation with various architectures

**Results:**
- Accuracy: 62%
- Precision: 73%`,
  },
  {
    id: "digital-pen",
    title: "Digital Pen",
    period: {
      start: "01.2024",
      end: "04.2024",
    },
    link: "#",
    skills: [
      "STM32F4",
      "MPU6050",
      "Kalman Filter",
      "I2C",
      "DMA",
      "3D Printing",
      "Embedded Systems",
    ],
    description: `A hardware project that converts analog drawings to digital format.

**Key Features:**
- Microcontroller: STM32F4 series
- Motion sensors: MPU6050 (Accelerometer + Gyroscope)
- Position estimation using Kalman filter (Complementary Filter in earlier iterations)
- 3D printed peripheral attached to a regular bullet pen
- I2C communication with DMA for efficient data transfer
- Real-time conversion of drawings on paper to digital format`,
  },
];
