function NewsCard({ image, title, text, link }) {
  return (
    <div style={{
      width: "300px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px"
    }}>
      <img src={image} alt={title} style={{ width: "100%" }} />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={link} target="_blank">Джерело</a>
    </div>
  );
}
function Shape({ type, width, height, color }) {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius: type === "circle" ? "50%" : "0",
        margin: "10px"
      }}
    ></div>
  );
}
function App() {
  const news = [
    {
      image: "https://pic.sport.ua/images/news/0/20/146/orig_829211.jpg",
      title: "Новина 1",
      text: "Польська легенда тренуватиме склад BCGame з s1mple",
      link: "https://sport.ua/uk/news/829211-polska-legenda-trenuvatime-sklad-bcgame-z-s1mple"
    },
    {
      image: "https://pic.sport.ua/images/news/0/20/143/orig_828652.jpg",
      title: "Новина 2",
      text: "ОФІЦІЙНО. BCGame з s1mple у складі підписали ядро португальського клубу",
      link: "https://sport.ua/uk/news/828652-ofitsiyno-bcgame-z-s1mple-u-skladi-pidpisali-yadro-portugalskogo-klubu"
    },
    {
      image: "https://pic.sport.ua/images/news/0/20/136/orig_827358.jpg",
      title: "Новина 3",
      text: "Команда s1mple зацікавлена у купівлі відомого португальського ядра",
      link: "https://sport.ua/uk/news/827358-komanda-s1mple-zatsikavlena-u-kupivli-vidomogo-portugalskogo-yadra"
    }
  ];
  return (
    <div style={{ padding: "20px" }}>
      <h2>Новини</h2>
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
      <h2>Фігури</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Shape type="circle" width={100} height={100} color="yellow" />
        <Shape type="rect" width={250} height={200} color="blue" />
        <Shape type="rect" width={250} height={250} color="purple" />
        <Shape type="circle" width={150} height={150} color="green" />
      </div>
    </div>
  );
}
export default App;