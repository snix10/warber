// Fungsi untuk menampilkan halaman sesuai dengan hash URL
function route() {
    const hash = window.location.hash;
  
    if (hash === '' || hash === '#/') {
      renderHome();
    } else if (hash === '#/about') {
      renderAbout();
    } else {
      renderError();
    }
  }
  
  // Fungsi untuk menampilkan halaman Home
  function renderHome() {
    const app = document.getElementById('app');
    app.innerHTML = '<h1>Home Page</h1><p>Selamat datang di halaman utama!</p>';
  }
  
  // Fungsi untuk menampilkan halaman About
  function renderAbout() {
    const app = document.getElementById('app');
    app.innerHTML = '<h1>About Page</h1><p>Ini adalah halaman informasi tentang aplikasi kita.</p>';
  }
  
  // Fungsi untuk menampilkan halaman Error jika route tidak ditemukan
  function renderError() {
    const app = document.getElementById('app');
    app.innerHTML = '<h1>404 Error</h1><p>Halaman tidak ditemukan.</p>';
  }
  
  // Event listener untuk mendeteksi perubahan hash URL
  window.addEventListener('hashchange', route);
  
  // Ketika halaman pertama kali dimuat, panggil fungsi route untuk menampilkan halaman awal
  window.addEventListener('load', route);
  