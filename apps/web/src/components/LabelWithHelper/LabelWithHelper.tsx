import React, { RefCallback } from "react";

import {
  bindHover,
  bindPopover,
  usePopupState,
} from "material-ui-popup-state/hooks";
import HoverPopover from "material-ui-popup-state/HoverPopover";

import * as S from "./styled";

interface LabelWithHelperProps {
  label: string;
  error?: boolean;
  ref?: RefCallback<unknown>;
  helperText?: string;
}

export const LabelWithHelper: React.FC<LabelWithHelperProps> = ({
  label,
  error,
  ref,
  helperText,
}) => {
  const popupState = usePopupState({ variant: "popper", popupId: "demoMenu" });

  return (
    <>
      <S.Wrapper>
        <S.Label ref={ref} error={error}>
          {label}
        </S.Label>
        {helperText && <S.HelpIcon {...bindHover(popupState)} />}
      </S.Wrapper>
      <HoverPopover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <S.HelperText>{helperText}</S.HelperText>
      </HoverPopover>
    </>
  );
};
