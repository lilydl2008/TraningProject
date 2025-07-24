import AsyncStorage from "@react-native-async-storage/async-storage";

// Memory cache for faster access
const memoryCache: Map<string, any> = new Map();

export const Storage = {
  async setString(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
      memoryCache.set(key, value);
    } catch (error) {
      console.error(`Storage setString error for key ${key}:`, error);
    }
  },

  async getString(key: string): Promise<string | null> {
    try {
      if (memoryCache.has(key)) {
        return memoryCache.get(key);
      }
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        memoryCache.set(key, value);
      }
      return value;
    } catch (error) {
      console.error(`Storage getString error for key ${key}:`, error);
      return null;
    }
  },

  async setNumber(key: string, value: number): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value.toString());
      memoryCache.set(key, value);
    } catch (error) {
      console.error(`Storage setNumber error for key ${key}:`, error);
    }
  },

  async getNumber(key: string, defaultValue: number = 0): Promise<number> {
    try {
      if (memoryCache.has(key)) {
        return memoryCache.get(key);
      }
      const val = await AsyncStorage.getItem(key);
      const result = val !== null ? Number(val) : defaultValue;
      if (result !== null) {
        memoryCache.set(key, result);
      }
      return result;
    } catch (error) {
      console.error(`Storage getNumber error for key ${key}:`, error);
      return defaultValue;
    }
  },

  async setBool(key: string, value: boolean): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value ? "1" : "0");
    } catch (error) {
      console.error(`Storage setBool error for key ${key}:`, error);
    }
  },

  async getBool(key: string): Promise<boolean | null> {
    try {
      const val = await AsyncStorage.getItem(key);
      if (val === "1") return true;
      if (val === "0") return false;
      return null;
    } catch (error) {
      console.error(`Storage getBool error for key ${key}:`, error);
      return null;
    }
  },

  async setJson<T>(key: string, value: T): Promise<void> {
    try {
      const json = JSON.stringify(value);
      await AsyncStorage.setItem(key, json);
    } catch (error) {
      console.error(`Storage setJson error for key ${key}:`, error);
    }
  },

  async getJson<T>(key: string): Promise<T | null> {
    try {
      const json = await AsyncStorage.getItem(key);
      return json ? (JSON.parse(json) as T) : null;
    } catch (error) {
      console.error(`Storage getJson error for key ${key}:`, error);
      return null;
    }
  },

  async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
      memoryCache.delete(key);
    } catch (error) {
      console.error(`Storage remove error for key ${key}:`, error);
    }
  },

  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
      memoryCache.clear();
    } catch (error) {
      console.error("Storage clear error:", error);
    }
  }
};