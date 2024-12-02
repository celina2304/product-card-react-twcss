export interface ProductCardProps {
    cardId: string;
    imageUrl: string;
    imageAlt: string;
    heading: string;
    description?: string;
    price: number;
    handleCardClick: () => void;
  }

export interface HandleCardClickProps {
  index: number;
}
  