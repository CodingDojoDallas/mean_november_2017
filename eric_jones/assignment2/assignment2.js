function magic_multiply(x,y){
    if(x === 0 && y === 0){
        return "All inputs 0.";
    }
    else if(typeof x === 'number' && typeof y === 'number'){
        return x * y;
    }
    else if(typeof x === 'object' && typeof y === 'number'){
        if((typeof x).isArray()){
            let ret = [];
            for(let i = 0; i < x.length; i++){
                ret.push(x[i] * y);
            }
            return ret;
        }
    }
    else if(typeof x === 'number' && typeof y === 'string'){
        return  "Error: Can not multiply by string";
    }
    else if(typeof x === 'string' && typeof y === 'number'){
        let ret = "";
        for(let i = 0; i < y; i++){
            ret += x;
        }
        return ret;
    }
}