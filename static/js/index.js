// const {bulmaSlider} = require("./bulma-slider");
window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "https://storage.googleapis.com/nerfies-public/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


document.onready = function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages();

    document.getElementById('interpolation-slider').oninput = function(event) {
      setInterpolationImage(this.value);
    };
	setInterpolationImage(0);

    document.getElementById('interpolation-slider').prop = NUM_INTERP_FRAMES - 1;

    bulmaSlider.attach();

}


function keyHandler(event) {
	var key_code = event.keyCode;

	switch( key_code ) {
	case 49: // 1
		replaceImage(rgb_uw,rgb_main);
		replaceImage(depth_uw,depth_main);
		// replaceImage(syn_noisy_nv,syn_main_nv);
		break;
	case 50: // 2
		replaceImage(rgb_contrast,rgb_main);
		replaceImage(depth_gdcp,depth_main);
		// replaceImage(syn_gt_nv,syn_main_nv);

		break;
	case 51: // 3
		replaceImage(rgb_gdcp,rgb_main);
		replaceImage(depth_ibla,depth_main);
		// replaceImage(syn_avg_nv,syn_main_nv);

		break;
	case 52: // 4
		replaceImage(rgb_ucolor,rgb_main);
		replaceImage(depth_uv,depth_main);
		// replaceImage(syn_ibrnet_nv,syn_main_nv);

		break;
	case 53: // 5
		replaceImage(rgb_cwr,rgb_main);
		replaceImage(depth_uwnet,depth_main);
		// replaceImage(syn_ibrnetn_nv,syn_main_nv);

		break;
	case 54: // 6
		replaceImage(rgb_semiuir,rgb_main);
		replaceImage(depth_monouwnet,depth_main);
		// replaceImage(syn_nan_nv,syn_main_nv);

		break;
	case 55: // 7
		replaceImage(rgb_dm,rgb_main);
		replaceImage(depth_osmosis,depth_main);

		break;
	case 56: // 8
		replaceImage(rgb_osmosis,rgb_main);
		break;
	}
}


function replaceImage(newimage,image)
{
	image.src               = newimage.src;
	image.parentNode.href   = newimage.src;
	image.style.borderColor = newimage.style.borderColor;

	// swap new image in for zoom

	// var ez = $('#'+image.id).data('elevateZoom');
	// let ez = document.getElementById(image.id).data('elevateZoom');12
	// ez.swaptheimage(newimage.src,newimage.src);
}


let colors = ['#DFFF00',
	'#FFBF00',
	'#FF7F50',
	'#DE3163',
	'#9FE2BF',
	'#40E0D0',
	'#6495ED',
	'#CCCCFF',
    '#7D3C98'];

function SynColors(id)
{
	if (id === "syn_noisy") {return colors[1];}
	else if(id === "syn_gt") {return colors[2];}
	else if(id === "syn_avg") {return colors[3];}
	else if(id === "syn_bpn") {return colors[4];}
	else if(id === "syn_deeprep") {return colors[5];}
	else if(id === "syn_ibrnetn") {return colors[6];}
	else if(id === "syn_nan"){return colors[7];}
}

function SynColorsNV(id)
{
	if (id === "syn_noisy_nv") {return colors[1];}
	else if(id === "syn_gt_nv") {return colors[2];}
	else if(id === "syn_avg_nv") {return colors[3];}
	else if(id === "syn_ibrnet_nv") {return colors[5];}
	else if(id === "syn_ibrnetn_nv") {return colors[6];}
	else if(id === "syn_nan_nv"){return colors[7];}
}


function RealColors(id)
{
	if(id === "rgb_uw") {return colors[1];}
	else if(id === "rgb_contrast") {return colors[2];}
	else if(id === "rgb_gdcp") {return colors[3];}
	else if(id === "rgb_ucolor") {return colors[4];}
	else if(id === "rgb_cwr") {return colors[5];}
	else if(id === "rgb_semiuir") {return colors[6];}
	else if(id === "rgb_dm") {return colors[7];}
	else if(id === "rgb_osmosis") {return colors[8];}
}

function DepthColors(id)
{
	if(id === "depth_uw") {return colors[1];}
	else if(id === "depth_gdcp") {return colors[2];}
	else if(id === "depth_ibla") {return colors[3];}
	else if(id === "depth_uv") {return colors[4];}
	else if(id === "depth_uwnet") {return colors[5];}
	else if(id === "depth_monouwnet") {return colors[6];}
	else if(id === "depth_osmosis") {return colors[7];}
}



function setBorderSyn(image)
{
	image.style.borderColor = SynColors(image.id);
}

function setBorderSynNV(image)
{
	image.style.borderColor = SynColorsNV(image.id);
}

function setBorderReal(image)
{
	image.style.borderColor = RealColors(image.id);
}

function setBorderDepth(image)
{
	image.style.borderColor = DepthColors(image.id);
}