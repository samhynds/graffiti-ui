import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";
import { Video } from ".";

describe("Video", () => {
  it("renders video component with sources", () => {
    const sources = [
      { src: "video1.mp4", type: "video/mp4" },
      { src: "video2.webm", type: "video/webm" },
    ];

    const { getByTestId } = render(
      <Video sources={sources} $width="640px" $height="360px" />
    );

    const videoElement = getByTestId("video-element");
    expect(videoElement).toBeDefined();
    expect(videoElement.querySelectorAll("source").length).toEqual(2);
  });

  it("renders controls when controls prop is true", () => {
    const sources = [{ src: "video.mp4", type: "video/mp4" }];

    const { getByTestId } = render(
      <Video sources={sources} controls={true} $width="640px" $height="360px" />
    );

    const controlsElement = getByTestId("video-controls");
    expect(controlsElement).toBeDefined();
  });

  it("does not render controls when controls prop is false", () => {
    const sources = [{ src: "video.mp4", type: "video/mp4" }];

    const { queryByTestId } = render(
      <Video
        sources={sources}
        controls={false}
        $width="640px"
        $height="360px"
      />
    );

    const controlsElement = queryByTestId("video-controls");
    expect(controlsElement).toBeNull();
  });

  it("plays video when autoPlay prop is true", () => {
    const sources = [{ src: "video.mp4", type: "video/mp4" }];

    const { getByTestId } = render(
      <Video sources={sources} autoPlay={true} $width="640px" $height="360px" />
    );

    const videoElement = getByTestId("video-element") as HTMLVideoElement;
    expect(videoElement.autoplay).toBe(true);
  });

  it("shows the controls when $showControls prop is set to 'always'", () => {
    const sources = [{ src: "video.mp4", type: "video/mp4" }];
    const { getByTestId } = render(
      <Video
        sources={sources}
        $showControls="always"
        $width="640px"
        $height="360px"
      />
    );

    const controlsElement = getByTestId("video-controls");
    expect(controlsElement).toBeDefined();
  });
});
