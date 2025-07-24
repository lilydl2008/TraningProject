module.exports = {
  project: {
    ios: {},
    android: {},
  },
  // 指定默认终端
  commands: [
    {
      name: "run-ios",
      command: "react-native run-ios",
      options: {
        terminal: "Terminal.app", // macOS
        // terminal: "cmd.exe",   // Windows
        // terminal: "gnome-terminal", // Linux
      },
    },
    {
      name: "run-android",
      command: "react-native run-android",
      options: {
        terminal: "Terminal.app", // macOS
        // terminal: "cmd.exe",   // Windows
        // terminal: "gnome-terminal", // Linux
      },
    },
  ],
};