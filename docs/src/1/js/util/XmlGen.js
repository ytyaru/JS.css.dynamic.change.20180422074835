define(function() {
    return class XmlGen {
	static Element(name, attrs=null, text=null) {
	    return '<' + name + XmlGen._Attrs(attrs) + '>' + XmlGen._Text(text) + '</' + name + '>';
	}
	static BlankElement(name, attrs=null) { return '<' + name + XmlGen._Attrs(attrs) + ' />'; }
	static Comment(comment) {
	    return '<!-- ' + comment + ' -->';
	}
	// id="value" class="value" ...
	static _Attrs(attrs=null) {
	    if (attrs === undefined || attrs == null) { return ''; }
	    let res = '';
	    for (let key in attrs) {
		res += key + '=' + XmlGen._Quote(attrs[key]) + ' ';
	    }
	    return ' ' + res.trim();
	}
	static _Text(text=null) { return (null == text) ? '' : text; }
	static _Quote(text=null) {
	    if (text === undefined || null == text) { return '""'; }
	    for (let i=0; i<text.length; i++) {
		if ('"' == text[i] && 0<i && '\\' != text[i-1]) {
		    text = text.slice(0, i) + '\\' + text.slice(i, text.length);
		}
	    }
	    return '"' + text + '"'
	}
    };
});
