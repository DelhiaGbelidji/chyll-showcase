import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the header with navigation", () => {
    render(<Header />);
    expect(screen.getByText("Delhia Gbelidji")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Why Chyll")).toBeInTheDocument();
  });
});
