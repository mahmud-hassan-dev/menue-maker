import ItemCard from "../../Cards/ItemCard/ItemCard";
import { ItemsData } from "../../Data/ItemsData";
import type { ItemsDataModel } from "../../Models/ItemsData.model";

const Items = () => {
  const data: ItemsDataModel[] = ItemsData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {data.map((ele) => (
        <ItemCard key={ele.id} item={ele} />
      ))}
    </div>
  );
};

export default Items;
