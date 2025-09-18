import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../ui/button";

describe("Button (Shadcn)", () => {
  it("renders with children text", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("handles clicks", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Click Me</Button>);
    await user.click(screen.getByText("Click Me"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies correct default variant class", () => {
    render(<Button>Click Me</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toMatch(/bg-primary/);
  });

  it("applies destructive variant class", () => {
    render(<Button variant="destructive">Delete</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toMatch(/bg-destructive/);
  });

  it("renders with slot when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/test");
  });
});
