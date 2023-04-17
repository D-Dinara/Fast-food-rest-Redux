import Filter from "./Filter";

const Allcategories = () => {

    const categories = ["ALL","BEEF","CHICKEN","SEAFOOD","SIDEDISHES","COMBO",]
    
    return (
        <div className="all-categories">
            {categories.map((category,index) =>
               <Filter key={index} category={category} />
            )}
        </div>
    )
}

export default Allcategories;

