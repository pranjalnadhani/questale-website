var MAP_WIDTH = 680;
var MAP_HEIGHT = 345;

var mapContainer = document.getElementById('world-map');
var infoContainer = document.getElementById('client-info');

var infoCommentNode = infoContainer.querySelector('.comment');
var infoLogoNode = infoContainer.querySelector('.client-logo');
var infoNameNode = infoContainer.querySelector('.client-name');

var map = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT);

// Set the background image
map.image('assets/img/world-map.jpg', 0, 0, MAP_WIDTH, MAP_HEIGHT);

var style = {
  r: 16,
  fill: '#fff',
  stroke: "#fff",
  "stroke-width": 1,
  "stroke-linejoin": "round",
  cursor: 'pointer'
};

var animationSpeed = 150;
var hoverStyle = {
  r: 36
};

// List of locations
var locations = {
  royal_dutch_shell: map.circle(142, 41).data('location_data', {
    comment: 'We had hired Hardeep for our family wedding event. He and his team helped us in freezing the event with such beautiful and candid shots which we can cherish forever.',
    logo_url: '',
    name: 'Royal Dutch Shell'
  }),
  location_2: map.circle(68, 64).data('location_data', {
    comment: 'We had hired Hardeep for our family wedding event. He and his team helped us in freezing the event with such beautiful and candid shots which we can cherish forever.',
    logo_url: '',
    name: 'ABC'
  }),
  location_3: map.circle(158, 181).data('location_data', {
    comment: 'We had hired Hardeep for our family wedding event. He and his team helped us in freezing the event with such beautiful and candid shots which we can cherish forever.',
    logo_url: '',
    name: 'DEF'
  }),
  location_4: map.circle(528, 41).data('location_data', {
    comment: 'We had hired Hardeep for our family wedding event. He and his team helped us in freezing the event with such beautiful and candid shots which we can cherish forever.',
    logo_url: '',
    name: 'GHI'
  }),
  location_5: map.circle(607, 253).data('location_data', {
    comment: 'We had hired Hardeep for our family wedding event. He and his team helped us in freezing the event with such beautiful and candid shots which we can cherish forever.',
    logo_url: '',
    name: 'JKL'
  }),
  location_6: map.circle(364, 155).data('location_data', {
    comment: 'We had hired Hardeep for our family wedding event. He and his team helped us in freezing the event with such beautiful and candid shots which we can cherish forever.',
    logo_url: '',
    name: 'MNO'
  }),
  location_7: map.circle(297, 149).data('location_data', {
    comment: 'We had hired Hardeep for our family wedding event. He and his team helped us in freezing the event with such beautiful and candid shots which we can cherish forever.',
    logo_url: '',
    name: 'PQR'
  }),
  location_8: map.circle(174, 253).data('location_data', {
    comment: 'We had hired Hardeep for our family wedding event. He and his team helped us in freezing the event with such beautiful and candid shots which we can cherish forever.',
    logo_url: '',
    name: 'STU'
  })
};

for(var locationPoint in locations) {
  (function (location) {
      location.attr(style).shadow(0, 2);

      location[0].addEventListener("mouseover", function() {
          location.animate(hoverStyle, animationSpeed);

          var locationData = location.data('location_data');
          infoCommentNode.innerHTML = locationData.comment;
          infoLogoNode.setAttribute('src', locationData.logo_url);
          infoNameNode.innerHTML = locationData.name;
      }, true);

      location[0].addEventListener("mouseout", function() {
        location.animate(style, animationSpeed);
      }, true);

  })(locations[locationPoint]);
}
