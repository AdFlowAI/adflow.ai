import { renderHook } from "@testing-library/react";
import { usePreventNavigation } from "../use-prevent-navigation";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("usePreventNavigation", () => {
  const mockRouter = {
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    jest.spyOn(window, "confirm").mockReturnValue(true);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("initializes correctly", () => {
    const { result } = renderHook(() => usePreventNavigation(false));
    expect(result.current).toHaveProperty("allowNavigation");
    expect(result.current).toHaveProperty("navigate");
    expect(result.current).toHaveProperty("reset");
  });

  it("allows navigation when preventNavigation is false", () => {
    const { result } = renderHook(() => usePreventNavigation(false));

    result.current.navigate("/test");
    expect(mockRouter.push).toHaveBeenCalledWith("/test");
  });

  it("navigates with replace option", () => {
    const { result } = renderHook(() => usePreventNavigation(false));

    result.current.navigate("/test", true);
    expect(mockRouter.replace).toHaveBeenCalledWith("/test");
  });
});
