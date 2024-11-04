document.addEventListener("DOMContentLoaded", () => {
    // Carregar as curtidas ao carregar a página
    loadLikes();
  });
  
  function incrementLike(newsId) {
    // Obter o valor atual das curtidas do localStorage
    let likes = localStorage.getItem(newsId);
    likes = likes ? parseInt(likes) : 0;
  
    // Incrementar curtidas
    likes++;
  
    // Salvar de volta no localStorage
    localStorage.setItem(newsId, likes);
  
    // Atualizar a exibição de curtidas
    document.getElementById(`${newsId}-likes`).textContent = `Curtidas: ${likes}`;
  }
  
  function loadLikes() {
    // Carregar curtidas da notícia específica
    const newsId = 'noticia1';  // ID único para esta notícia
    let likes = localStorage.getItem(newsId);
    likes = likes ? parseInt(likes) : 0;
    document.getElementById(`${newsId}-likes`).textContent = `Curtidas: ${likes}`;
  }
  