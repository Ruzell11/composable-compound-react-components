Simple Product Card React Component


This repository contains a composable and compound React component for a simple product card.



<h1>Components</h1>

The ProductCard component is a compound component that composes several smaller components to render a product card. It provides a context for the child components to access the product data.

Props
product: An object containing data about the product.


```jsx
import { ProductCard } from './components';
import productsData from './productsData';

function MyComponent() {
  return (
    <div>
      {productsData.map((item) => (
        <ProductCard product={item}>
          <ProductCard.Image />
          <ProductCard.Name />
          <ProductCard.Description />
        </ProductCard>
      ))}
    </div>
  );
}

```

<b>ProductCard.</b>
The ProductCard.Name component is a composable component that renders the name of the product.

Example Usage of one of its component

```jsx

import { ProductCard } from './components';

function MyComponent() {
const {name} = useProductContext();
  return (
   <h1>{name}
  );
}
```

<b>LICENSE</b>
This code is licensed under the MIT license.
