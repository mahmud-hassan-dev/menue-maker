import type { ItemsDataModel } from "../../Models/ItemsData.model";

const ItemCard: React.FC<{ item: ItemsDataModel }> = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-2">{item.name}</h2>
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-auto object-cover rounded-lg blur-sm"
      />
    </div>
  );
};

export default ItemCard;
