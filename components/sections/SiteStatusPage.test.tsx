import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SiteStatusPage from "./SiteStatusPage";

vi.mock("@/components/layouts/Navbar", () => ({
  default: () => <nav>Heritage nav</nav>,
}));

vi.mock("@/components/layouts/Footer", () => ({
  default: () => <footer>Heritage footer</footer>,
}));

vi.mock("@/components/shared/AgentPhoto", () => ({
  default: () => <img alt="Dr. Jan Duffy portrait" />,
}));

describe("SiteStatusPage", () => {
  it("shows NAP and a phone CTA", () => {
    render(
      <SiteStatusPage
        title="That page is not on this site"
        description="Use the homepage search."
      />,
    );

    expect(
      screen.getByRole("heading", { name: "That page is not on this site" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Crossbridge Dr/)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Call \(702\) 500-1942/ }),
    ).toHaveAttribute("href", "tel:+17025001942");
  });

  it("renders try-again when a retry handler is provided", () => {
    const onRetry = vi.fn();
    render(
      <SiteStatusPage
        title="This page hit a snag"
        description="Try again."
        onRetry={onRetry}
        digest="abc123"
      />,
    );

    screen.getByRole("button", { name: "Try again" }).click();
    expect(onRetry).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Reference: abc123")).toBeInTheDocument();
  });
});
