import React, { useState } from "react";

import { TextFieldProps } from "../TextField";
import { SelectLocators } from "./locators";
import * as S from "./styled";

type OptionValue = string | number | undefined;

type Option = {
  text: string;
  value: OptionValue;
};

export type SelectProps = TextFieldProps & {
  value?: OptionValue;
  defaultValue?: OptionValue;
  options?: Option[];
  onChange: (value: OptionValue) => void;
};

export const Select: React.FC<SelectProps> = ({
  options = [],
  onChange,
  value,
  defaultValue,
  ...props
}) => {
  const [selected, setSelected] = useState<OptionValue>(defaultValue ?? value);
  const [isOpened, setIsOpened] = useState(false);

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
    <>
      {isOpened && (
        <S.Overlay onClick={handleClose} data-testid={SelectLocators.Overlay} />
      )}
      <S.Wrapper>
        <S.TextField
          onClick={handleOpen}
          {...props}
          value={options.find((option) => option.value === selected)?.text}
          data-testid={SelectLocators.TextField}
        />
        <S.IconWrapper>
          {isOpened ? (
            <S.IconUp data-testid={SelectLocators.IconUp} />
          ) : (
            <S.IconDown data-testid={SelectLocators.IconDown} />
          )}
        </S.IconWrapper>
        {isOpened && (
          <S.Menu data-testid={SelectLocators.Menu}>
            {options.map((item, index) => (
              <S.OptionWrapper
                key={index}
                isActive={item.value === selected}
                onClick={() => handleSelect(item)}
              >
                <S.Option
                  data-testid={
                    item.value === selected
                      ? SelectLocators.SelectedOption
                      : SelectLocators.Option
                  }
                >
                  {item.text}
                </S.Option>
              </S.OptionWrapper>
            ))}
          </S.Menu>
        )}
      </S.Wrapper>
    </>
  );
};
