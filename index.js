const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(`${name}`);
}

function destructivelyPrependCat(name){
    cats.unshift(`${name}`);
}

function destructivelyRemoveLastCat(name){
    cats.pop(`${name}`);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(`${name}`)
}

function appendCat(name){
    const newCats = [...cats, "Broom"];
    return (newCats);
}

function prependCat(name){
    const newArray = ["Arnold", ...cats];
    return (newArray);
}

function removeLastCat(name){
    const newArray = cats.slice(0, -1);
    return (newArray);
}

function removeFirstCat(name){
    const newArray = cats.slice(1);
    return (newArray);
}