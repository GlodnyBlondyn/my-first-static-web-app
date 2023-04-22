// wybierz elementy DOM formularza logowania
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-input');
const passwordInput = document.querySelector('#password-input');

// zdefiniuj funkcję do obsługi zdarzenia "submit" formularza logowania
loginForm.addEventListener('submit', (event) => {
  // zapobiegaj domyślnej akcji przesyłania formularza
  event.preventDefault();

  // pobierz wprowadzone dane logowania
  const loginValue = loginInput.value;
  const passwordValue = passwordInput.value;

  // sprawdź, czy wprowadzony login i hasło są poprawne
  if (emailForm === 'test' && passwordForm === '1234') {
    // przekieruj użytkownika na stronę po zalogowaniu
    window.location.href = 'C:\Users\anton\Desktop\programowanie\strona bar\navigation_bar-main\navigation_bar-main\index.html';
  } else {
    // wyświetl komunikat o błędnym loginie lub haśle
    alert('Nieprawidłowy login lub hasło.');
  }
});
