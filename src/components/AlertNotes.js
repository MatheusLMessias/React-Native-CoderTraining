
import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const alertCreated = () =>
  Alert.alert(
    "Alert Title",
    "Note created successfully",
    [
      {
        text: "Create another",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
      { text: "See the note", onPress: () => Alert.alert("OK Pressed") },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

  export function NoteCreated() {
    return(
  <View style={styles.container}>
    <Button title="Note Created" onPress={alertCreated} />
  </View>
);
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const alertDeleted = () =>
  Alert.alert(
    "Alert Title",
    "Are you sure you want to delete this annotation? This action cannot be undone",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Delete", onPress: () => alertFinish() },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

  export function NoteDeleted () {
    return(
  <View style={styles.container}>
    <Button title="Delete Note" onPress={alertDeleted} />
  </View>
);
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const alertFinish = () =>
  Alert.alert(
    "Alert Title",
    "Note deleted successfully",
    [
      {
        text: "Ok",
        //onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

