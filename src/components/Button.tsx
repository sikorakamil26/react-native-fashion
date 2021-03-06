import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import theme, { Text } from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.borderRadius.l,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ButtonProps {
  label?: string;
  variant: "default" | "primary" | "transparent";
  onPress: () => void;
  children?: ReactNode;
}

const Button = ({ label, variant, onPress, children }: ButtonProps) => {
  const backgroundColor: string = (() => {
    switch (variant) {
      case "primary":
        return theme.colors.primary;
      case "transparent":
        return "transparent";
      default:
        return theme.colors.grey;
    }
  })();

  const color =
    variant === "primary" ? theme.colors.white : theme.colors.secondary;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
