import React, { ReactNode } from "react";
import { Image, Dimensions, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Box } from "./Theme";

export const assets = [require("../assets/patterns/1.png")];
const { width } = Dimensions.get("window");
const aspectRation = 750 / 1125;
const height = width * aspectRation;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius={theme.borderRadius.xl}
          overflow="hidden"
          height={height * 0.61}
        >
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadius.xl,
            }}
          />
        </Box>
      </Box>

      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          borderRadius={theme.borderRadius.xl}
          borderTopLeftRadius={0}
          backgroundColor="white"
          flex={1}
        >
          <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
        </Box>
      </Box>
      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  );
};

export default Container;
