import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { appName } from "@repo/domain";
import { useEffect, useState } from "react";
import { client } from "./client";

export default function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    client.greeting
      .$post({
        json: { name: "world" },
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Message: {message}</Text>
      <StatusBar style="auto" />
      <Text>from {appName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
