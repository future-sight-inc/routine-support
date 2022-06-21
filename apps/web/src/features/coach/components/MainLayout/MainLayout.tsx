import React from "react";

import { Coach } from "@routine-support/domains";
import { Footer } from "apps/web/src/components/Footer";
import { Header } from "apps/web/src/components/Header";

import { ProfileModal } from "../ProfileModal";
import * as S from "./styled";
import { useMainLayoutComponent } from "./useMainLayoutComponent";

export interface MainLayoutActions {
  logout: () => void;
  deleteCoach: () => void;
}

interface MainLayoutProps {
  user: Coach;
  notViewedCount: number;
  actions: MainLayoutActions;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  user,
  notViewedCount,
  actions,
}) => {
  const {
    models: { isProfileModalOpened },
    operations: {
      handleProfileModalOpen,
      handleProfileModalClose,
      handleDeleteProfile,
      handleLogout,
    },
  } = useMainLayoutComponent(actions);

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header
          user={user}
          notViewedCount={notViewedCount}
          onLogout={handleLogout}
          onProfileOpen={handleProfileModalOpen}
        />
      </S.HeaderWrapper>
      <S.Content>{children}</S.Content>
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
      <ProfileModal
        isOpened={isProfileModalOpened}
        actions={{
          deleteCoach: handleDeleteProfile,
          closeModal: handleProfileModalClose,
        }}
      />
    </S.Wrapper>
  );
};
