(function() {
  var clickOnMapSection, infoWindowZIndex, initialize, scrollToMap;

  infoWindowZIndex = 0;

  initialize = function() {
    var bentoContent, bentoInfowindow, bentoMarker, bentoPos, caxiasContent, caxiasInfowindow, caxiasMarker, caxiasPos, erechimContent, erechimInfowindow, erechimMarker, erechimPos, lajeadoContent, lajeadoInfowindow, lajeadoMarker, lajeadoPos, map, mapOptions, matrizContent, matrizInfowindow, matrizMarker, matrizPos, novaPrataContent, novaPrataInfowindow, novaPrataMarker, novaPrataPos, passoFundoContent, passoFundoInfowindow, passoFundoMarker, passoFundoPos, serafinaCorreaContent, serafinaCorreaInfowindow, serafinaCorreaMarker, serafinaCorreaPos;
    matrizPos = new google.maps.LatLng(-29.979305, -51.181505);
    bentoPos = new google.maps.LatLng(-29.170824, -51.532166);
    caxiasPos = new google.maps.LatLng(-29.153927, -51.203849);
    erechimPos = new google.maps.LatLng(-27.636613, -52.242179);
    lajeadoPos = new google.maps.LatLng(-29.452341, -51.978877);
    novaPrataPos = new google.maps.LatLng(-28.781445, -51.607614);
    passoFundoPos = new google.maps.LatLng(-28.255982, -52.394711);
    serafinaCorreaPos = new google.maps.LatLng(-28.720752, -51.929235);
    mapOptions = {
      center: matrizPos,
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("maps"), mapOptions);
    matrizContent = '\
    <div id="content">\
      <div id="siteNotice"></div>\
      <h1 id="firstHeading" class="firstHeading">Matriz</h1>\
      <div id="bodyContent">\
        <p>Matriz informações aqui</p>\
      </div>\
    </div>';
    matrizInfowindow = new google.maps.InfoWindow({
      content: matrizContent
    });
    matrizMarker = new google.maps.Marker({
      position: matrizPos,
      map: map,
      title: 'Matriz'
    });
    google.maps.event.addListener(matrizMarker, 'click', function() {
      matrizInfowindow.setZIndex(++infoWindowZIndex);
      return matrizInfowindow.open(map, matrizMarker);
    });
    bentoContent = '\
    <div id="content">\
      <div id="siteNotice"></div>\
      <h1 id="firstHeading" class="firstHeading">Bento</h1>\
      <div id="bodyContent">\
        <p>Bento informações aqui</p>\
      </div>\
    </div>';
    bentoInfowindow = new google.maps.InfoWindow({
      content: bentoContent
    });
    bentoMarker = new google.maps.Marker({
      position: bentoPos,
      map: map,
      title: 'bento'
    });
    google.maps.event.addListener(bentoMarker, 'click', function() {
      bentoInfowindow.setZIndex(++infoWindowZIndex);
      return bentoInfowindow.open(map, bentoMarker);
    });
    caxiasContent = '\
    <div id="content">\
      <div id="siteNotice"></div>\
      <h1 id="firstHeading" class="firstHeading">Caxias</h1>\
      <div id="bodyContent">\
        <p>Caxias informações aqui</p>\
      </div>\
    </div>';
    caxiasInfowindow = new google.maps.InfoWindow({
      content: caxiasContent
    });
    caxiasMarker = new google.maps.Marker({
      position: caxiasPos,
      map: map,
      title: 'caxias'
    });
    google.maps.event.addListener(caxiasMarker, 'click', function() {
      caxiasInfowindow.setZIndex(++infoWindowZIndex);
      return caxiasInfowindow.open(map, caxiasMarker);
    });
    erechimContent = '\
    <div id="content">\
      <div id="siteNotice"></div>\
      <h1 id="firstHeading" class="firstHeading">Erechim</h1>\
      <div id="bodyContent">\
        <p>Erechim informações aqui</p>\
      </div>\
    </div>';
    erechimInfowindow = new google.maps.InfoWindow({
      content: erechimContent
    });
    erechimMarker = new google.maps.Marker({
      position: erechimPos,
      map: map,
      title: 'erechim'
    });
    google.maps.event.addListener(erechimMarker, 'click', function() {
      erechimInfowindow.setZIndex(++infoWindowZIndex);
      return erechimInfowindow.open(map, erechimMarker);
    });
    lajeadoContent = '\
    <div id="content">\
      <div id="siteNotice"></div>\
      <h1 id="firstHeading" class="firstHeading">Lajeado</h1>\
      <div id="bodyContent">\
        <p>Lajeado informações aqui</p>\
      </div>\
    </div>';
    lajeadoInfowindow = new google.maps.InfoWindow({
      content: lajeadoContent
    });
    lajeadoMarker = new google.maps.Marker({
      position: lajeadoPos,
      map: map,
      title: 'lajeado'
    });
    google.maps.event.addListener(lajeadoMarker, 'click', function() {
      lajeadoInfowindow.setZIndex(++infoWindowZIndex);
      return lajeadoInfowindow.open(map, lajeadoMarker);
    });
    novaPrataContent = '\
    <div id="content">\
      <div id="siteNotice"></div>\
      <h1 id="firstHeading" class="firstHeading">Nova Prata</h1>\
      <div id="bodyContent">\
        <p>Nova Prata informações aqui</p>\
      </div>\
    </div>';
    novaPrataInfowindow = new google.maps.InfoWindow({
      content: novaPrataContent
    });
    novaPrataMarker = new google.maps.Marker({
      position: novaPrataPos,
      map: map,
      title: 'novaPrata'
    });
    google.maps.event.addListener(novaPrataMarker, 'click', function() {
      novaPrataInfowindow.setZIndex(++infoWindowZIndex);
      return novaPrataInfowindow.open(map, novaPrataMarker);
    });
    passoFundoContent = '\
    <div id="content">\
      <div id="siteNotice"></div>\
      <h1 id="firstHeading" class="firstHeading">Passo Fundo</h1>\
      <div id="bodyContent">\
        <p>Passo Fundo informações aqui</p>\
      </div>\
    </div>';
    passoFundoInfowindow = new google.maps.InfoWindow({
      content: passoFundoContent
    });
    passoFundoMarker = new google.maps.Marker({
      position: passoFundoPos,
      map: map,
      title: 'passoFundo'
    });
    google.maps.event.addListener(passoFundoMarker, 'click', function() {
      passoFundoInfowindow.setZIndex(++infoWindowZIndex);
      return passoFundoInfowindow.open(map, passoFundoMarker);
    });
    serafinaCorreaContent = '\
    <div id="content">\
      <div id="siteNotice"></div>\
      <h1 id="firstHeading" class="firstHeading">Serafina Correa</h1>\
      <div id="bodyContent">\
        <p>Serafina Correa informações aqui</p>\
      </div>\
    </div>';
    serafinaCorreaInfowindow = new google.maps.InfoWindow({
      content: serafinaCorreaContent
    });
    serafinaCorreaMarker = new google.maps.Marker({
      position: serafinaCorreaPos,
      map: map,
      title: 'sera'
    });
    google.maps.event.addListener(serafinaCorreaMarker, 'click', function() {
      serafinaCorreaMarker.setZIndex(++infoWindowZIndex);
      return serafinaCorreaInfowindow.open(map, serafinaCorreaMarker);
    });
    $("#portoalegre-block").on('click', function() {
      return clickOnMapSection(map, matrizPos);
    });
    $("#caxiasdosul-block").on('click', function() {
      return clickOnMapSection(map, caxiasPos);
    });
    $("#bentogoncalves-block").on('click', function() {
      return clickOnMapSection(map, bentoPos);
    });
    $("#erechim-block").on('click', function() {
      return clickOnMapSection(map, erechimPos);
    });
    $("#lajeado-block").on('click', function() {
      return clickOnMapSection(map, lajeadoPos);
    });
    $("#novaprata-block").on('click', function() {
      return clickOnMapSection(map, novaPrataPos);
    });
    $("#passofundo-block").on('click', function() {
      return clickOnMapSection(map, passoFundoPos);
    });
    return $("#serafinacorrea-block").on('click', function() {
      return clickOnMapSection(map, serafinaCorreaPos);
    });
  };

  scrollToMap = function() {
    return $('html, body').stop().animate({
      scrollTop: $("#maps").offset().top - 100
    }, 500, 'swing');
  };

  clickOnMapSection = function(map, newCenter) {
    scrollToMap();
    map.setCenter(newCenter);
    return map.setZoom(14);
  };

  $(document).ready(function() {
    return initialize();
  });

}).call(this);