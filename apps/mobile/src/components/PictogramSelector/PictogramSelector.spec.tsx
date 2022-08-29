import React from "react";

import { PICTOGRAMS } from "@routine-support/pictograms";
import { fireEvent, render, within } from "@testing-library/react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ModalLocators } from "../Modal/locators";
import { createPictogramTestId, PictogramSelectorLocators } from "./locators";
import { PictogramSelector } from "./PictogramSelector";

describe("PictogramSelector", () => {
  it("Has no value, not opened", () => {
    const { getByTestId } = render(
      <SafeAreaProvider initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}>
        <PictogramSelector onSelect={() => null} pictograms={PICTOGRAMS} />
      </SafeAreaProvider>
    );

    expect(
      within(getByTestId(PictogramSelectorLocators.ValueWrapper)).getByTestId(
        PictogramSelectorLocators.NoValueText
      )
    );
  });

  it("Has value, not opened", () => {
    const VALUE = PICTOGRAMS[0].url;
    const { getByTestId } = render(
      <SafeAreaProvider initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}>
        <PictogramSelector onSelect={() => null} pictograms={PICTOGRAMS} value={VALUE} />
      </SafeAreaProvider>
    );

    expect(
      within(getByTestId(PictogramSelectorLocators.ValueWrapper)).getByTestId(
        PictogramSelectorLocators.Image
      ).props.source.uri
    ).toBe(VALUE);
  });

  it("Has no value, opens modal, displays pictograms, highlights no image option", () => {
    const { getByTestId } = render(
      <SafeAreaProvider initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}>
        <PictogramSelector onSelect={() => null} pictograms={PICTOGRAMS} />
      </SafeAreaProvider>
    );

    expect(getByTestId(PictogramSelectorLocators.NoImageOptionSelected));
    expect(getByTestId(createPictogramTestId({ value: PICTOGRAMS[0].url, isSelected: false })));
    expect(getByTestId(createPictogramTestId({ value: PICTOGRAMS[1].url, isSelected: false })));
    expect(getByTestId(createPictogramTestId({ value: PICTOGRAMS[2].url, isSelected: false })));

    expect(
      within(getByTestId(PictogramSelectorLocators.ValueWrapper)).getByTestId(
        PictogramSelectorLocators.NoValueText
      )
    );
  });

  it("Has value, opens modal, highlights value", () => {
    const VALUE = PICTOGRAMS[0].url;
    const { getByTestId } = render(
      <SafeAreaProvider initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}>
        <PictogramSelector onSelect={() => null} pictograms={PICTOGRAMS} value={VALUE} />
      </SafeAreaProvider>
    );

    expect(getByTestId(createPictogramTestId({ value: VALUE, isSelected: true })));
  });

  it("Has value, opens modal, press on new value, close modal", async () => {
    const VALUE = PICTOGRAMS[0].url;
    const ANOTHER_VALUE = PICTOGRAMS[1].url;
    const { getByTestId } = render(
      <SafeAreaProvider initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}>
        <PictogramSelector
          onSelect={() => null}
          pictograms={PICTOGRAMS.slice(0, 2)}
          value={VALUE}
        />
      </SafeAreaProvider>
    );

    await fireEvent.press(getByTestId(PictogramSelectorLocators.ValueWrapper));

    await fireEvent.press(
      getByTestId(createPictogramTestId({ value: ANOTHER_VALUE, isSelected: false }))
    );

    await fireEvent.press(getByTestId(ModalLocators.CloseIcon));

    expect(
      within(getByTestId(PictogramSelectorLocators.ValueWrapper)).getByTestId(
        PictogramSelectorLocators.Image
      ).props.source.uri
    ).toBe(VALUE);
  });

  it("Has value, opens modal, press on new value, press on confirm", async () => {
    const VALUE = PICTOGRAMS[0].url;
    const ANOTHER_VALUE = PICTOGRAMS[1].url;
    const handleSelect = jest.fn();
    const { getByTestId } = render(
      <SafeAreaProvider initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}>
        <PictogramSelector
          onSelect={handleSelect}
          pictograms={PICTOGRAMS.slice(0, 2)}
          value={VALUE}
        />
      </SafeAreaProvider>
    );

    await fireEvent.press(getByTestId(PictogramSelectorLocators.ValueWrapper));

    await fireEvent.press(
      getByTestId(createPictogramTestId({ value: ANOTHER_VALUE, isSelected: false }))
    );

    await fireEvent.press(getByTestId(PictogramSelectorLocators.ConfirmButton));

    expect(handleSelect).toBeCalledWith(ANOTHER_VALUE);

    expect(
      within(getByTestId(PictogramSelectorLocators.ValueWrapper)).getByTestId(
        PictogramSelectorLocators.Image
      ).props.source.uri
    ).toBe(ANOTHER_VALUE);
  });

  it("Has no value, opens modal, press on new value, close modal", async () => {
    const VALUE = PICTOGRAMS[0].url;
    const { getByTestId } = render(
      <SafeAreaProvider initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}>
        <PictogramSelector onSelect={() => null} pictograms={PICTOGRAMS.slice(0, 2)} />
      </SafeAreaProvider>
    );

    await fireEvent.press(getByTestId(PictogramSelectorLocators.ValueWrapper));

    await fireEvent.press(getByTestId(createPictogramTestId({ value: VALUE, isSelected: false })));

    await fireEvent.press(getByTestId(ModalLocators.CloseIcon));

    expect(
      within(getByTestId(PictogramSelectorLocators.ValueWrapper)).getByTestId(
        PictogramSelectorLocators.NoValueText
      )
    );
  });

  it("Has no value, opens modal, press on new value, press on confirm", async () => {
    const VALUE = PICTOGRAMS[0].url;
    const handleSelect = jest.fn();
    const { getByTestId } = render(
      <SafeAreaProvider initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}>
        <PictogramSelector onSelect={handleSelect} pictograms={PICTOGRAMS.slice(0, 2)} />
      </SafeAreaProvider>
    );

    await fireEvent.press(getByTestId(PictogramSelectorLocators.ValueWrapper));

    await fireEvent.press(getByTestId(createPictogramTestId({ value: VALUE, isSelected: false })));

    await fireEvent.press(getByTestId(PictogramSelectorLocators.ConfirmButton));

    expect(handleSelect).toBeCalledWith(VALUE);

    expect(
      within(getByTestId(PictogramSelectorLocators.ValueWrapper)).getByTestId(
        PictogramSelectorLocators.Image
      ).props.source.uri
    ).toBe(VALUE);
  });
});
