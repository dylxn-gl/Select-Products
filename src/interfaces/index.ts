// Components (ui) 

export interface CardProps {
    title: string,
    description: string,
    image: string
}

export interface CartProps {
    cart: [{
        title: string,
        description: string,
        image: string
    }],
}

export interface ClothesCardProps extends CardProps {
    addToTheCart: (product: { title: string; description: string, image: string }) => void;
  }