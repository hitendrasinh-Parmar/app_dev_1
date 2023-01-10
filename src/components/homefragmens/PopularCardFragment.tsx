import React from 'react';
import { Text, View } from 'react-native';
import useStyles from '../../styles/useStyles';
import ImageFragment from '../images/ImageFragment';
import { AppIcons } from '../../../assets/icons';

const PopularCardFragment = () => {
  // console.log('[PopularCardFragment]');
  const __s = useStyles();
  const { docprofile2 } = AppIcons;

  return (
    <View style={[__s.bgColorWhite, __s.marginR16, __s.borderRadius10, __s.paddingV16]}>
      <ImageFragment imgUrl={docprofile2} imgStyle={[__s.height200, __s.width190]} />
      <Text
        style={[
          __s.font18,
          __s.fontPoppinsBold,
          __s.fontBlack,
          __s.flexWrap,
          __s.textCenter,
        ]}>
        Dr. Fillerup Grab
      </Text>
      <Text
        style={[
          __s.font12,
          __s.fontPoppinsRegular,
          __s.fontGray,
          __s.flexWrap,
          __s.textCenter,
        ]}>
        Medicine Specialist
      </Text>
    </View>
  );
};

export default PopularCardFragment;
