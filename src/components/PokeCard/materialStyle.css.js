const customStyles = {
  root: {
    maxWidth: 345,
    margin: "2rem auto",
    border: "4px solid black",
    borderRadius: "2rem",
    "&:hover" : {
        boxShadow: "0 0 5px 3px rgb(129, 129, 129)",
        transform: "scale(1.05)",
        transition: "all .3s",
    }
  },
  divider: {
    backgroundColor: "#000",
  },
  img: {
    height: "60%",
  },
  name: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "600",
  },
  type: {
    width: "30%",
    height: "3rem",
    borderRadius: "1rem",
    color: "#fff",
    fontSize: "2rem",
    textAlign: "center"
  },
  button: {
    justifySelf: "center",
    border: "3px solid #000",
    borderRadius: "1rem",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: "1.8rem",
    cursor: "pointer",
    "&:hover" : {
      color: "#fff",
      backgroundColor: "red",
      transition: "all .2s",
    },
  },
  center: {
    justifyContent: "center",
  },
  // pokeTypes
  Normal: {
    color: "rgba(22%, 42%, 73%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  Fire: {
    color: "rgba(87%, 32%, 23%, 1)",
    backgroundColor: "rgb(251, 226, 144)",
  },
  Water: {
    color: "rgb(191, 217, 255)",
    backgroundColor: "rgba(22%, 42%, 73%, 1)",
  },
  Electric: {
    color: "rgba(100%, 88%, 19%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  Grass: {
    color: "rgba(22%, 42%, 73%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  Ice: {
    color: "rgba(22%, 42%, 73%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  Fighting: {
    color: "rgba(22%, 42%, 73%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  Poison: {
    color: "rgba(22%, 42%, 73%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  Ground: {
    color: "rgba(22%, 42%, 73%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  Flying: {
    color: "rgba(22%, 42%, 73%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  Psychic: {
    color: "rgba(22%, 42%, 73%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  Bug: {
    color: "rgba(22%, 42%, 73%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  Rock: {
    color: "rgba(22%, 42%, 73%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  Ghost: {
    color: "rgba(22%, 42%, 73%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  Dragon: {
    color: "rgba(22%, 42%, 73%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  Dark: {
    color: "rgba(22%, 42%, 73%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  Steel: {
    color: "rgba(22%, 42%, 73%, 1)",
    backgroundColor: "rgb(191, 217, 255)",
  },
  // end pokeTypes
};

export default customStyles;