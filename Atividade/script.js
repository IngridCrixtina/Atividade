function geoFindMe(e) {
    e.preventDefault()
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    const confirm = document.querySelector('.confirm')
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = 'Clique aqui para verificar';
    }
  
    function error() {
      status.textContent = 'Sua localização não foi encontrada';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocalização não é suportado pelo seu navegador!';
    } else {
      status.textContent = 'Carregando...';
      navigator.geolocation.getCurrentPosition(success, error);
      confirm.style.display = 'block'
    }
  }
  
document.querySelector('#find-me').addEventListener('click', geoFindMe);

function solicitado(){
    alert("Solicitação confirmada!")
}