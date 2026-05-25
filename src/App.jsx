import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/Article-List";

function App (){
  const articles = [
    {
      id: 1,
      title: "The Rise of Artificial Intelligence in Everyday Life",
      date: "2026-04-12",
      preview:
        "Artificial intelligence is no longer limited to research labs. From voice assistants to personalized recommendations, AI is now deeply integrated into daily routines, shaping how we work, shop, and communicate."
    },
    {
      id: 2,
      title: "Climate Change and the Future of Cities",
      date: "2026-03-28",
      preview:
        "As global temperatures continue to rise, cities are being forced to rethink infrastructure. Urban planners are focusing on green architecture, improved public transport, and climate-resilient housing to adapt to future challenges."
    },
    {
      id: 3,
      title: "The Evolution of Remote Work",
      date: "2026-02-15",
      preview:
        "Remote work has transformed from a rare perk into a global standard for many industries. Companies are adapting by investing in digital collaboration tools and redefining productivity beyond the traditional office setting."
    },
    {
      id: 4,
      title: "Breakthroughs in Renewable Energy Technology",
      date: "2026-01-30",
      preview:
        "Recent advancements in solar and wind technology have significantly improved efficiency and reduced costs. These innovations are accelerating the shift toward cleaner and more sustainable energy sources worldwide."
    }
  ];
  return(
    <>
      <Header name = "Star"  />
      <About imageUrl="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
        about="Welcome to my React blog!" />
    <ArticleList posts= {articles}/>
    </>
  )
}

export default App;