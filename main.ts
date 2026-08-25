// Buscamos el botón "¡Salúdame!" por su clase o ID
const botonSaludo = document.querySelector('#saludoBtn') as HTMLButtonElement;

// Verificamos que el botón exista antes de agregarle la magia
if (botonSaludo) {
    botonSaludo.addEventListener('click', () => {
        alert('¡Hola! Gracias por visitar mi portafolio. ¡Pronto seré una gran Desarrolladora Full Stack! 🚀');
    });
}