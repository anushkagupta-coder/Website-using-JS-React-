function List(){

    const fruits=[{id : 1,name:"apple",calories:95},
                {id : 2,name:"orange",calories:45},
                {id : 3,name:"banana",calories:105},
                {id : 4,name:"coconut",calories:37}];

    fruits.sort((a,b) => a.name.localeCompare(b.name)) ;//alphabetical order
    //replace and b for reverse order;
    //fruits.sort((a,b) =>a.calories-b.calories);

    const lowCalFruits = fruits.filter(fruit => fruit.calories<100);
        //for fruits having calories <100 ;

    const listItems = lowCalFruit.map(lowCalFruit => <li key={lowCalFruit.id}>
                        {lowCalFruit.name}: &nbsp;
                        <b>{lowCalFruit.calories}</b></li>);

    //const listItems = fruits.map(fruit => <li key={fruit.name}>
      //                  {fruit.name}: &nbsp;
             //           <b>{fruit.calories}</b></li>);
    return (<ol>{listItems}</ol>);
}
export default List