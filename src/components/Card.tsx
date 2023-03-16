import React, {FC, useState} from 'react'

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  variant: CardVariant,
  onClick: (num: number) => void;
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
  const [state, setState] = useState(0);
    return (
      <div style={{
        width, height,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : 'none '
      }}
           onClick={() => onClick(state)}
      >
        {children}
      </div>
    );
  };

export default Card;