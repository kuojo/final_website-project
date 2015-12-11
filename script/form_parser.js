// Javascript form parser
// Written by Aryn Lacy for offline form proccessing

function getUrlVars() {
	var urlVars = {};
	var queryString = window.location.search.replace(/^\?/, '');
	queryString.split(/\&/).forEach(function(varPairs) {
		vars = varPairs.split(/\=/);
		urlVars[vars[0]] = vars[1];
	});
	return urlVars;
};

function formatVars(args) {
	// I know that this is incredibly ugly and know that there are better ways
	// Please forgive me

	if (args['proc'] === 'i3') {
		args['proc'] = "Intel i3-6320 Skylake 3.9 GHz";
	} else if (args['proc'] === 'i5') {
		args['proc'] = "Intel i5-6600 Skylake 3.3 GHz";
	} else {
		args['proc'] = "Intel i7-6700K Skylake 4.0 GHz";
	}

	if (args['ram'] === '4') {
		args['ram'] = "4 GB of Ram";
	} else if (args['ram'] === '8') {
		args['ram'] = "8 GB of Ram";
	} else if (args['ram'] === '16') {
		args['ram'] = "16 GB of Ram";
	} else {
		args['ram'] = "32 GB of Ram";
	}

	if (args['odd'] === "dvd") {
		args['odd'] = "24X DVD Burner";
	} else if (args['odd'] === "blueray") {
		args['odd'] = "16X BlueRay Burner";
	} else {
		args['odd'] = "No Optical Drive";
	}

	if (args['ssd'] === "120") {
		args['ssd'] = "120 GB Solid State Drive";
	} else if (args['ssd'] === "250") {
		args['ssd'] = "250 GB Solid State Drive";
	} else if (args['ssd'] === "500") {
		args['ssd'] = "500 GB Solid State Drive";
	}
	else {
		args['ssd'] = "";
	}

	if (args['hdd'] === "500") {
		args['hdd'] = "500 GB Hard Drive";
	} else if (args['hdd'] === "1000") {
		args['hdd'] = "1 TB Hard Drive";
	} else if (args['hdd'] === "3000") {
		args['hdd'] = "3 TB Hard Drive";
	} else if (args['hdd'] === "5000") {
		args['hdd'] = "5 TB Hard Drive";
	} else {
		if (!args['hdd'] && args['ssd'] === '') {
			args['hdd'] = "You need some sort of storage device!";
		}
		else {
			args['hdd'] = "";
		}
	}

	if (args['nic'] === "w") {
		args['nic'] = "Gigabyte Ethernet Card";
	} else if (args['nic'] === "n") {
		args['nic'] = "Wireless 450 Mbps Dual Band Card";
	} else {
		args['nic'] = "Killer AC Wireless Card";
	}

	if (args['gpu'] === '6670') {
		args['gpu'] = "6670 hd Radeon Graphics";
	}
	else if (args['gpu'] === '660') {
		args['gpu'] = "GTX 660 Nvida Graphics";
	}
	else if (args['gpu'] === '280x') {
		args['gpu'] = "R9 280X Radeon Graphics";
	}
	else if (args['gpu'] === '970') {
		args['gpu'] = "GTX 970 Nvida Graphics";
	}
	else if (args['gpu'] === 'titan') {
		args['gpu'] = "GTX Titan Z Graphics";
	}
	else {
		args['gpu'] = "Integrated";
	}

	if (args['cooler'] === 'hyper212') {
		args['cooler'] = "Cooler Master Hyper 212 EVO";
	}
	else if (args['cooler'] === 'noctua') {
		args['cooler'] = "Noctua NH-U9DX I4";
	}
	else if (args['cooler'] === 'corsairh55') {
		args['cooler'] = "Corsair Hydro H55";
	}
	else {
		args['cooler'] = "Corsair Hydro H110i GTX";
	}

	if (args['case'] === "win") {
		args['case'] = "IN WIN 901 Silver Aluminum";
	}
	else if (args['case'] === "corsair") {
		args['case'] = "Corsair Graphite Series 230T";
	}
	else if (args['case'] === "thermaltake") {
		args['case'] = "Thermaltake Chaser A71 Black";
	}
	else {
		args['case'] = "Nanoxia Deep Silence 6 <!--Thats a big case-->"
	}
	return args;
};

function writeVars(args){
	ids = ['proc','ram','odd','write_medium', 'nic', 'case', 'cooler', 'gpu']
	
	ids.forEach(function(id) {
		if (id === 'write_medium') {
			html = "Hard Drive: "+args['hdd']+"<br>Solid State: "+args['ssd'];
			document.getElementById(id).innerHTML = html;
		}
		else {
			document.getElementById(id).innerHTML = args[id];
		}
	});

}