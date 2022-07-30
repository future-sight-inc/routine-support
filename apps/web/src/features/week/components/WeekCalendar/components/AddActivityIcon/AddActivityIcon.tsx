import React, { createRef, useEffect, useState } from "react";

import * as S from "./styled";

interface AddActivityIconProps {
  isEmpty: boolean;
}

export const AddActivityIcon: React.FC<AddActivityIconProps> = ({ isEmpty }) => {
  const [isVisible, setVisible] = useState(false);
  const containerRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const handleMousemove = (event: MouseEvent) => {
      if (!isEmpty && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();

        if (
          event.clientX >= containerRect.x &&
          event.clientX <= containerRect.x + containerRect.width &&
          event.clientY >= containerRect.y &&
          event.clientY <= containerRect.y + containerRect.height
        ) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    window.addEventListener("mousemove", handleMousemove);

    return () => window.removeEventListener("mousemove", handleMousemove);
  }, [isEmpty, containerRef]);

  if (isEmpty) {
    return (
      <S.Wrapper>
        <S.AddIcon />
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper ref={containerRef} isExtraIconVisible={isVisible}>
      <S.AddExtraIconWrapper>
        <S.AddExtraIcon />
      </S.AddExtraIconWrapper>
    </S.Wrapper>
  );
};
