(function() {

	// Settings
	var settings = {
		'isSingleLine' : false,
		'baseLineOffset' : 1.02,
		'handleOffset' : [3.5, 4]
	};

	// Constant
	const SCRIPT_TITLE = 'ポイント文字をパス上文字に変換';
	const SCRIPT_VERSION = '0.5.1';

	// Get items
	var doc = app.activeDocument;  
	var sel = doc.selection;
	var targetItems = getTargetItems(sel);

	// Validation
	if(targetItems.length === 0) {
		alert('対象のアイテムが見つかりません');
		return false;
	} else {
		mainProcess();
	}

	// Main process
	function mainProcess() {

		for (var j = 0; j < targetItems.length; j++) {

			// Get original text frame item & current layer
			var originalText = targetItems[j];
			var currentlayer = originalText.layer;

			// Get bounds
			var dummyTexts = [originalText.duplicate(), originalText.duplicate()];
			dummyTexts[0].contents = '';
			for (var i = 0; i < originalText.lines[0].length; i++) {
				originalText.textRanges[i].duplicate(dummyTexts[0]);
			}
			for (var i = 0; i < dummyTexts.length; i++) {
				dummyTexts[i] = dummyTexts[i].createOutline();
			}
			var bounds = dummyTexts[1].geometricBounds;
			bounds[3] = dummyTexts[0].geometricBounds[3];
			for (var i = 0; i < dummyTexts.length; i++) {
				dummyTexts[i].remove();
			}

			// Remove Returns
			if(settings.isSingleLine) {
				for (var i = 0; i < originalText.textRanges.length; i++) {
					originalText.textRanges[i].contents = originalText.textRanges[i].contents.replace(/(\r\n|\n|\r|\u0003)/gm, '');
				}
			}

			// Create Text path
			var textPath = currentlayer.pathItems.add();
			textPath.setEntirePath([[bounds[0], bounds[3] * settings.baseLineOffset],[bounds[2], bounds[3] * settings.baseLineOffset]]);

			// Calculate handle offset
			var textPathLength = textPath.length;
			handleOffsets = [textPathLength / settings.handleOffset[0], textPathLength / settings.handleOffset[1]];

			// Move direction of path point
			var points = textPath.pathPoints;
			points[0].rightDirection = [points[0].rightDirection[0] + handleOffsets[0] , points[0].rightDirection[1] + handleOffsets[1]];
			points[1].leftDirection = [points[1].rightDirection[0] - handleOffsets[0] , points[1].rightDirection[1] + handleOffsets[1]];

			// Create Text on a path
			var textOnAPath = currentlayer.textFrames.pathText(textPath);
			textOnAPath.move(originalText, ElementPlacement.PLACEBEFORE);

			// Duplicate textrange from original text frame item
			for (var i = 0; i < originalText.textRanges.length; i++) {
				originalText.textRanges[i].duplicate(textOnAPath);
			}

			// Remove original text frame item
			originalText.remove();

			// Select text on a path
			textOnAPath.selected = true;
			textOnAPath.selected = true; // Bug Fixes
		}
	}

	// Get target items
	function getTargetItems(items) {
		var ti = [];
		for(var i = 0; i < items.length; i++) {
			if(items[i].typename === 'TextFrame' && items[i].kind === TextType.POINTTEXT) {
				ti.push(items[i]);
			} else if(items[i].typename === 'GroupItem') {
				ti = ti.concat(getTargetItems(items[i].pageItems));
			}
		}
		return ti;
	}

}());

