import {
  ArrowDownIcon,
  ArrowRightIcon,
  BrainCircuitIcon,
  CameraIcon,
  CpuIcon,
  CuboidIcon,
  DroneIcon,
  FlameIcon,
  RadioTowerIcon,
  ThermometerIcon,
  VideoIcon,
} from "lucide-react";

const stages = [
  {
    number: "01",
    eyebrow: "Platform",
    title: "Autonomous drone",
    icon: DroneIcon,
    details: [
      { icon: CpuIcon, label: "STM32 control" },
      { icon: RadioTowerIcon, label: "Onboard acquisition" },
    ],
  },
  {
    number: "02",
    eyebrow: "Capture",
    title: "Multimodal sensing",
    icon: CameraIcon,
    details: [
      { icon: CameraIcon, label: "RGB video stream" },
      { icon: ThermometerIcon, label: "Infrared stream" },
    ],
  },
  {
    number: "03",
    eyebrow: "Inference",
    title: "Parallel ML models",
    icon: BrainCircuitIcon,
    details: [
      { icon: CameraIcon, label: "RGB fire model" },
      { icon: ThermometerIcon, label: "Infrared fire model" },
    ],
  },
  {
    number: "04",
    eyebrow: "Reconstruction",
    title: "Scene intelligence",
    icon: CuboidIcon,
    details: [
      { icon: FlameIcon, label: "Fire presence decision" },
      { icon: VideoIcon, label: "Video flow → custom NeRF point cloud" },
    ],
  },
  {
    number: "05",
    eyebrow: "Response",
    title: "Firefighter output",
    icon: RadioTowerIcon,
    details: [
      { icon: FlameIcon, label: "Early detection alert" },
      { icon: CuboidIcon, label: "Spatial scene context" },
    ],
  },
] as const;

export function SystemWorkflow() {
  return (
    <section
      aria-labelledby="system-workflow-title"
      className="relative left-1/2 w-[calc(100vw-1rem)] -translate-x-1/2 border-x border-edge"
    >
      <header className="border-b border-edge px-4 py-5 sm:px-6">
        <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
          System architecture
        </p>
        <div className="mt-2 grid gap-2 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.7fr)] lg:items-end">
          <h4
            id="system-workflow-title"
            className="max-w-3xl text-xl leading-tight font-semibold text-balance sm:text-2xl"
          >
            From onboard sensing to operational 3D intelligence
          </h4>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
            RGB and infrared streams feed specialized detection models while the
            captured video is reconstructed into a point cloud for spatial
            understanding.
          </p>
        </div>
      </header>

      <ol className="grid lg:grid-cols-5">
        {stages.map((stage, index) => {
          const StageIcon = stage.icon;

          return (
            <li
              key={stage.number}
              className="relative min-w-0 border-b border-edge px-4 py-5 last:border-b-0 lg:min-h-72 lg:border-r lg:border-b-0 lg:last:border-r-0"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                    {stage.number} / {stage.eyebrow}
                  </span>
                  <h5 className="mt-2 max-w-48 text-base leading-snug font-semibold">
                    {stage.title}
                  </h5>
                </div>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-edge bg-muted/60 text-foreground">
                  <StageIcon className="size-4" aria-hidden />
                </span>
              </div>

              <ul className="mt-7 space-y-2.5">
                {stage.details.map((detail) => {
                  const DetailIcon = detail.icon;

                  return (
                    <li
                      key={detail.label}
                      className="flex min-h-10 items-center gap-2.5 border border-edge bg-background px-3 py-2 text-xs leading-snug text-muted-foreground"
                    >
                      <DetailIcon
                        className="size-3.5 shrink-0 text-foreground"
                        aria-hidden
                      />
                      <span>{detail.label}</span>
                    </li>
                  );
                })}
              </ul>

              {index < stages.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute right-1/2 -bottom-3 z-10 flex size-6 translate-x-1/2 items-center justify-center rounded-full border border-edge bg-background text-muted-foreground lg:top-1/2 lg:-right-3 lg:bottom-auto lg:translate-x-0 lg:-translate-y-1/2"
                >
                  <ArrowDownIcon className="size-3.5 lg:hidden" />
                  <ArrowRightIcon className="hidden size-3.5 lg:block" />
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
