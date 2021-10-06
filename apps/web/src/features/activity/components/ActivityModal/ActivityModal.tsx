import React from "react";

export interface ActivityModalActions {
  closeActivityModal: () => void;
}

export interface ActivityModalProps {
  opened: boolean;
  actions: ActivityModalActions;
}

export const ActivityModal: React.FC<ActivityModalProps> = ({
  opened,
  actions,
  children,
}) => {
  if (!opened) {
    return null;
  }

  return (
    <div>
      <button onClick={actions.closeActivityModal}>close</button>
      {children}
    </div>
  );
};
