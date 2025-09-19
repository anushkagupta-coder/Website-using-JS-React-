function List(props){
    const category= props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.name}>
                      {item.name}: &nbsp;
                        <b>{item.calories}</b></li>);

    /*fruits.sort((a,b) => a.name.localeCompare(b.name)) ;//alphabetical order
    //replace and b for reverse order;
    //fruits.sort((a,b) =>a.calories-b.calories);

    const lowCalFruits = fruits.filter(fruit => fruit.calories<100);
        //for fruits having calories <100 ;

    const listItems = lowCalFruit.map(lowCalFruit => <li key={lowCalFruit.id}>
                        {lowCalFruit.name}: &nbsp;
                        <b>{lowCalFruit.calories}</b></li>);

    //const listItems = fruits.map(fruit => <li key={fruit.name}>
      //                  {fruit.name}: &nbsp;
             //           <b>{fruit.calories}</b></li>);*/
    return (<>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}
            </ol>
            </>);
}
export default List