import { useState } from "react";
import ItemCard from "../../Cards/ItemCard/ItemCard";
import { ItemsData } from "../../Data/ItemsData";
import type { ItemsDataModel } from "../../Models/ItemsData.model";

const Items = () => {
  const data: ItemsDataModel[] = ItemsData;

  const [clickedItems, setClickedItems] = useState<ItemsDataModel[]>([]);
  const handleClickedItem = (item: ItemsDataModel) => {
    setClickedItems((prevItems) => [...prevItems, item]);
    console.log('clicked item:: ', item);
    
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 px-10">
      {data.map((ele) => (
        <ItemCard key={ele.id} item={ele} onClick={handleClickedItem} />
      ))}
    </div>
  );
};

export default Items;
