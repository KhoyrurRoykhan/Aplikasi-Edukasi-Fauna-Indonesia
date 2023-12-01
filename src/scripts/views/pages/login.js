const LoginPage = {
    render() {
      return `
      <div class="container" style="margin-top:100px;">
      <header>
        <h1 class="mb-4" style="text-align: center;">Form Login</h1>
      </header>

      <form action="/login" method="post">
        <div class="input-group mb-3">
          <span class="input-group-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
              <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
              <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
            </svg>
          </span>
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInputGroup1" name="email" placeholder="Your Email" required/>
            <label for="floatingInputGroup1">Your Email</label>
          </div>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
            </svg>
          </span>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" name="password" placeholder="Your Password" required/>
            <label for="floatingPassword">Your Password</label>
          </div>
        </div>
        <div class="mb-3 mt-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="rememberMe" name="rememberMe"/>
            <label class="form-check-label" for="rememberMe">Remember me</label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
        <div class="mt-3">
          <p class="text-center">Don't have an account? <a href="#/register">Register here</a>.</p>
        </div>
      </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      `;
    },
  
    afterRender() {
      const loginForm = document.querySelector('form');
  
      // Tambahkan event listener untuk menangani submit form
      loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Hindari pengiriman formulir secara default
  
        // Ambil nilai input email dan password
        const email = document.getElementById('floatingInputGroup1').value;
        const password = document.getElementById('floatingPassword').value;
  
        // Kirim data login menggunakan fetch atau metode lainnya
        try {
          const response = await fetch('/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
  
          // Periksa status respons
          if (response.ok) {
            // Redirect ke halaman home-admin jika login berhasil
            window.location.href = '#/home-admin';
          } else {
            // Handle non-2xx response (e.g., display an error message)
            const errorMessage = await response.text();
            console.error(`Error during login: ${response.status} - ${errorMessage}`);
          }
        } catch (error) {
          console.error('Error during login:', error);
        }
      });
    },
  };
  
  export default LoginPage;