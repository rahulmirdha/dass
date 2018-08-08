var doc = $(document)

function assess(){
	let qs = $(".assessment")
	let lqs = qs.length
	let vals = []
	for(let i = 0; i<=lqs; i++){
		vals.push( parseInt($(".assessment:nth-child("+i+") input:checked").val()))
	}
	
	// implement the algorithm

	let ixs = [
		[1, 6, 8, 11, 12, 14, 18],
		[3, 5, 10, 13, 16, 17, 21],
		[2, 4, 7, 9, 15, 19, 20]
	]

	let result = []

	$.each(ixs, function(index, value){
		let sum = 0
		$.each(value, function(i, v){
			sum += vals[v]
		})
		result.append(sum)
	})

	console.log(result)

}

$("#assess").click(function(){
	let qs = $(".assessment")
	let lqs = qs.length
	let flag = true
	for(let i = 0; i<=lqs; i++){
		if($(".assessment:nth-child("+i+") input:checked").val() == undefined){
			flag = false
		}
	}
	if(flag){
		assess()
	} else{
		alert("please answer to all the questions")
	}
});
