import { Animated, View, StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../utils/constants";

const { width } = Dimensions.get('screen');

interface Props {
  data?: string[];
  scrollX: any;
  index: number;
}
export default function SliderPagination({data, scrollX, index}: Props) {

  return (
    <View style={styles.container}>
      {
        data?.map((_, idx) => {
          const inputRange = [ (idx-1) * width, idx * width, (idx+1) * width ];
          const outputRange = [12, 30, 12];
          const extrapolate = 'clamp';

          const dotWidth = scrollX.interpolate({ inputRange, outputRange, extrapolate });
          return <Animated.View key={idx.toString()} style={[
            styles.dot, 
            {width: dotWidth}, 
            (idx === index) && styles.dotActive
          ]} />
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ccc',
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: COLORS.black,
  }
})