import { render, screen } from "@testing-library/react";
import ProductImage from "..";

const srcMock = "https://example.com/image.jpg";
const altMock = "Product 1";

describe("ProductImage", () => {
  it("should render the image with correct alt", () => {
    render(<ProductImage src={srcMock} alt={altMock} />);

    expect(screen.getByAltText(altMock)).toBeInTheDocument();
  });

  it("should render the image with correct src", () => {
    render(<ProductImage src={srcMock} alt={altMock} />);

    const img = screen.getByAltText(altMock) as HTMLImageElement;

    expect(img.src).toContain(encodeURIComponent(srcMock));

    screen.debug();
  });
});
