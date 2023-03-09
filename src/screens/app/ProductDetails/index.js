import React from "react";
import { View, Text, ScrollView, Image, Linking } from "react-native";
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

  const onContact = () => {
    // phone call
    let phone = "real phone number";
    Linking.openURL(`tel:${phone}`);

    // email
    let email = "real email";
    Linking.openURL(`mailto:${email}`);
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
        <Button onPress={onContact} style="button" title="Contact Seller" />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
