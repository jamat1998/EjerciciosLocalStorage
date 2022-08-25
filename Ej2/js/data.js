 const data =  document.getElementById('data');
 const local = localStorage.getItem('input')
    data.innerHTML += `<p>${local}</p>`;