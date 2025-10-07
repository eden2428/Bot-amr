module.exports = {
  config: {
    name: "unsendReact",
    version: "1.0.0",
    author: "Muntasir Mahmud x Eden",
    countDown: 5,
    role: 0,
    description: "Auto unsend bot message when admin reacts with 😡",
    category: "system"
  },

  onReaction: async function ({ api, event }) {
    const adminUID = "61581502015227"; // তোমার UID এখানে

    // চেক করা হচ্ছে যে রিয়্যাকশনটা কে দিয়েছে এবং ইমোজিটা 😡 কিনা
    if (
      event.userID === adminUID && 
      event.reaction === "😡" &&
      event.messageID
    ) {
      try {
        await api.unsendMessage(event.messageID);
      } catch (err) {
        console.error("Unsend error:", err);
      }
    }
  }
};
