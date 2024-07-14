import styled from "styled-components";
import { IconButton } from "../../Button/Icon";
import {
  Play,
  Pause,
  SpeakerSimpleHigh,
  ArrowsOut,
} from "@phosphor-icons/react";
import { useState } from "react";

export interface VideoControlProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const StyledVideoControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.05) 10%,
    rgba(0, 0, 0, 0.9) 100%
  );
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
`;

const VideoControlsInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
`;

/**
 * Video player controls that appear at the bottom of a video if controls is true.
 * Overrides native video controls.
 */
export const VideoControls = ({ videoRef }: VideoControlProps) => {
  const [isPlaying, setIsPlaying] = useState(
    !videoRef?.current?.paused || false,
  );
  const [currentTime, setCurrentTime] = useState(
    videoRef?.current?.currentTime,
  );
  const [duration, setDuration] = useState(videoRef?.current?.duration);
  const [isMuted, setIsMuted] = useState(videoRef?.current?.muted);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef?.current?.pause();
    } else {
      videoRef?.current?.play();
    }
  };

  videoRef?.current?.addEventListener("timeupdate", () => {
    setCurrentTime(Math.round(videoRef.current.currentTime));
    setDuration(Math.round(videoRef?.current?.duration));
  });

  return (
    <StyledVideoControls>
      <VideoControlsInner>
        <IconButton
          icon={isPlaying ? <Pause /> : <Play />}
          onClick={handlePlayPause}
          $size="1.25rem"
        />
      </VideoControlsInner>

      <VideoControlsInner>
        <span>
          {currentTime}/{duration}
        </span>
        <IconButton
          icon={<SpeakerSimpleHigh />}
          onClick={() => {}}
          $size="1.25rem"
        />
        <IconButton icon={<ArrowsOut />} onClick={() => {}} $size="1.25rem" />
      </VideoControlsInner>
    </StyledVideoControls>
  );
};
