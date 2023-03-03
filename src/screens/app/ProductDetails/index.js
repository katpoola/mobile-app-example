import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Button from "../../../components/Button";
import ImageCarusel from "../../../components/ImageCarusel";
import { styles } from "./styles";

const ProductDetails = ({ navigation, route }) => {
  const { product } = route.params || {};
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.save}>
      <ScrollView>
        {product?.images?.length ? (
          <ImageCarusel images={product?.images} />
        ) : (
          <Image style={styles.image} source={{ uri: product?.image }} />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <Image
            style={styles.backIcon}
            source={require("../../../assets/back.png")}
          />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <Image
            style={styles.bookmarkIcon}
            source={require("../../../assets/tabs/bookmark-active.png")}
          />
        </Pressable>
        <Button title="Contact Seller" />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
