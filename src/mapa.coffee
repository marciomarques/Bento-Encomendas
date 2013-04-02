infoWindowZIndex = 0
initialize = ->
  matrizPos = new google.maps.LatLng -29.979305, -51.181505
  bentoPos = new google.maps.LatLng -29.170824, -51.532166
  caxiasPos = new google.maps.LatLng -29.153927, -51.203849
  erechimPos = new google.maps.LatLng -27.636613, -52.242179
  lajeadoPos = new google.maps.LatLng -29.452341, -51.978877
  novaPrataPos = new google.maps.LatLng -28.781445, -51.607614
  passoFundoPos = new google.maps.LatLng -28.255982, -52.394711
  serafinaCorreaPos = new google.maps.LatLng -28.720752, -51.929235

  mapOptions =
    center: matrizPos
    zoom: 7
    mapTypeId: google.maps.MapTypeId.ROADMAP

  map = new google.maps.Map document.getElementById("maps"), mapOptions

  # matriz
  matrizContent = '
    <div id="content">
      <div id="siteNotice"></div>
      <h1 id="firstHeading" class="firstHeading">Matriz</h1>
      <div id="bodyContent">
        <p>Matriz informações aqui</p>
      </div>
    </div>'
  matrizInfowindow = new google.maps.InfoWindow
    content: matrizContent

  matrizMarker = new google.maps.Marker
    position: matrizPos
    map: map
    title: 'Matriz'

  google.maps.event.addListener matrizMarker, 'click', ->
    matrizInfowindow.setZIndex ++infoWindowZIndex
    matrizInfowindow.open map, matrizMarker

  # bento
  bentoContent = '
    <div id="content">
      <div id="siteNotice"></div>
      <h1 id="firstHeading" class="firstHeading">Bento</h1>
      <div id="bodyContent">
        <p>Bento informações aqui</p>
      </div>
    </div>'
  bentoInfowindow = new google.maps.InfoWindow
    content: bentoContent

  bentoMarker = new google.maps.Marker
    position: bentoPos
    map: map
    title: 'bento'
  google.maps.event.addListener bentoMarker, 'click', ->
    bentoInfowindow.setZIndex ++infoWindowZIndex
    bentoInfowindow.open map, bentoMarker

  # caxias
  caxiasContent = '
    <div id="content">
      <div id="siteNotice"></div>
      <h1 id="firstHeading" class="firstHeading">Caxias</h1>
      <div id="bodyContent">
        <p>Caxias informações aqui</p>
      </div>
    </div>'
  caxiasInfowindow = new google.maps.InfoWindow
    content: caxiasContent
  caxiasMarker = new google.maps.Marker
    position: caxiasPos
    map: map
    title: 'caxias'
  google.maps.event.addListener caxiasMarker, 'click', ->
    caxiasInfowindow.setZIndex ++infoWindowZIndex
    caxiasInfowindow.open map, caxiasMarker

  # erechim
  erechimContent = '
    <div id="content">
      <div id="siteNotice"></div>
      <h1 id="firstHeading" class="firstHeading">Erechim</h1>
      <div id="bodyContent">
        <p>Erechim informações aqui</p>
      </div>
    </div>'
  erechimInfowindow = new google.maps.InfoWindow
    content: erechimContent
  erechimMarker = new google.maps.Marker
    position: erechimPos
    map: map
    title: 'erechim'
  google.maps.event.addListener erechimMarker, 'click', ->
    erechimInfowindow.setZIndex ++infoWindowZIndex
    erechimInfowindow.open map, erechimMarker

  # lajeado
  lajeadoContent = '
    <div id="content">
      <div id="siteNotice"></div>
      <h1 id="firstHeading" class="firstHeading">Lajeado</h1>
      <div id="bodyContent">
        <p>Lajeado informações aqui</p>
      </div>
    </div>'
  lajeadoInfowindow = new google.maps.InfoWindow
    content: lajeadoContent
  lajeadoMarker = new google.maps.Marker
    position: lajeadoPos
    map: map
    title: 'lajeado'
  google.maps.event.addListener lajeadoMarker, 'click', ->
    lajeadoInfowindow.setZIndex ++infoWindowZIndex
    lajeadoInfowindow.open map, lajeadoMarker

  # nova prata
  novaPrataContent = '
    <div id="content">
      <div id="siteNotice"></div>
      <h1 id="firstHeading" class="firstHeading">Nova Prata</h1>
      <div id="bodyContent">
        <p>Nova Prata informações aqui</p>
      </div>
    </div>'
  novaPrataInfowindow = new google.maps.InfoWindow
    content: novaPrataContent
  novaPrataMarker = new google.maps.Marker
    position: novaPrataPos
    map: map
    title: 'novaPrata'
  google.maps.event.addListener novaPrataMarker, 'click', ->
    novaPrataInfowindow.setZIndex ++infoWindowZIndex
    novaPrataInfowindow.open map, novaPrataMarker

  # passo fundo
  passoFundoContent = '
    <div id="content">
      <div id="siteNotice"></div>
      <h1 id="firstHeading" class="firstHeading">Passo Fundo</h1>
      <div id="bodyContent">
        <p>Passo Fundo informações aqui</p>
      </div>
    </div>'
  passoFundoInfowindow = new google.maps.InfoWindow
    content: passoFundoContent
  passoFundoMarker = new google.maps.Marker
    position: passoFundoPos
    map: map
    title: 'passoFundo'
  google.maps.event.addListener passoFundoMarker, 'click', ->
    passoFundoInfowindow.setZIndex ++infoWindowZIndex
    passoFundoInfowindow.open map, passoFundoMarker

  # serafinaCorrea
  serafinaCorreaContent = '
    <div id="content">
      <div id="siteNotice"></div>
      <h1 id="firstHeading" class="firstHeading">Serafina Correa</h1>
      <div id="bodyContent">
        <p>Serafina Correa informações aqui</p>
      </div>
    </div>'
  serafinaCorreaInfowindow = new google.maps.InfoWindow
    content: serafinaCorreaContent
  serafinaCorreaMarker = new google.maps.Marker
    position: serafinaCorreaPos
    map: map
    title: 'sera'
  google.maps.event.addListener serafinaCorreaMarker, 'click', ->
    serafinaCorreaMarker.setZIndex ++infoWindowZIndex
    serafinaCorreaInfowindow.open map, serafinaCorreaMarker

  $("#portoalegre-block").on 'click', ->
    clickOnMapSection map, matrizPos
    
  $("#caxiasdosul-block").on 'click', ->
    clickOnMapSection map, caxiasPos

  $("#bentogoncalves-block").on 'click', ->
    clickOnMapSection map, bentoPos

  $("#erechim-block").on 'click', ->
    clickOnMapSection map, erechimPos

  $("#lajeado-block").on 'click', ->
    clickOnMapSection map, lajeadoPos

  $("#novaprata-block").on 'click', ->
    clickOnMapSection map, novaPrataPos

  $("#passofundo-block").on 'click', ->
    clickOnMapSection map, passoFundoPos

  $("#serafinacorrea-block").on 'click', ->
    clickOnMapSection map, serafinaCorreaPos

scrollToMap = ->
  $('html, body').stop().animate
    scrollTop: $("#maps").offset().top - 100
  , 500, 'swing'

clickOnMapSection = (map, newCenter) ->
  scrollToMap()
  map.setCenter newCenter
  map.setZoom 16

$(document).ready ->
  initialize()
