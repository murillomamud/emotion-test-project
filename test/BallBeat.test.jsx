import { matchers } from "@emotion/jest";
import { render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import BallBeat from "../src/BallBeat";
import { PRIMARY_COLOR } from "../src/style";

expect.extend(matchers);

describe("<BallBeat>", () => {
    afterEach(cleanup);

    test("should have default color", () => {
        const { getByTestId } = render(<BallBeat loading />);
        expect(getByTestId("ball-beat-container").querySelector("div")).toHaveStyle(
            `background-color: ${PRIMARY_COLOR}`
        );
    });

    test("should have given color", () => {
        const { getByTestId } = render(<BallBeat loading color="red" />);
        expect(getByTestId("ball-beat-container").querySelector("div")).toHaveStyle(
            "background-color: red"
        );
    });

}); 
