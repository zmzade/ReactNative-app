import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  const diff = now.diff(storedTime, "minutes");
  return diff > expiryInMinutes;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);
    //2 scenario: item doesnot exit and is expired. for calculate expiring we use moment.js.
    if (!item) return null;

    // we are removing these 3 lines as of violating Single Responsibility Principle:
    //1 getting an item from the cache and 2
    // detecting if the item is expired or not. our functions or method should have one resposibility.

    if (isExpired(item)) {
      //we are violating Command Query Seperation. but it is ok here
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  get,
  store,
};
