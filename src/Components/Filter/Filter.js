import { useSelector, useDispatch } from "react-redux";
import { getSelectedCategory, selectCategory } from "../../redux/categoriesSlice";

const Filter = ({ category }) => {

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    return (
        <div>
            <h3 onClick={() => {dispatch(selectCategory(category))}} className={selectedCategory === category ? "category selected-category" : "category"}>{category}</h3>
        </div>
    )
}

export default Filter;