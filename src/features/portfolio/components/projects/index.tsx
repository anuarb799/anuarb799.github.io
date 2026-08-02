import { Tag } from "@/components/ui/tag";

import { PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel";
import { ModelEvidence } from "./model-evidence";
import { PointCloudViewer } from "./point-cloud-viewer";
import { ProjectVideo } from "./project-video";
import { SystemWorkflow } from "./system-workflow";

export function Projects() {
  const project = PROJECTS[0];

  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <article>
        <div className="screen-line-after px-4 py-5 sm:px-6 sm:py-6">
          <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Capstone · 3D reconstruction
          </p>
          <h3 className="mt-2 max-w-2xl text-xl leading-tight font-semibold text-balance sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.description}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {project.contribution}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.skills.map((skill) => (
              <li key={skill} className="flex">
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <SystemWorkflow />

        <ModelEvidence />

        <header className="relative left-1/2 w-[calc(100vw-1rem)] -translate-x-1/2 border-x border-b border-edge px-4 py-5 sm:px-6">
          <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Scene reconstruction
          </p>
          <h4 className="mt-2 text-xl leading-tight font-semibold text-balance sm:text-2xl">
            Interactive NeRF output and source capture
          </h4>
        </header>

        <div className="relative left-1/2 grid w-[calc(100vw-1rem)] -translate-x-1/2 border-x border-edge sm:grid-cols-2">
          <figure className="min-w-0 sm:border-r sm:border-edge">
            <figcaption className="flex min-h-14 items-center justify-between gap-3 border-b border-edge px-4 py-3">
              <span className="text-sm font-medium">NeRF reconstruction</span>
              <span className="text-right font-mono text-[11px] leading-tight text-muted-foreground">
                Drag to rotate
                <br />
                Scroll to zoom
              </span>
            </figcaption>
            <PointCloudViewer src={project.model} />
          </figure>

          <figure className="min-w-0 border-t border-edge sm:border-t-0">
            <figcaption className="flex min-h-14 items-center border-b border-edge px-4 py-3">
              <span className="text-sm font-medium">Reference capture</span>
            </figcaption>
            <ProjectVideo src={project.video} />
          </figure>
        </div>
      </article>
    </Panel>
  );
}
