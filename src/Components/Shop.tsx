import { useResearch } from "../Contexts/ResearchContext";
import { useResources } from "../Contexts/ResourceContext";


let technologies = [
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

interface ShopItemProps {
  id: number;
  name: string;
  cost: number;
  currency: string;
}

function Shop() {
  let resourceContext = useResources();
  let researchContext = useResearch();

  function getLockedTechnologies() {
    return technologies.filter((technology) => {
      return !researchContext.researchedSkills.includes(technology.id);
    });
  }

  function onPurchase(shopItem: ShopItemProps) {
    researchContext.researchTechnology(shopItem.id, shopItem.cost, shopItem.currency);
  }

  return (
    <div>
      <h2 className='section-title'>Shop</h2>
      <section className="rows">
      {getLockedTechnologies().map((technology) => (
        <button key={technology.id} onClick={() => onPurchase(technology)}>
          <h3>{technology.name}</h3>
          <p>Cost: {technology.cost} {technology.currency}</p>
        </button>
      ))}
      </section>
    </div>
  );
}

export default Shop;