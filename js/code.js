$(function() {
	$('img[alt$=":l"]').add('img[alt$=":r"]').add('[alt$=":f"]').each(function() {
		var self = $(this),
			alt = $(this).attr('alt');
			
		if (alt.substr(-3) === " :l") {
			self.addClass('alignleft');
		}
		if (alt.substr(-3) === " :r") {
			self.addClass('alignright');
		}
		if (alt.substr(-3) === " :f") {
			self.addClass('full');
		}

		self.attr('alt', alt.substr(0, alt.length - 3));
		self.attr('title', alt.substr(0, alt.length - 3));
	});
});