let Unlocks = [
  {
    "id": 1,
    "name": "NAND Gates",
    "description": "NAND gates are the most common type of logic gate. They are used to create other types of logic gates, such as AND, OR, and NOT gates.",
    "cost": 10,
    "currency": "metal"
  },
  {
    "id": 2,
    "name": "NAND Flash Memory",
    "description": "NAND flash memory is a type of non-volatile storage technology that does not require power to retain data. It is used in a wide range of electronic devices, including smartphones, tablets, and solid-state drives.",
    "cost": 20,
    "currency": "metal"
  },
  {
    "id": 3,
    "name": "Rent a NAND",
    "description": "Rent a NAND is a service that allows you to rent out NAND flash memory for a specified period of time. This will allow you to earn a passive income from your NAND flash memory.",
    "cost": 30,
    "currency": "metal"
  }
];

function ShopItem(props: { name: string; price: number, currency: string }) {
  return (
    <button className="shop-item">
      <h3>{props.name}</h3>
      <p>{props.price} {props.currency}</p>
    </button>
  );
}

function Shop() {
  const shopItems = Unlocks.map((item) => {
    return <ShopItem name={item.name} price={item.cost} currency={item.currency} />;
  });
  return (
    <>
      <h2 className='section-title'>Shop</h2>
      <div className='shop-items'>
        {shopItems}
      </div>
    </>
  );
}

export default Shop;