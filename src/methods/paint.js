import * as globals from './globals.js';
import * as popup from './popup.js';

export default function($element, layout) {
	$('<style>').html(globals.cssContent).appendTo( 'head' );
	
	$('#' + layout.popId).remove();

	var classePop = 'popBodyFrame';

	if(!layout.embedarDashboard) {
		classePop = 'popBodyHTML';
	}

	var classeDivFramePopUp = 'divFramePopUp';

	if($('body').hasClass('nightmode'))
		classeDivFramePopUp = 'divFramePopUpDark';

	const html = (l) => `<div id='base${l.popId}' class="modal_popup" style="z-index: 10; display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0">
		<div class="backdrop" onclick="$('#base${l.popId}').css('display','none');" ></div>
		<div class='${classeDivFramePopUp}' id='${l.popId}'>
			<span class='tituloFrame'>
				${l.tituloPopUp}
			</span>
			<span class='closeButton' onclick="$('#base${l.popId}').css('display','none');" >&times;</span>
			<div class='popBody ${classePop}'></div>
		</div>
	</div>`;

	var div = $(html(layout));
	$('#qs-page-container').prepend(div[0]);

	$($('.divFrame','#' + layout.popId).closest('.object-wrapper')[0]).find('a[q-title-translation="Tooltip.ZoomIn"]').hide();
}
