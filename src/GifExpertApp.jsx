import { useState } from 'react'
import { AddCategory,GifGrid } from './components'; 
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One piece']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])

    }
    const variableString = function variableString(value) { //variableString('bleach')
        onAddCategory(value);
    }
    return (
        <>
            <div>GifExpertApp</div>
            <AddCategory

                onNewCategory={variableString} //variableString('bleach')
            />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
                 )
            )}

            {/* <li>ABC</li> */}

        </>
    )
}
