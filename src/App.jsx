import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer.jsx";
import Count from "./components/Count";
import Password from "./components/Password"
import Todo from "./components/Todo"
function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />
      <Count/>
      <Todo/>
      <Password/>
      <main className="flex-1">
        <Hero />

        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold">
            Welcome to My Website
          </h2>
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default App;