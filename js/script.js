jQuery(document).ready(function($){
	
	$("#submit-button").click(function(){

		var sn = $("#serial-number").val(),
			ac = $("#activation-code").val();

		var t = urlencode("<QRCode><SN>" + $.trim(sn) + "</SN><AC>" + $.trim(ac) + "</AC></QRCode>");

		$("#qr-image").attr("src", "https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=" + t + "&choe=UTF-8");

	});

	function urlencode(str) {
		str = (str + '')
		.toString();

		// Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
		// PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
		return encodeURIComponent(str)
		.replace(/!/g, '%21')
		.replace(/'/g, '%27')
		.replace(/\(/g, '%28')
		.
		replace(/\)/g, '%29')
		.replace(/\*/g, '%2A')
		.replace(/%20/g, '+');
	}

});