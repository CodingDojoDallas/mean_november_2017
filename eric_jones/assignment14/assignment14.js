var _ = {
    map: function(list, iteratee) {
        let ret_list = [];
        for(let i = 0; i < list.length; i++)
            ret_list.push(iteratee(list[i]));
        return ret_list;
    },
    reduce: function(list, iteratee, memo=0) { 
        let reduction = 0;
        for(let i = 0; i < list.length; i++)
            reduction += iteratee(memo, list[i]);
        return reduction;
    },
    find: function(list, predicate) {   
        let match;
        for(let i = 0; i < list.length; i++)
            if(predicate(list[i])){
                match = list[i];
                break;
            }
        return match;
    },
    filter: function(list, predicate) {
        let ret_list = [];
        for(let i = 0; i < list.length; i++) 
            if(predicate(list[i]))
                ret_list.push(list[i]);
        return ret_list;
    },
    reject: function(list, predicate) {
        let ret_list = [];
        for(let i = 0; i < list.length; i++)
            if(!predicate(list[i]))
                ret_list.push(list[i]);
        return ret_list;
    }
}