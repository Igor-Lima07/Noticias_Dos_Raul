fetch('noticias.json')
    .then(response => response.json())
    .then(data => {

        document.getElementById('titulo1').textContent = `${data.titulo1}`;
        document.getElementById('noticia1').textContent = `${data.noticia1}`;
        document.getElementById('imgNoticia1').textContent = `${data.imgNoticia}`;
        document.getElementById('titulo2').textContent = `${data.titulo2}`;
        document.getElementById('noticia2').textContent = `${data.noticia2}`;
        document.getElementById('titulo3').textContent = `${data.titulo3}`;
        document.getElementById('noticia3').textContent = `${data.noticia3}`;
        document.getElementById('titulo4').textContent = `${data.titulo4}`;
        document.getElementById('noticia4').textContent = `${data.noticia4}`;
        document.getElementById('titulo5').textContent = `${data.titulo5}`;
        document.getElementById('noticia5').textContent = `${data.noticia5}`;
    })
    .catch(error => console.error('Error fetching the JSON data:', error));