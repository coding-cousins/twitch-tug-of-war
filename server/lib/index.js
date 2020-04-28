require("dotenv").config();
const tmi = require("tmi.js");

const bonusEmotes = [
  "Kappa",
  "DatSheffy",
  "cmonBruh",
  "BibleThump",
  "KappaPride",
  "KappaRoss",
  "NotLikeThis",
  "PogChamp",
  "WutFace",
];

const startConnection = (channel1, channel2, socket) => {
  let currentWinner = null;
  let bonusEmote = bonusEmotes[Math.floor(Math.random() * bonusEmotes.length)];

  const randomizeBonusEmote = setInterval(() => {
    const newEmote =
      bonusEmotes[Math.floor(Math.random() * bonusEmotes.length)];
    bonusEmote = newEmote;

    console.log("New bonus emote is:", newEmote);
    socket.emit("NEW_BONUS_EMOTE", bonusEmote);
  }, 5000);

  const endGame = () => {
    console.log("Game ending! Winner:", currentWinner);
    client1.disconnect();
    client2.disconnect();

    clearInterval(keepScore);
    clearInterval(randomizeBonusEmote);
    clearInterval(trackMaxGameTime);

    socket.emit("WINNER", {
      winner: currentWinner,
    });
  };

  const trackMaxGameTime = setInterval(() => {
    endGame();
    //GAME LENGTH IN MS
  }, 30000);

  socket.emit("GAME_STARTED", {
    bonusEmote: bonusEmotes[Math.floor(Math.random() * bonusEmotes.length)],
    streamerOne: channel1,
    streamerTwo: channel2,
  });

  const options1 = {
    options: {
      debug: false,
    },
    connection: {
      cluster: "aws",
      reconnect: true,
    },
    identity: {
      username: "TylerIsCoolBot",
      password: `oauth:${process.env.OAUTH}`,
    },
    channels: [channel1],
  };

  const options2 = {
    options: {
      debug: false,
    },
    connection: {
      cluster: "aws",
      reconnect: true,
    },
    identity: {
      username: "TylerIsCoolBot",
      password: `oauth:${process.env.OAUTH}`,
    },
    channels: [channel2],
  };

  const client1 = new tmi.client(options1);
  const client2 = new tmi.client(options2);

  client1.connect();
  client2.connect();

  let localCount1 = 0;
  let localCount2 = 0;

  client1.on("chat", (channel, user, message, self) => {
    if (message === bonusEmote) {
      console.log(
        "Bonus emote for team 1! ",
        user.username,
        "- Extra 5 points!"
      );
      localCount1 += 5;

      socket.emit("CLIENT_1_MESSAGE", {
        user: user.username,
        message,
        bonus: true,
      });
    } else {
      localCount1++;

      socket.emit("CLIENT_1_MESSAGE", {
        user: user.username,
        message,
        bonus: false,
      });
    }
  });

  client2.on("chat", (channel, user, message, self) => {
    if (message === bonusEmote) {
      console.log(
        "Bonus emote for team 2! ",
        user.username,
        "- Extra 5 points!"
      );
      localCount2 += 5;

      socket.emit("CLIENT_2_MESSAGE", {
        user: user.username,
        message,
        bonus: true,
      });
    } else {
      localCount2++;

      socket.emit("CLIENT_2_MESSAGE", {
        user: user.username,
        message,
        bonus: false,
      });
    }
  });

  const keepScore = setInterval(() => {
    console.log(channel1, localCount1, channel2, localCount2, "\n");
    const difference = localCount1 - localCount2;

    if (difference > 0) {
      currentWinner = channel1;
    }
    if (difference < 0) {
      currentWinner = channel2;
    } else if (difference === 0) {
      currentWinner = null;
    }

    socket.emit("UPDATE_SCORE", {
      streamerOneScore: localCount1,
      streamerTwoScore: localCount2,
      currentWinner,
    });

    if (difference > 100 || difference < -100) {
      console.log(currentWinner, "wins!");
      //POST game to backend for leaderboard.
      endGame();
    }
  }, 500);

  socket.on("disconnect", () => {
    console.log("disconnect");
    endGame();
  });
};

module.exports = startConnection;
