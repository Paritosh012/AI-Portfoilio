import { act, fireEvent, render, screen } from "@testing-library/react";
import CopyEmailButton from "@/components/CopyEmailButton";

describe("CopyEmailButton", () => {
  const writeText = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
    writeText.mockReset().mockResolvedValue(undefined);

    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });
  });

  afterEach(() => jest.useRealTimers());

  it("copies the email and confirms, then resets after 2 seconds", async () => {
    render(<CopyEmailButton email="me@example.com" />);

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /copy email/i }));
    });

    expect(writeText).toHaveBeenCalledWith("me@example.com");
    expect(
      screen.getByRole("button", { name: /email copied/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(
      "me@example.com copied to clipboard",
    );

    act(() => jest.advanceTimersByTime(2000));
    expect(
      screen.getByRole("button", { name: /copy email/i }),
    ).toBeInTheDocument();
  });
});
