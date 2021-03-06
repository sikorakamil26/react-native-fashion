import React, { ReactNode } from "react";
import Svg, { Path, G, LinearGradient, Stop, Circle } from "react-native-svg";
import { useTheme } from "@shopify/restyle";

import { Box } from "../../components/Theme";

const Google = () => {
  return (
    <Svg viewBox="0 0 40 40" width={16} height={16}>
      <Path
        fill="#8bb7f0"
        d="M28.229 29.396a12.547 12.547 0 003.438-4.968c.187-.491.321-.905.423-1.303l.16-.625H20.5v-6h17.662c.225 1.167.338 2.343.338 3.5 0 5.005-2.069 9.834-5.692 13.32l-4.579-3.924z"
      />
      <Path
        fill="#4e7ab5"
        d="M37.744 17c.17 1.002.256 2.008.256 3 0 4.719-1.891 9.277-5.216 12.641l-3.802-3.259a13.065 13.065 0 003.153-4.777c.192-.506.332-.937.44-1.355l.322-1.25H21v-5h16.744m.826-1H20v7h11.607c-.11.428-.252.842-.406 1.25a12.047 12.047 0 01-3.744 5.141l5.367 4.6C36.611 30.518 39 25.544 39 20c0-1.373-.153-2.709-.43-4z"
      />
      <Path
        fill="#8bb7f0"
        d="M32.828 22a12.981 12.981 0 01-4.594 8.058l3.825 3.278c3.175-2.873 5.329-6.852 5.828-11.336h-5.059z"
      />
      <Path
        fill="#bae0bd"
        d="M20 38.5c-6.903 0-13.128-3.773-16.349-9.877l4.957-3.499A12.414 12.414 0 0020 32.5c2.713 0 5.277-.851 7.439-2.465l4.624 3.963A18.423 18.423 0 0120 38.5z"
      />
      <Path
        fill="#5e9c76"
        d="M8.411 25.875A12.906 12.906 0 0020 33c2.688 0 5.234-.803 7.413-2.329l3.876 3.322A17.913 17.913 0 0120 38c-6.57 0-12.509-3.513-15.697-9.225l4.108-2.9m.417-1.518l-5.82 4.108C6.123 34.704 12.552 39 20 39c4.949 0 9.442-1.908 12.823-5.009l-5.367-4.6A11.908 11.908 0 0120 32c-5.089 0-9.427-3.173-11.172-7.643z"
      />
      <Path
        fill="#bae0bd"
        d="M28.234 30.058A12.943 12.943 0 0120 33c-5.407 0-10.041-3.303-12-8l-4.13 2.95C6.807 33.899 12.917 38 20 38c4.645 0 8.866-1.775 12.059-4.664l-3.825-3.278z"
      />
      <Path
        fill="#f78f8f"
        d="M3.891 10.907A18.483 18.483 0 0120 1.5c4.493 0 8.8 1.632 12.186 4.607l-4.212 4.212C25.757 8.498 22.944 7.5 20 7.5a12.47 12.47 0 00-11.271 7.093l-4.838-3.686z"
      />
      <Path
        fill="#c74343"
        d="M20 2a17.91 17.91 0 0111.449 4.136l-3.515 3.515C25.688 7.935 22.905 7 20 7a12.967 12.967 0 00-11.445 6.832l-4.01-3.055A17.981 17.981 0 0120 2m0-1C12.746 1 6.446 5.068 3.245 11.044l5.682 4.329C10.738 11.043 15.013 8 20 8c3.059 0 5.881 1.116 8 3l4.911-4.911C29.52 2.94 24.992 1 20 1z"
      />
      <Path
        fill="#f78f8f"
        d="M20 7V2C13.07 2 7.064 5.922 4.056 11.662l4.056 3.09C10.13 10.189 14.689 7 20 7z"
      />
      <Path
        fill="#ffeea3"
        d="M3.235 27.789A18.254 18.254 0 011.5 20c0-2.838.661-5.66 1.917-8.197l4.905 3.737A12.407 12.407 0 007.5 20c0 1.435.249 2.851.74 4.214l-5.005 3.575z"
      />
      <Path
        fill="#ba9b48"
        d="M3.604 12.574l4.121 3.14a12.939 12.939 0 00-.079 8.31l-4.204 3.003A17.725 17.725 0 012 20c0-2.559.552-5.103 1.604-7.426m-.359-1.53A18.904 18.904 0 001 20c0 3.075.747 5.97 2.044 8.54l5.799-4.142a11.948 11.948 0 01.084-9.025l-5.682-4.329z"
      />
      <G>
        <Path
          fill="#ffeea3"
          d="M7 20c0-1.869.402-3.642 1.112-5.248l-4.056-3.09A17.907 17.907 0 002 20c0 2.858.684 5.55 1.869 7.951L8 25a12.94 12.94 0 01-1-5z"
        />
      </G>
    </Svg>
  );
};

const Facebook = () => {
  return (
    <Svg viewBox="0 0 48 48" width={48} height={48}>
      <LinearGradient
        id="prefix__a"
        x1={9.993}
        x2={40.615}
        y1={9.993}
        y2={40.615}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#2aa4f4" />
        <Stop offset={1} stopColor="#007ad9" />
      </LinearGradient>
      <Path
        fill="url(#prefix__a)"
        d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z"
      />
      <Path
        fill="#fff"
        d="M26.707 29.301h5.176l.813-5.258h-5.989v-2.874c0-2.184.714-4.121 2.757-4.121h3.283V12.46c-.577-.078-1.797-.248-4.102-.248-4.814 0-7.636 2.542-7.636 8.334v3.498H16.06v5.258h4.948v14.452c.98.146 1.973.246 2.992.246.921 0 1.82-.084 2.707-.204V29.301z"
      />
    </Svg>
  );
};
const Apple = () => {
  return (
    <Svg height={24} viewBox="0 0 24 24" width={24}>
      <Path d="M24 24H0V0h24v24z" fill="none" />
      <Circle cx={12} cy={12} r={8} />
    </Svg>
  );
};

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadius.l * 2;
  return (
    <Box
      marginHorizontal="m"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius={SIZE}
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
