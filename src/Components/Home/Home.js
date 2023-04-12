import MenuItems from "../MenuItemsComponents/MenuItems";
import Allcategories from "../Filter/AllCategories";
import Heading from "./Heading";

const Home = () => {
    
    return (
      <div className='wrapper'>
        <div className="header">
            <Heading />
            <Allcategories />
        </div>
        <MenuItems />
    </div>
    )
}

export default Home;