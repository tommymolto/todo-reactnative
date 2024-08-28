import { Text, View } from "react-native";
import ToDoComponent from "@/app/todo.component";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ToDoComponent />
    </View>
  );
}
