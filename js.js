var kamuTop;
var kamuKiri;
var skor = 0;
var skorTertinggi = 0;
var ilang;
var bom1Top;var bom1Kiri;
var bom2Top;var bom2Kiri;
var bom3Top;var bom3Kiri;
var bom4Top;var bom4Kiri;
var bom5Top;var bom5Kiri;
var bom6Top;var bom6Kiri;
var bom7Top;var bom7Kiri;
var bom8Top;var bom8Kiri;
var bom9Top;var bom9Kiri;
var makananTop = acak();var makananKiri = acak();

function acak(){
	return (Math.floor(Math.random() * 40) + 1) * 10;
}

function mulai() {
	document.addEventListener("keydown",pencet);
	skor = 0;
	ilang = 1;
	kamuTop = acak();
	kamuKiri = acak();
	bom1Top = acak();bom1Kiri = acak();
	bom2Top = acak();bom2Kiri = acak();
	bom3Top = acak();bom3Kiri = acak();
	bom4Top = acak();bom4Kiri = acak();
	bom5Top = acak();bom5Kiri = acak();
	bom6Top = acak();bom6Kiri = acak();
	bom7Top = acak();bom7Kiri = acak();
	bom8Top = acak();bom8Kiri = acak();
	bom9Top = acak();bom9Kiri = acak();
	document.getElementById('kamu').style = "left: "+kamuKiri+"px;top: "+kamuTop+"px; opacity: " + ilang + ";";
	document.getElementById('bom1').style = "left: "+bom1Kiri+"px;top: "+bom1Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom2').style = "left: "+bom2Kiri+"px;top: "+bom2Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom3').style = "left: "+bom3Kiri+"px;top: "+bom3Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom4').style = "left: "+bom4Kiri+"px;top: "+bom4Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom5').style = "left: "+bom5Kiri+"px;top: "+bom5Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom6').style = "left: "+bom6Kiri+"px;top: "+bom6Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom7').style = "left: "+bom7Kiri+"px;top: "+bom7Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom8').style = "left: "+bom8Kiri+"px;top: "+bom8Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom9').style = "left: "+bom9Kiri+"px;top: "+bom9Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom9').style = "left: "+bom9Kiri+"px;top: "+bom9Top+"px; opacity: " + ilang + ";";
	document.getElementById('makanan').style = "left: "+makananKiri+"px;top: "+makananTop+"px;";
	document.getElementById('tertinggi').innerHTML = skorTertinggi;
}

function jalan() {
	document.getElementById('tombolNavigasi').style = "display: block;";
	document.getElementById('tombolMulai').style = "display: none;";
}

function atas(){
	kamuTop += -10;
	document.getElementById('kamu').style = "left: "+kamuKiri+"px;top: "+kamuTop+"px; border-top-left-radius: 50%; border-top-right-radius: 50%;";
	cek();
}

function bawah(){
	kamuTop += 10;
	document.getElementById('kamu').style = "left: "+kamuKiri+"px;top: "+kamuTop+"px; border-bottom-left-radius: 50%; border-bottom-right-radius: 50%;";
	cek();
}

function kiri(){
	kamuKiri += -10;
	document.getElementById('kamu').style = "left: "+kamuKiri+"px;top: "+kamuTop+"px; border-top-left-radius: 50%; border-bottom-left-radius: 50%;";
	cek();
}

function kanan(){
	kamuKiri += 10;
	document.getElementById('kamu').style = "left: "+kamuKiri+"px;top: "+kamuTop+"px; border-top-right-radius: 50%; border-bottom-right-radius: 50%;";
	cek();
}

function cek(){
	if (kamuTop == bom1Top && kamuKiri == bom1Kiri) {
		kalah();
	} else if (kamuTop == bom2Top && kamuKiri == bom2Kiri) {
		kalah();
	} else if (kamuTop == bom3Top && kamuKiri == bom3Kiri) {
		kalah();
	} else if (kamuTop == bom4Top && kamuKiri == bom4Kiri) {
		kalah();
	} else if (kamuTop == bom5Top && kamuKiri == bom5Kiri) {
		kalah();
	} else if (kamuTop == bom6Top && kamuKiri == bom6Kiri) {
		kalah();
	} else if (kamuTop == bom7Top && kamuKiri == bom7Kiri) {
		kalah();
	} else if (kamuTop == bom8Top && kamuKiri == bom8Kiri) {
		kalah();
	} else if (kamuTop == bom9Top && kamuKiri == bom9Kiri) {
		kalah();
	} else if (kamuTop == makananTop && kamuKiri == makananKiri) {
		menang();
	} else if (kamuTop > 490 || kamuTop < 0 || kamuKiri > 490 || kamuKiri < 0) {
		kalah();
	} else {}
	ilang -= 0.01;
	document.getElementById('bom1').style = "left: "+bom1Kiri+"px;top: "+bom1Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom2').style = "left: "+bom2Kiri+"px;top: "+bom2Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom3').style = "left: "+bom3Kiri+"px;top: "+bom3Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom4').style = "left: "+bom4Kiri+"px;top: "+bom4Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom5').style = "left: "+bom5Kiri+"px;top: "+bom5Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom6').style = "left: "+bom6Kiri+"px;top: "+bom6Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom7').style = "left: "+bom7Kiri+"px;top: "+bom7Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom8').style = "left: "+bom8Kiri+"px;top: "+bom8Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom9').style = "left: "+bom9Kiri+"px;top: "+bom9Top+"px; opacity: " + ilang + ";";
	document.getElementById('bom9').style = "left: "+bom9Kiri+"px;top: "+bom9Top+"px; opacity: " + ilang + ";";
}

function kalah() {
	document.getElementById('skor').innerHTML = "skor terakhir anda: "+skor;
	document.getElementById('tombolNavigasi').style = "display: none;";
	document.getElementById('tombolMulai').style = "display: block;";
	if (skor >= skorTertinggi) {skorTertinggi = skor;}
	mulai();
}

function menang() {
	makananTop = acak();makananKiri = acak();
	skor += 10;
	document.getElementById('skor').innerHTML = "skor anda: "+skor;
	document.getElementById('makanan').style = "left: "+makananKiri+"px;top: "+makananTop+"px;";
}

function pencet(evt) {
	switch(evt.keyCode) {
		case 37:
			kiri();
			break;
		case 38:
			atas();
			break;
		case 39:
			kanan();
			break;
		case 40:
			bawah();
			break;
	}
}

function aktifKotak() {
	document.getElementById('kotak').style = "display: block;";
	document.getElementById('matikanKotak').style = "display: block;";
	document.getElementById('aktifKotak').style = "display: none;";
	for (var i = 0; i < 25; i++) {
		var jarak = i*20;
		var kotakKe = i+1;
		document.getElementById('kotak'+kotakKe).style = "top: "+jarak+"px;";
		document.getElementById('kotakVer'+kotakKe).style = "left: "+jarak+"px; top: 0;";
	}
}

function matikanKotak() {
	document.getElementById('kotak').style = "display: none;";
	document.getElementById('aktifKotak').style = "display: block;";
	document.getElementById('matikanKotak').style = "display: none;";
}