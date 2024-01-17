import { View, Animated, FlatList } from "react-native";
import { useRef, useState } from 'react';
import SlideItem from "./SlideItem";
import SliderPagination from './SliderPagination';

interface Props {
  images?: string[];
}

export default function Slider({images}: Props) {
  const [index, setIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollHandler = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ], 
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const itemsChangedHandler = useRef(({ viewableItems}: any) => {
    // tells what image is visible is current
    // console.log("viewableItems = ", viewableItems);
    setIndex(viewableItems[0].index)
  }).current;

  // tells how much from image should be visible to be considered current
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50
  }).current;

  return (
    <View>
      <FlatList 
        data={images} 
        renderItem={({item}) => <SlideItem item={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal 
        pagingEnabled 
        snapToAlignment="center"
        onScroll={scrollHandler}
        onViewableItemsChanged={itemsChangedHandler}
        viewabilityConfig={viewabilityConfig}
      />
      <SliderPagination data={images} scrollX={scrollX} index={index} />
    </View>
  )
}
