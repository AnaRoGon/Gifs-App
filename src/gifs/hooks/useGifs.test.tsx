import { beforeEach, describe, expect, test, vi } from "vitest";

import { useGifs } from "./useGifs";
import { act, renderHook } from "@testing-library/react";
import * as gifActions from "../actions/get-gifs-by-query.action";
import AxiosMockAdapter from "axios-mock-adapter";
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "../../../tests/mocks/giphy.response.data";

describe("useGifts", () => {
  let mock = new AxiosMockAdapter(giphyApi);

  beforeEach(() => {
    mock.reset();
    mock = new AxiosMockAdapter(giphyApi);
  });

  test("Should return default values and methos", () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handlTermCliked).toBeDefined();
  });

  test("Should return a list of gifs", async () => {
    //handleSearch
    mock.onGet("/search").reply(200, giphySearchResponseMock);
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch("Saitama");
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test("Should return a list of gifs when handlTermCliked is called", async () => {
    //handleSearch
    mock.onGet("/search").reply(200, giphySearchResponseMock);
    const { result } = renderHook(() => useGifs());
    await act(async () => {
      await result.current.handlTermCliked("Saitama");
    });
    expect(result.current.gifs.length).toBe(10);
  });

  test("Should return a list of gifs from caché", async () => {
    mock.onGet("/search").reply(200, giphySearchResponseMock);
    const { result } = renderHook(() => useGifs());
    await act(async () => {
      await result.current.handlTermCliked("Saitama");
    });
    expect(result.current.gifs.length).toBe(10);
    vi.spyOn(gifActions, "getGifsByQuery").mockRejectedValue(
      new Error("This is my custom error"),
    );

    await act(async () => {
      await result.current.handlTermCliked("Saitama");
    });
    expect(result.current.gifs.length).toBe(10);
  });

  test("Should return no more than 8 previous term", async () => {
    const { result } = renderHook(() => useGifs());
    vi.spyOn(gifActions, "getGifsByQuery").mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch("Saitama1");
    });

    await act(async () => {
      await result.current.handleSearch("Saitama2");
    });

    await act(async () => {
      await result.current.handleSearch("Saitama3");
    });
    await act(async () => {
      await result.current.handleSearch("Saitama4");
    });
    await act(async () => {
      await result.current.handleSearch("Saitama5");
    });
    await act(async () => {
      await result.current.handleSearch("Saitama6");
    });
    await act(async () => {
      await result.current.handleSearch("Saitama7");
    });
    await act(async () => {
      await result.current.handleSearch("Saitama8");
    });

    expect(result.current.previousTerms.length).toBe(8);

    expect(result.current.previousTerms).toStrictEqual([
      "saitama8",
      "saitama7",
      "saitama6",
      "saitama5",
      "saitama4",
      "saitama3",
      "saitama2",
      "saitama1",
    ]);
  });
});
