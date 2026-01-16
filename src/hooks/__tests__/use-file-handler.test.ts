import { renderHook, act } from "@testing-library/react";
import { useFileHandler } from "../use-file-handler";

describe("useFileHandler", () => {
  const mockFile = new File(["content"], "test.png", { type: "image/png" });
  const onValueChange = jest.fn();
  const onError = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("initializes with empty files", () => {
    const { result } = renderHook(() => useFileHandler({ onValueChange }));
    expect(result.current.files).toEqual([]);
    expect(result.current.isDragging).toBe(false);
  });

  it("handles file drop", () => {
    const { result } = renderHook(() => useFileHandler({ onValueChange }));

    const dropEvent = {
      preventDefault: jest.fn(),
      dataTransfer: { files: [mockFile] },
    } as unknown as React.DragEvent<HTMLElement>;

    act(() => {
      result.current.handleDrop(dropEvent);
    });

    expect(result.current.files).toEqual([mockFile]);
    expect(onValueChange).toHaveBeenCalledWith([mockFile]);
  });

  it("validates file size", () => {
    const { result } = renderHook(() =>
      useFileHandler({
        onValueChange,
        onError,
        validationRules: { maxSize: 1 },
      }),
    );

    const dropEvent = {
      preventDefault: jest.fn(),
      dataTransfer: { files: [mockFile] },
    } as unknown as React.DragEvent<HTMLElement>;

    act(() => {
      result.current.handleDrop(dropEvent);
    });

    expect(onError).toHaveBeenCalled();
    expect(result.current.files).toEqual([]);
  });

  it("clears files", () => {
    const { result } = renderHook(() => useFileHandler({ onValueChange }));

    const dropEvent = {
      preventDefault: jest.fn(),
      dataTransfer: { files: [mockFile] },
    } as unknown as React.DragEvent<HTMLElement>;

    act(() => {
      result.current.handleDrop(dropEvent);
    });

    expect(result.current.files).toEqual([mockFile]);

    act(() => {
      result.current.clearFiles();
    });

    expect(result.current.files).toEqual([]);
    expect(onValueChange).toHaveBeenCalledWith([]);
  });

  it("removes specific file", () => {
    const { result } = renderHook(() => useFileHandler({ onValueChange }));

    const dropEvent = {
      preventDefault: jest.fn(),
      dataTransfer: { files: [mockFile] },
    } as unknown as React.DragEvent<HTMLElement>;

    act(() => {
      result.current.handleDrop(dropEvent);
    });

    act(() => {
      result.current.handleRemoveFile(mockFile);
    });

    expect(result.current.files).toEqual([]);
  });
});
