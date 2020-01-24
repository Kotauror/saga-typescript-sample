import * as React from "react";
import { cleanup, render } from "@testing-library/react";
import getDogFacts from "../crud/getDogFacts";
import HoundFacts, { ERROR_IN_HOUND_INFO } from ".";
import { act } from "react-dom/test-utils";

jest.mock("../crud/getDogFacts", () => {
  return {
    __esModule: true,
    default: jest.fn()
  };
});

afterEach(() => {
  cleanup();
  jest.resetModules();
  jest.clearAllMocks();
});

describe("<HoundFacts", () => {
  const component = <HoundFacts />;

  it("shows hounds if no error", async () => {
    (getDogFacts as any).mockImplementation(() =>
      Promise.resolve({
        data: {
          message: {
            hound: ["english", "spanish"]
          }
        }
      })
    );

    const { rerender, container } = render(component);

    await act(async () => {
      rerender(component);
    });

    const dogsList = container.querySelector('.dogTypes') as any;
    expect(dogsList.innerHTML.includes('english')).toEqual(true);
    expect(dogsList.innerHTML.includes('spanish')).toEqual(true);
  });

  it('shows error when error', async () => {
    (getDogFacts as any).mockImplementation(() => {
      throw new Error();
    });

    const { rerender, container } = render(component);

    await act(async () => {
      rerender(component);
    });

    expect(container.innerHTML.includes(ERROR_IN_HOUND_INFO)).toEqual(true)
  })
});