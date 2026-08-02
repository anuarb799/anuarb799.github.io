import Image from "next/image";

export function ModelEvidence() {
  return (
    <section
      aria-labelledby="model-evidence-title"
      className="relative left-1/2 w-[calc(100vw-1rem)] -translate-x-1/2 border-x border-edge"
    >
      <header className="border-b border-edge px-4 py-5 sm:px-6">
        <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
          Model evidence
        </p>
        <h4
          id="model-evidence-title"
          className="mt-2 text-xl leading-tight font-semibold text-balance sm:text-2xl"
        >
          YOLO training and validation
        </h4>
      </header>

      <div className="grid lg:grid-cols-2">
        <figure className="min-w-0 border-b border-edge lg:border-r lg:border-b-0">
          <div className="flex min-h-14 items-center justify-between gap-3 border-b border-edge px-4 py-3">
            <figcaption className="text-sm font-medium">
              Class confusion matrix
            </figcaption>
            <span className="font-mono text-[11px] text-muted-foreground">
              4 classes
            </span>
          </div>
          <div className="bg-[oklch(0.985_0_0)] p-2 sm:p-4">
            <Image
              src="/projects/wildfire/yolo-confusion-matrix.png"
              alt="YOLO confusion matrix for fire, smoke, other, and background classes"
              width={3000}
              height={2250}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
              unoptimized
            />
          </div>
          <p className="border-t border-edge px-4 py-3 text-xs leading-relaxed text-muted-foreground">
            Class-level detection behavior across fire, smoke, other, and
            background samples.
          </p>
        </figure>

        <figure className="min-w-0">
          <div className="flex min-h-14 items-center justify-between gap-3 border-b border-edge px-4 py-3">
            <figcaption className="text-sm font-medium">
              Training diagnostics
            </figcaption>
            <span className="font-mono text-[11px] text-muted-foreground">
              50 epochs
            </span>
          </div>
          <div className="flex min-h-0 items-center bg-[oklch(0.985_0_0)] p-2 sm:p-4 lg:aspect-[4/3]">
            <Image
              src="/projects/wildfire/yolo-training-results.png"
              alt="YOLO training and validation loss, precision, recall, and mean average precision plots"
              width={2400}
              height={1200}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
              unoptimized
            />
          </div>
          <p className="border-t border-edge px-4 py-3 text-xs leading-relaxed text-muted-foreground">
            Training and validation losses alongside precision, recall, and mAP
            across 50 epochs.
          </p>
        </figure>
      </div>
    </section>
  );
}
