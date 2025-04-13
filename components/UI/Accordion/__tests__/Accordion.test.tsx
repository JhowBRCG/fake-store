import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "..";

jest.mock("react-icons/io", () => ({
  IoIosArrowDown: () => <svg data-testid="icon-down" />,
  IoIosArrowUp: () => <svg data-testid="icon-up" />,
}));

describe("Accordion", () => {
  const title = "Details";
  const content = "Accordion content";

  it("should render the title", () => {
    render(<Accordion title={title}>{content}</Accordion>);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("should not show the content initially", () => {
    const { container } = render(
      <Accordion title={title}>{content}</Accordion>,
    );
    const contentWrapper = container.querySelector(".grid");
    expect(contentWrapper).toHaveClass("grid-rows-[0fr]");
  });

  it("should show content and arrow up when clicked", () => {
    const { container } = render(
      <Accordion title={title}>{content}</Accordion>,
    );
    const contentWrapper = container.querySelector(".grid");

    fireEvent.click(screen.getByText(title));

    expect(screen.getByTestId("icon-up")).toBeInTheDocument();
    expect(screen.queryByTestId("icon-down")).not.toBeInTheDocument();
    expect(contentWrapper).toHaveClass("grid-rows-[1fr]");
  });

  it("should close content and show arrow down when clicked", () => {
    const { container } = render(
      <Accordion title={title}>{content}</Accordion>,
    );
    const contentWrapper = container.querySelector(".grid");

    fireEvent.click(screen.getByText(title));
    fireEvent.click(screen.getByText(title));

    expect(screen.getByTestId("icon-down")).toBeInTheDocument();
    expect(screen.queryByTestId("icon-up")).not.toBeInTheDocument();
    expect(contentWrapper).toHaveClass("grid-rows-[0fr]");
  });
});
