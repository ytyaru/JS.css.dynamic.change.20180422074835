define(function(require, exports, module) {
    const XmlGen = require('js/util/XmlGen');
    return class SelectBox {
	static get Id() { return 'CssSelectBox'; }
	static get LinkId() { return 'Style'; }
	static AppendTo(parent) {
	    console.log(parent);
	    const dom = SelectBox.Create();
	    parent.appendChild(dom);
	    console.log(document.body.querySelectorAll('select'));
	    SelectBox._SetEvent(dom);
	}
	static Create() {
	    const html = SelectBox._MakeHtmlString();
	    console.log(html);
	    const parser = new DOMParser();
	    //const dom = parser.parseFromString(html, "application/xml");
	    const dom = parser.parseFromString(html, "text/html");
	    console.log(dom);
	    //if (0 < dom.body.querySelectorAll('parsererror').length) {
	    if (0 < dom.querySelectorAll('parsererror').length) {
		throw new Error('パースエラー', html);
	    }
	    const domSelect = dom.getElementsByTagName('select')[0];
	    console.log(domSelect);
	    //SelectBox._SetEvent(domSelect);
	    return domSelect ;
	    //SelectBox._SetEvent(dom);
	    //return dom;
	    //return dom.getElementsByTagName('select')[0];
	}
	static _MakeHtmlString() {
	    const cssFiles = [
		'black',
		'white',
	    ];
	    let options = [];
	    for (let v of cssFiles) {
		options.push(XmlGen.Element('option', {'value': SelectBox._CssPath(v)}, v));
	    }
	    return XmlGen.Element('select', {'id': SelectBox.Id}, options.join(''));
	}
	static _CssPath(name) { return `./css/${name}.css`; }
	static _SetEvent(dom) {
	    console.log(dom);
	    //dom.onchange = e => {
	    dom.onchange = e => {
		console.log(e.target.value);
		document.getElementById(SelectBox.LinkId).href = e.target.value;
	    };
	    /*
	    */
	    /*
	    dom.onchange = () => {
		console.log(this);
		console.log(this.value);
		document.getElementById(SelectBox.LinkId).href = this.value;
		//console.log(e.target.value);
		//document.getElementById(SelectBox.LinkId).href = e.target.value;
	    };
	    */
	    /*
	    dom.addEventListener('change', () => {
		console.log(this);
		console.log(this.value);
		document.getElementById(SelectBox.LinkId).href = this.value;
	    });
	    */
	    /*
	    let elm = document.getElementById(SelectBox.Id);
	    console.log(elm);
	    elm.addEventListener('change', () => {
		console.log(this);
		console.log(this.value);
		document.getElementById(SelectBox.LinkId).href = this.value;
	    });
	    */
	    /*
	    document.getElementById(SelectBox.Id).onchange = e => {
		console.log(e.target.value);
		document.getElementById(SelectBox.LinkId).href = e.target.value;
	    };
	    */
	}
    };
});
