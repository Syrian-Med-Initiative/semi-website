export default function Home() {
  return (
    <section style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <h1 className="text-4xl font-bold text-white text-center pt-16">
          Welcome to Our App
        </h1>
        <p className="text-lg text-white text-center mt-4">
          Your journey starts here. Explore our features and enjoy the experience.
        </p>
    </section>

  );
}
