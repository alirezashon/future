import React, { createContext, useContext, useState } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  const addItemToBasket = (item) => {
    setBasketItems([...basketItems, item]);
  };

  const removeItemFromBasket = (index) => {
    const updatedBasketItems = [...basketItems];
    updatedBasketItems.splice(index, 1);
    setBasketItems(updatedBasketItems);
  };

  const getTotalPrice = () => {
    let total = 0;
    basketItems.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  const clearBasket = () => {
    setBasketItems([]);
  };

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        addItemToBasket,
        removeItemFromBasket,
        getTotalPrice,
        clearBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
