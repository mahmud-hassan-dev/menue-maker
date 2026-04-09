import { use } from "react"
import ItemCard from "../../Cards/ItemCard/ItemCard"
import { ItemsData } from "../../Data/ItemsData"
import type { ItemsDataModel } from "../../Models/ItemsData.model"

const Items = () => {

    const itemsData:ItemsDataModel[] = use<ItemsDataModel[]>(ItemsData)

  return (
    <div className="grid grid-cols-4 gap-4">

        itemsData.map((ele) => <ItemCard></ItemCard> )
    </div>
  )
}

export default Items