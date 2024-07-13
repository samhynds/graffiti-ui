import { expect, describe, it, beforeAll, vi } from "vitest";
import { render } from "../../test/utils";

import { Time } from ".";

beforeAll(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date("2024-07-13T23:34:32Z"));
});

describe("Time", () => {
  it("renders absolute time correctly", () => {
    const datetime = new Date("2021-01-14T12:34:56Z");

    const { getByText } = render(<Time date={datetime} relative={false} />);

    expect(getByText("14/01/2021, 12:34:56")).toBeDefined();
  });

  it("renders relative time correctly", () => {
    const datetime = new Date("2021-01-14T12:34:56Z");

    const { getByText } = render(<Time date={datetime} relative={true} />);

    expect(getByText("4 years ago")).toBeDefined();
  });
});
