import { render, screen } from "@testing-library/react";
import ErrorMessage from "..";

describe("ErrorMessage", () => {
  it("should render the message", () => {
    render(<ErrorMessage className="p-3" message="Error message" />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });
  it("should render without goHome", () => {
    render(<ErrorMessage className="p-3" message="Error message" />);
    expect(screen.queryByText("BACK TO HOME")).not.toBeInTheDocument();
  });

  it("should render goHome", () => {
    render(
      <ErrorMessage className="p-3" message="Error message" goHome={true} />,
    );

    expect(screen.getByText("BACK TO HOME")).toHaveAttribute("href", "/");
    expect(screen.getByText("BACK TO HOME")).toBeInTheDocument();
  });
});
