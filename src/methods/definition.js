import * as about from "../../../utils/about";
import * as sheetList from "../../../utils/sheetList";
import * as globals from "./globals.js";

export default {
	type: "items",
	component: "accordion",
	items: {
		appearancePanel: {
			uses: "settings",
			items: {
				json: {
					type: 'items',
					label: 'Configuração',
					items: { 
						popId: {
							ref: "popId",
							expression: false,
							type: "string",
							label: "Pop-up ID (precisa ser único na aba)",
							defaultValue: ""
						},
						tituloPopUp: {
							ref: "tituloPopUp",
							expression: 'optional',
							type: "string",
							label: "Tí­tulo do Pop-up",
							defaultValue: ""
						},
						showSelectionBar: {
							ref: "showSelectionBar",
							type: "boolean",
							label: "Exibir barra de seleções?"
						},
						buttonIconsLui: {
							type:"string", 
							component:"dropdown", 
							label:"Ícone do botão", 
							ref:"buttonIconsLui", 
							options:function() {
								return function(e) {
									var t=JSON.parse(e).icons, l=[]; return t.forEach(function(e) {
											l.push( {
													value:e.id, label:e.name
												}

											)
										}

									), l.sort(function(e, t) {
											return(""+e.label).localeCompare(t.label)
										}

									), l.unshift( {
											value:"", label:">> No icon <<"
										}

									), l
								}

								(globals.luiIcons)
							}
						},
						tituloBotao: {
							ref: "tituloBotao",
							expression: "optional",
							type: "string",
							label: "Label do botão",
							defaultValue: ""
						},
						posicionarFixo: {
							ref: "posicionarFixo",
							expression: false,
							type: "boolean",
							label: "Posicionamento Fixo?",
							defaultValue: true
						},
						btnRight: {
							ref: "btnRight",
							expression: false,
							type: "number",
							label: "Posição do botão (direita)",
							defaultValue: "90",
							show: function(e) { return e.posicionarFixo; }
						},
						btnTop: {
							ref: "btnTop",
							expression: false,
							type: "number",
							label: "Posição do botão (topo)",
							defaultValue: "90",
							show: function(e) { return e.posicionarFixo; }
						},
						embedarDashboard: {
							ref: "embedarDashboard",
							expression: false,
							type: "boolean",
							label: "Exibir sheet?",
							defaultValue: true
						},
						conteudoHTML: {
							ref: "conteudoHTML",
							expression: "optional",
							type: "string",
							label: "Conteúdo HTML",
							defaultValue: "",
							show: function(e) { return !e.embedarDashboard; }
						},							
						sheetList: {
							type:"string", 
							component:"dropdown", 
							label:"Selecione a aba carregada", 
							ref:"sheetId", 
							show: function(e) { return e.embedarDashboard; },
							options:function() {
								return sheetList.getPPList( {
										listType:"sheet", sortBy:"title"
									}, globals.qlikObject

								)
							}
						}
						
					}								
				}					
			}
		},
		about: about.config
	}
}
