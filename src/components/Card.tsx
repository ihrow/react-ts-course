import React, {FC} from 'react'

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  variant: CardVariant,
  onClick: () => void;
}

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}

const Card: FC<CardProps> =
    ({
       width,
       height,
       variant,
       onClick,
       children
     }) => {
      return (
          <div style={{
            width, height,
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : 'none '
          }}
               onClick={onClick}
          >
            {children}
          </div>
      );
    };

export default Card;