const reducer = (state, action) => {
  console.log("in reducer: state, action", state, action);
  switch (action.type) {
    case "WINNER":
      return {
        ...state,
        winner: action.payload.winner,
        activeGame: false,
      };
    case "GAME_STARTED":
      return {
        ...state,
        winner: null,
        activeGame: true,
        bonusEmote: action.payload.bonusEmote,
        streamerOne: {
          score: 0,
          username: action.payload.streamerOne,
          messages: [],
        },
        streamerTwo: {
          score: 0,
          username: action.payload.streamerTwo,
          messages: [],
        },
      };

    case "NEW_BONUS_EMOTE":
      return {
        ...state,
        bonusEmote: action.payload,
      };
    case "UPDATE_SCORE":
      return {
        ...state,
        streamerOne: {
          ...state.streamerOne,
          score: action.payload.streamerOneScore,
        },
        streamerTwo: {
          ...state.streamerTwo,
          score: action.payload.streamerTwoScore,
        },
        currentWinner: action.payload.currentWinner,
      };
    case "CLIENT_1_MESSAGE":
      return {
        ...state,
        streamerOne: {
          ...state.streamerOne,
          messages: [action.payload, ...state.streamerOne.messages],
        },
      };
    case "CLIENT_2_MESSAGE":
      return {
        ...state,
        streamerTwo: {
          ...state.streamerTwo,
          messages: [action.payload, ...state.streamerTwo.messages],
        },
      };
    default:
      return state;
  }
};

export default reducer;
