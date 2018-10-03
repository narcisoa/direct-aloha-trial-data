var map;

/* HARD CODED VARIABLES - hikaiex */
const hikaiexLatlng = {lat: 21.298, lng: -157.691};

const exHanaumaBay = {
  lat: 21.2690,
  lng: -157.6938,
  populartimes: [ // real data pulled from the web on 10/2/2018
    {
      "name": "Wednesday",
      "data": [
        0, 0, 0, 0, 0, 0, 0, 17, 45, 77, 88, 75, 65, 67, 67, 50, 27, 10, 2, 0, 0, 0, 0, 0
      ]
    },
    {
      "name": "Thursday",
      "data": [ // fake data - example
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 42, 42, 28, 0, 0, 59, 61, 46, 39, 32, 20, 0
      ]
    },
  ]};
const exSandyBeachPark = {
  lat: 21.2857,
  lng: -157.6727,
  populartimes: [
    {
      "name": "Wednesday",
      "data": [
        0, 0, 0, 0, 0, 0, 13, 19, 27, 35, 42, 48, 53, 56, 59, 59, 56, 48, 35, 22, 12, 6, 0, 0
      ]
    },
  ]};
const exMLighthouseTrail = {
  lat: 21.3088,
  lng: -157.6504,
  populartimes: [
    {
      "name": "Wednesday",
      "data": [
        0, 0, 0, 0, 0, 0, 0, 19, 28, 46, 62, 68, 59, 43, 30, 27, 32, 34, 26, 0, 0, 0, 0, 0
      ]
    },
  ]};
const exMLookout = {
  lat: 21.3088,
  lng: -157.6572,
  populartimes: [
    {
      "name": "Wednesday",
      "data": [
        0, 0, 0, 0, 1, 2, 5, 12, 27, 50, 75, 88, 83, 68, 55, 48, 41, 32, 22, 12, 6, 2, 1, 0
      ]
    },
  ]};
const exMTidepools = {
  lat: 21.3041,
  lng: -157.6494,
  populartimes: [
    {
      "name": "Wednesday",
      "data": [
        3, 3, 3, 3, 5, 8, 12, 17, 23, 30, 36, 41, 45, 47, 46, 44, 41, 36, 30, 24, 18, 12, 8, 5
      ]
    },
  ]};

const exLocationsArray = [exHanaumaBay, exSandyBeachPark, exMLighthouseTrail, exMLookout, exMTidepools];

/* credits: http://jsfiddle.net/jongobar/sNKWK/*/
function getColorForPercentage(value) {
  //value from 0 to 1
  var hue=((1-value)*120).toString(10);
  return ["hsl(",hue,",100%,50%)"].join("");
}

// console.log(getColorForPercentage(0));
// console.log(getColorForPercentage(0.5));
// console.log(getColorForPercentage(1));

/* INIT MAP */
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: hikaiexLatlng,
    zoom: 13
  });

  setMarkers(map, 11);
}

function setMarkers(map, time) {
  /*INIT MARKERS*/

  for (let i = 0; i < exLocationsArray.length; i++) {
    /* console.log(i, exLocationsArray[i]); */
    let location = exLocationsArray[i];

    let crowd = location["populartimes"][0]["data"][time];
    let colorCrowd = getColorForPercentage(crowd/100);

    // console.log(crowd10AM, crowd6PM);
    // console.log(colorCrowd10AM, colorCrowd6PM);

    let marker = new google.maps.Marker({
      position: location,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 14,
        /*fillColor: '#ffa500',*/

        /* SCALABILITY NOTE:
        THIS WILL NEED TO CHANGE ONCE ADD MORE THAN JUST WEDNESDAY TO LOCATION INFO */
        fillColor: colorCrowd,
        fillOpacity: 1,
        strokeColor: 'black',
        strokeWeight: 1.2,
      },
      map: map,
      /*title:"Hanauma Bay",*/
    });
  }
}

/*console.log(getColorForPercentage(100));*/