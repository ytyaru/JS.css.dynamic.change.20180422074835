define(function() {
    return class SelectBox {
	static Initialize() {
	    document.getElementById("CssSelectBox").onchange = e => {
		console.log(e.target.value);
		document.getElementById("Style").href = e.target.value;
	    };
	}
    };
});
