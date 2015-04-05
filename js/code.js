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

	var language = window.navigator.userLanguage || window.navigator.language;
	if (language.length >= 2 && language.substr(0, 2) != "es") {
		var swapmonthday = function(str) {
			var tmpdate = str.split("-");
			var x = tmpdate[1];
			tmpdate[1] = tmpdate[0];
			tmpdate[0] = x;
			return tmpdate.join("-");
		};

		$('html').attr('lang', 'en');

		$('#subheader h2').html(function(i, old) {
			return old
				.replace('CTO de Sonusland Inc., Fundador de', 'CTO of Sonusland Inc., Founder of')
				.replace('Escribiendo desde', 'Writing from')
				.replace('Originalmente Chileno', 'Originally from Chile')
				.replace('Mi twitter', 'Follow me on Twitter')
		});
		$('.blogpost-item span').html(function(i, old) {
			var dateOld = "",
				dateNew = "",
				datesfound = old.match(/[0-9]{1,2}\-[0-9]{1,2}\-[0-9]{4}/g);

			if (datesfound != null && datesfound.length == 1) {
				dateOld = datesfound[0];
				dateNew = swapmonthday(dateOld);
			}

			return old
				.replace(dateOld, dateNew)
				.replace('Publicado el', 'Published at')
				.replace('minuto', 'minute')
				.replace('minutos', 'minutes')
				.replace('palabra', 'word')
				.replace('palabras', 'words')
		});
		$('.meta span').html(function(i, old) {
			var dateOld = "",
				dateNew = "",
				datesfound = old.match(/[0-9]{1,2}\-[0-9]{1,2}\-[0-9]{4}/g);

			if (datesfound != null && datesfound.length == 1) {
				dateOld = datesfound[0];
				dateNew = swapmonthday(dateOld);
			}

			return old
				.replace(dateOld, dateNew)
				.replace('minuto', 'minute')
				.replace('minutos', 'minutes')
				.replace('de lectura', 'reading')
				.replace('palabra', 'word')
				.replace('palabras', 'words')
				.replace('Publicado el', 'Published at')
		});
		$('#post-share strong').html(function(i, old) {
			return old
				.replace('Comparte esto', 'Share this')
		});
		$('.pagination-prev').html(function(i, old) {
			return old.replace('Página Anterior', 'Previous Page')
		});
		$('.pagination-next').html(function(i, old) {
			return old.replace('Página Siguiente', 'Next Page')
		});
		$('footer p').html(function(i, old) {
			return old
				.replace('Weblog personal de', 'Personal weblog of')
				.replace('Creado con', 'Created with')
				.replace('Adaptación de Monoid de Ghost', 'Modified version of Monoid from Ghost')
		});
	}
});