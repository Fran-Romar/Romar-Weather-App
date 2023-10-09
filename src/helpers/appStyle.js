const appStyle = (imgUrl) => ({
    width: "100vw",
    height: "100vh",
    fontFamily: "Oswald, sans-serif",
    textAlign: "center",
    backgroundImage: imgUrl,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#000000",
    backdropFilter: `blur(7px)`,
});

export {appStyle};