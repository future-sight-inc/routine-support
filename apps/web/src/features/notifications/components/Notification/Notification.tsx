import React from "react";

import * as S from "./styled";

export const Notification: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Image src="https://www.sclera.be/resources/pictos/biljart%20t.png" />
      <S.InfoWrapper>
        <S.Title>Activity was missed</S.Title>
        <S.Row>
          <S.Name>Title of activity</S.Name>
          <S.Time>13:00 - 14:00</S.Time>
        </S.Row>
        <S.StudentsWrapper>
          <S.Caption>These students were late:</S.Caption>
          <S.StudentsList>
            <S.Student>
              <S.StudentName>Albert</S.StudentName>
            </S.Student>
            <S.Student>
              <S.StudentName>Albert</S.StudentName>
            </S.Student>
            <S.Student>
              <S.StudentName>Albert</S.StudentName>
            </S.Student>
            <S.Student>
              <S.StudentName>Albert</S.StudentName>
            </S.Student>
            <S.Student>
              <S.StudentName>Albert</S.StudentName>
            </S.Student>
          </S.StudentsList>
        </S.StudentsWrapper>
      </S.InfoWrapper>
      <S.DeleteButton>Delete</S.DeleteButton>
    </S.Wrapper>
  );
};
