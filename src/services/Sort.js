export const sortData = (data, sortType) => {
    return [...data].sort((a,b)=>{
        if(sortType === "A-Z"){
            return a.category.localeCompare(b.category);

        } else if(sortType === "Z-A"){
            return   b.category.localeCompare(a.category)
        } else if( sortType === "Amount Ascending"){
            return a.amount - b.amount;
        } else if( sortType === "Amount Descending"){
            return b.amount - a.amount;
        } else if(sortType === "Date Latest"){
            return new Date(`${b.date}T${b.time}`) - new Date(`${a.date}T${a.time}`)
         } else if(sortType === "Date Oldest"){
            return new new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
        }
        return 0;
    })
}