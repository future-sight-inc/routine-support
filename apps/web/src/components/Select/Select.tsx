import React, { ReactNode, useEffect, useState } from "react";

import { Menu, MenuPlacement } from "../Menu";
import { TextFieldProps } from "../TextField";
import { SelectLocators } from "./locators";
import * as S from "./styled";

export type OptionValue = string | number | undefined;

export type Option = {
  text: string;
  value: OptionValue;
};

export type SelectProps = TextFieldProps & {
  value?: OptionValue;
  defaultValue?: OptionValue;
  options?: Option[];
  onChange: (value: OptionValue) => void;
  showBorder?: boolean;
  menuPlacement?: MenuPlacement;
  icon?: ReactNode;
  InputElement?: HTMLInputElement;
};

export const Select: React.FC<SelectProps> = ({
  options = [],
  onChange,
  value,
  defaultValue,
  menuPlacement,
  InputElement,
  ...props
}) => {
  const [selected, setSelected] = useState<OptionValue>(value ?? defaultValue);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleOpen = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };

  const handleSelect = (option: Option) => {
    setSelected(option.value);
    onChange(option.value);
    handleClose();
  };

  return (
    <Menu
      options={options}
      isOpened={isOpened}
      selected={selected}
      placement={menuPlacement}
      onClose={handleClose}
      onSelect={handleSelect}
    >
      <S.Wrapper>
        <S.TextField
          onClick={handleOpen}
          {...props}
          value={options.find((option) => option.value === selected)?.text}
          InputElement={InputElement}
          data-testid={SelectLocators.TextField}
        />
        <S.IconWrapper>
          {isOpened ? (
            <S.IconUp data-testid={SelectLocators.IconUp} />
          ) : (
            <S.IconDown data-testid={SelectLocators.IconDown} />
          )}
        </S.IconWrapper>
      </S.Wrapper>
    </Menu>
  );
};
