export const getTwitchAvatars = (streamerOne, streamerTwo) => {
  return Promise.all([
    fetch(`https://api.twitch.tv/helix/users?login=${streamerOne}`, {
      headers: {
        "Content-Type": "application/json",
        "Client-ID": "g0tournr6sfqqp6ejqzwgh1lpfmfe6",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        return json.data[0].profile_image_url;
      })
      .catch((err) => {
        console.log(err);
      }),

    fetch(`https://api.twitch.tv/helix/users?login=${streamerTwo}`, {
      headers: {
        "Content-Type": "application/json",
        "Client-ID": "g0tournr6sfqqp6ejqzwgh1lpfmfe6",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        return json.data[0].profile_image_url;
      })
      .catch((err) => {
        console.log(err);
      }),
  ]);
};
