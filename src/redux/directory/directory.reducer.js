const INITIAL_STATE = {
  sections: [
    {
      title: "jackets",
      imageUrl:
        "https://static.zara.net/photos///mkt/spots/aw20-north-collection-kids/subhome-xmedia-38//w/1440/landscape_0.jpg?ts=1600430278007",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "hats",
      imageUrl:
        "https://static.zara.net/photos///mkt/spots/aw20-north-new-in-kids/subhome-xmedia-37//w/1440/landscape_0.jpg?ts=1599818646269",
      id: 1,
      linkUrl: "shop/hats",
    },

    {
      title: "sneakers",
      imageUrl:
        "https://static.zara.net/photos///mkt/spots/aw20-north-join-life-kids/subhome-xmedia-37//w/1440/landscape_0.jpg?ts=1599498329954",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://static.zara.net/photos///mkt/spots/aw20-north-new-in-man/subhome-xmedia-38//w/1440/landscape_0.jpg?ts=1600336852725",
      // size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://static.zara.net/photos///mkt/spots/aw20-north-collection-man/subhome-xmedia-37//w/1440/landscape_0.jpg?ts=1599759206871",
      // size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
