import styled from "styled-components";
import { VideoControls, StyledVideoControls } from "./VideoControls";
import { useState, useEffect, useRef } from "react";

export interface VideoProps {
  sources: {
    src: string;
    type: string;
  }[];
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: "none" | "metadata" | "auto";

  $showControls?: "always" | "hover";
  $width: string;
  $height: string;
}

const StyledVideoWrapper = styled.div<Pick<VideoProps, "$showControls">>`
  display: flex;
  position: relative;

  ${({ $showControls }): string => {
    if ($showControls === "hover") {
      return `
        ${StyledVideoControls} {
          opacity: 0;
        }

        &:hover {
          ${StyledVideoControls} {
            opacity: 1;
          }
        }
      `;
    }

    return `
      ${StyledVideoControls} {
        opacity: 1;
      }
    `;
  }}
`;

const StyledVideo = styled.video<Pick<VideoProps, "$width" | "$height">>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border-radius: 0.5rem;
`;

/**
 * A simple video player component
 */
export const Video = ({
  sources,
  controls = true,
  $showControls = "always",
  autoPlay = false,
  loop = false,
  muted = false,
  preload = "metadata",
  $width,
  $height,
}: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      setVideoReady(true);
    }
  }, []);

  return (
    <StyledVideoWrapper
      $showControls={$showControls}
      data-testid="video-wrapper"
    >
      <StyledVideo
        controls={false}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        $width={$width}
        $height={$height}
        preload={preload}
        ref={videoRef}
        data-testid="video-element"
      >
        {sources.map((source, i) => (
          <source key={i} src={source.src} type={source.type} />
        ))}
      </StyledVideo>
      {controls && videoReady && <VideoControls videoRef={videoRef} />}
    </StyledVideoWrapper>
  );
};
