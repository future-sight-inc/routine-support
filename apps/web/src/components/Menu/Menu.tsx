import React, { ReactNode } from "react";

import { useTranslation } from "react-i18next";

import { Option, OptionValue } from "../Select";
import { createOptionDataTestId, MenuLocators } from "./locators";
import * as S from "./styled";

export type MenuPlacement = "top" | "bottom";

interface MenuProps {
  options: Option[];
  isOpened: boolean;
  selected?: OptionValue;
  children: ReactNode;
  placement?: MenuPlacement;
  onClose: () => void;
  onSelect: (option: Option) => void;
}

export const Menu: React.FC<MenuProps> = ({
  options,
  isOpened,
  selected,
  children,
  placement = "bottom",
  onClose,
  onSelect,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {isOpened && (
        <S.Overlay onClick={onClose} data-testid={MenuLocators.Overlay} />
      )}
      <S.Wrapper>
        {children}
        {isOpened && (
          <S.Menu data-testid={MenuLocators.MenuWrapper} placement={placement}>
            {options.map((item, index) => (
              <S.OptionWrapper
                key={index}
                isActive={item.value === selected}
                onClick={() => onSelect(item)}
              >
                <S.Option
                  data-testid={
                    item.value === selected
                      ? MenuLocators.SelectedOption
                      : createOptionDataTestId(item.value)
                  }
                >
                  {item.text}
                </S.Option>
              </S.OptionWrapper>
            ))}
            {options.length === 0 && (
              <S.EmptyText data-testid={MenuLocators.EmptyText}>
                {t("No one to pick")}
              </S.EmptyText>
            )}
          </S.Menu>
        )}
      </S.Wrapper>
    </>
  );
};
