import React from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { FONTS, COLORS, SIZES, icons, Image } from '../constants';

const RecipeCreatorCardInfo = ({ selectedRecipe }) => {
  if (Platform.OS === 'ios') {
    return (
      <BlurView
        style={{ flex: 1, borderRadius: SIZES.radius }}
        intensity={80}
        tint='dark'>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          {/* Profile photo */}
          <View style={{ width: 40, height: 40, marginLeft: 20 }}>
            <Image
              source={selectedRecipe?.author?.profilePic}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
          </View>
          {/* Labels */}
          <View style={{ flex: 1, marginHorizontal: 20 }}>
            <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
              Recipe by:
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {selectedRecipe?.author?.name}
            </Text>
          </View>
          {/* Button */}
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: COLORS.lightGreen1,
            }}
            onPress={() => console.log('View Profile')}>
            <Image
              source={icons.rightArrow}
              style={{ width: 15, height: 15, tintColor: COLORS.lightGreen1 }}
            />
          </TouchableOpacity>
        </View>
      </BlurView>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.transparentBlack9,
        }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          {/* Profile photo */}
          <View style={{ width: 40, height: 40, marginLeft: 20 }}>
            <Image
              source={selectedRecipe?.author?.profilePic}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
          </View>
          {/* Labels */}
          <View style={{ flex: 1, marginHorizontal: 20 }}>
            <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
              Recipe by:
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {selectedRecipe?.author?.name}
            </Text>
          </View>
          {/* Button */}
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: COLORS.lightGreen1,
            }}
            onPress={() => console.log('View Profile')}>
            <Image
              source={icons.rightArrow}
              style={{ width: 15, height: 15, tintColor: COLORS.lightGreen1 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default RecipeCreatorCardInfo;
