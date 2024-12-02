import ProductCard from "./components/ProductCard";

const App = () => {
  const handleCardClick = (index: number) => () => {
    console.log("Card clicked | index = ", index);
  };
  const sampleObj = {
    cardId: `${Date.now()}`,
    imageUrl: "https://placehold.co/600x400",
    imageAlt: `product-card-index-[${Math.random()}]`,
    heading: "Sample Product",
    description: "This is a sample product description.",
    price: 300,
  };

  const cardsData = Array(4)
    .fill(0)
    .map((_i, index) => ({
      ...sampleObj,
      handleCardClick: handleCardClick(index),
    }));
  // console.log(cardsData);
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cardsData.map((card, index) => (
        <ProductCard
          key={index}
          cardId={card.cardId}
          imageUrl={card.imageUrl}
          imageAlt={card.imageAlt}
          heading={card.heading + " " + index}
          description={card.description}
          price={card.price}
          handleCardClick={card.handleCardClick}
        />
      ))}
    </div>
  );
};

export default App;
