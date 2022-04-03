import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];
const MessagesScreen = () => {
  const [messages, setMessages] = React.useState(initialMessages);
  const [refreshing, setRefreshing] = React.useState(false);
  const [showChevrons, setShowChevrons] = React.useState(true);

  const handleDelete = (message) => {
    const newMessage = messages.filter((m) => m.id !== message.id);
    setMessages(newMessage);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message sent", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
