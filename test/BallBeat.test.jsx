import { matchers } from "@emotion/jest";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import BallBeat from "../src/BallBeat";
import { PRIMARY_COLOR } from "../src/style";

expect.extend(matchers);

describe("<BallBeat>", () => {
    afterEach(cleanup);

    test("BallBeat should match snapshot", () => {
        const { container } = render(<BallBeat loading={true} />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test("BallBeat should have default color", () => {
        render(<BallBeat loading={true} />);
        const { container } = render(<BallBeat loading={true} />);

        expect(container.firstChild).toHaveStyle("background-color", PRIMARY_COLOR, {
            target: "> div"
        });
    });

    test("BallBeat should have given color", () => {
        const color = "#000000";
        const { container } = render(<BallBeat color={color} loading={true} />);

        expect(container.firstChild).toHaveStyleRule("background-color", color, {
            target: "> div"
        });
    });

    test("BallBeat should have no children", () => {
        const { container } = render(<BallBeat loading={false} />);

        expect(container.firstChild).toBeNull();
    });

    test("BallBeat should have three children", () => {
        const { container } = render(<BallBeat loading={true} />);

        expect(container.querySelectorAll("div")).toHaveLength(4);
    });
});
