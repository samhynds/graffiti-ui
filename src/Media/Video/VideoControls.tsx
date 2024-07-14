import styled from "styled-components";
import { IconButton, StyledIconButton } from "../../Button/Icon";
import {
  Play,
  Pause,
  SpeakerSimpleHigh,
  SpeakerSimpleSlash,
} from "@phosphor-icons/react";
import { useState } from "react";
import { StyledRow } from "../../Layout/Row";

export interface VideoControlProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

interface SeekBarProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  currentTime: number;
  duration: number;
}

export const StyledVideoControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 1rem;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.05) 10%,
    rgba(0, 0, 0, 0.7) 100%
  );
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  transition: opacity 0.2s;
`;

const VideoControlsTop = styled(StyledRow)`
  width: 100%;
  border-radius: 2px;
`;

const VideoControlsBottom = styled(StyledRow)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${StyledIconButton} {
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  ${StyledIconButton}:hover {
    color: white;
    opacity: 1;
  }
`;

const VideoControlsInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
`;

const StyledSeekBar = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;

  &:hover {
    height: 6px;
    margin-top: -4px;
    cursor: pointer;
  }
`;

const StyledSeekBarProgress = styled.div`
  height: 100%;
  width: 0;
  background: white;
  border-radius: 4px;
`;

const SeekBar = ({ currentTime, duration, videoRef }: SeekBarProps) => {
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const seekTo = (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * 100;
    videoRef.current!.currentTime = (seekTo / 100) * Number(duration);
  };

  return (
    <StyledSeekBar onClick={handleSeek}>
      <StyledSeekBarProgress
        style={{
          width: `${(Number(currentTime) / Number(duration)) * 100}%`,
        }}
      />
    </StyledSeekBar>
  );
};

/**
 * Video player controls that appear at the bottom of a video if controls is true.
 * Overrides native video controls.
 */
export const VideoControls = ({ videoRef }: VideoControlProps) => {
  const [isPlaying, setIsPlaying] = useState(
    !videoRef.current!.paused || false,
  );
  const [currentTime, setCurrentTime] = useState(
    String(videoRef.current!.currentTime),
  );
  const [duration, setDuration] = useState(String(videoRef.current!.duration));
  const [rawTime, setRawTime] = useState(videoRef.current!.currentTime);
  const [rawDuration, setRawDuration] = useState(videoRef.current!.duration);
  const [isMuted, setIsMuted] = useState(videoRef.current!.muted);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current!.pause();
    } else {
      videoRef.current!.play();
    }
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
    videoRef.current!.muted = !isMuted;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    let secondsStr = `${seconds}`;
    let minutesStr = `${minutes}`;

    if (seconds < 10) {
      secondsStr = `0${seconds}`;
    }

    if (minutes < 10) {
      minutesStr = `0${minutes}`;
    }

    return `${minutesStr}:${secondsStr}`;
  };

  videoRef.current!.addEventListener("loadedmetadata", () => {
    setCurrentTime(formatTime(videoRef.current!.currentTime));
    setDuration(formatTime(videoRef.current!.duration));
    setRawDuration(videoRef.current!.duration);
  });

  videoRef.current!.addEventListener("timeupdate", () => {
    setCurrentTime(formatTime(videoRef.current!.currentTime));
    setRawTime(videoRef.current!.currentTime);
  });

  videoRef.current!.addEventListener("ended", () => setIsPlaying(false));

  return (
    <StyledVideoControls>
      <VideoControlsTop>
        <SeekBar
          currentTime={rawTime}
          duration={rawDuration}
          videoRef={videoRef}
        />
      </VideoControlsTop>
      <VideoControlsBottom>
        <VideoControlsInner>
          <IconButton
            icon={isPlaying ? <Pause weight="fill" /> : <Play weight="fill" />}
            onClick={handlePlayPause}
            $size="1.4rem"
          />
        </VideoControlsInner>

        <VideoControlsInner>
          <span>
            {currentTime} / {duration}
          </span>
          <IconButton
            icon={isMuted ? <SpeakerSimpleSlash /> : <SpeakerSimpleHigh />}
            onClick={handleMute}
            $size="1.4rem"
          />
        </VideoControlsInner>
      </VideoControlsBottom>
    </StyledVideoControls>
  );
};
