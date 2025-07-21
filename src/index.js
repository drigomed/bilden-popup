import {
	initialProperties,
	definition,
	controller,
	paint,
	resize,
} from "./methods"

import "../static/stylepopup.css"
import * as globals from "./methods/globals.js";
//, "text!./PopUpDinamico.css"

window.define( [ "qlik", "text!./static/icons-lui.json", "text!./static/template.ng.html", "text!./static/stylepopup.css"], function (qlik, l, t, cssContent) {

	globals.setQlikObject(qlik);
	globals.setCssContent(cssContent);
	globals.setluiIcons(l);

	return {
		template: t,
		initialProperties,
		definition,
		controller,
		paint,
		resize,
		support : {
			snapshot: false,
			export: false,
			exportData : false
		}
	}
})