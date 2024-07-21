// loading spinner tests
import { expect, describe, it } from "vitest";
import { render } from "../../../test/utils";

import { LoadingSpinner } from ".";

describe("LoadingSpinner", () => {
  it("renders a loading spinner when no props are passed", () => {
    const { getByTestId } = render(<LoadingSpinner />);
    const loadingSpinner = getByTestId("loading-spinner");
    expect(loadingSpinner).toBeDefined();
  });

  it("renders a loading spinner when props are passed", () => {
    const { getByTestId } = render(
      <LoadingSpinner
        $size="6rem"
        $ringWidth="1rem"
        $arcColor="#f00"
        $ringColor="#fff"
      />
    );
    const loadingSpinner = getByTestId("loading-spinner");
    expect(loadingSpinner).toBeDefined();
  });
});
