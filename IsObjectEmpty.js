var isEmpty = function(obj) {
    if(Object.keys(obj).length !== 0) {
        return false
    }
    return true;
};


console.log(isEmpty({}))
