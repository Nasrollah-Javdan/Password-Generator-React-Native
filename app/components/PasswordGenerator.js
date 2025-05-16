import { StyleSheet, Text, View, Pressable, ToastAndroid } from "react-native";
import React, { useState } from "react";
import * as Clipboard from "expo-clipboard";

export default function PasswordGenerator() {
  const [pass, setPass] = useState("");

  const passGeneratorHandler = () => {
    passwordLength = 15;
    let charset = "";
    let newPassword = "";

    charset += "!@#$%^&*()";
    charset += "0123456789";
    charset += "abcdefghijklmnopqrstuvwxyz";
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPass(newPassword);
  };

  const copyToClipboard = async () => {
    if (pass !== "") {
      await Clipboard.setStringAsync(pass);
      ToastAndroid.show('✅ رمز کپی شد', ToastAndroid.SHORT);
    } else {
      return null;
    }
  };

  return (
    <View style={styles.passSection}>
      <View style={styles.passContainer}>
        <Text style={styles.text}>رمز شما:</Text>
        <View style={{ marginVertical: 5 }} />
        <Text style={styles.text}>{pass ? pass : ("12345") }</Text>
      </View>
      <View style={{ marginVertical: 10 }} />
      {/* <Button title="رمز بساز" color="#03C03C" onPress={passGeneratorHandler} /> */}
      <Pressable onPress={passGeneratorHandler} style={styles.btn}>
        <Text style={styles.btnText}>رمز بساز 🔐</Text>
      </Pressable>
      <View style={{ marginVertical: 5 }} />
      {/* <Button title="کپی کن" onPress={copyToClipboard} /> */}
      <Pressable onPress={copyToClipboard} style={[styles.btn, {backgroundColor:'dodgerblue'}]}>
        <Text style={styles.btnText}>کپی کن</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  passSection: {
    marginTop: 150,
    alignItems: "center",
  },
  passContainer: {
    backgroundColor: "#fff",
    width: '60%',
    height: 'auto',
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    padding: 10,
    backgroundColor: "#03C03C",
    borderRadius: 10,
    width: "30%",
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  text: {
    fontSize: 18
  }
});
