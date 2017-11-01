var _ = {
	map: function(arr, callback, memo = []){
		for (let i = 0; i<arr.length; i++){
			memo.push(callback(arr[i]))
		}
		return memo;
	},
	reduce: function(arr, callback){
		let value = arr[0]
		for (let i = 1; i<arr.length; i++){
			value = callback(value, arr[i])
		}
		return value;
	},
	find: function(arr, callback){
		for(let i = 0; i< arr.length; i++){
			if(callback(arr[i]))
				return arr[i]
		}
		return undefined;
	},
	filter: function(arr, callback, memo = []){
		for (let i = 0; i< arr.length; i++){
			if (callback(arr[i]))
				memo.push(arr[i]);
		}
		return memo;
	},
	reject: function(arr, callback, memo = []){
		for (let i = 0; i< arr.length; i++){
			if (!callback(arr[i]))
				memo.push(arr[i]);
		}
		return memo;
	}
}