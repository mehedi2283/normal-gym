const addToDb = id => {
    localStorage.setItem( 'Key', JSON.stringify(id));
}

const getTime = () => {

 const storedData = localStorage.getItem( 'Key');
 return storedData;
}


export {
    addToDb,
    getTime
}