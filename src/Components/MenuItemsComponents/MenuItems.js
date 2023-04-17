import menuItemsData from "../../Data/menuItemsData";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/categoriesSlice";

const MenuItems = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className="menu-items-container">
            {menuItemsData
            .filter(menuItem => {
                if (selectedCategory === "ALL") return true
                return menuItem.category === selectedCategory
            })
            .map(menuItem => {
               return <MenuItem key={menuItem.id} menuItem={menuItem}/>})
            }
        </div>
    )
}

export default MenuItems;