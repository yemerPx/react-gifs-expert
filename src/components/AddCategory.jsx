import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One piece')
    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }
    const onSumbit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <= 1 ) return;
        onNewCategory(inputValue.trim());
        setInputValue('')
        
    }
    return (
        <form onSubmit={(event)=> onSumbit(event)}>
            <input
                type="text"
                placeholder="Search gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
