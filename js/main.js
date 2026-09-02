

document.addEventListener('DOMContentLoaded', function () {

  
  const navToggle = document.getElementById('nav-toggle');
  const navEnlaces = document.getElementById('nav-enlaces');

  if (navToggle && navEnlaces) {
    navToggle.addEventListener('click', function () {
      const abierto = navEnlaces.classList.toggle('nav__enlaces--abierto');
      navToggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      navToggle.classList.toggle('nav__toggle--activo', abierto);
    });

    navEnlaces.querySelectorAll('a').forEach(function (enlace) {
      enlace.addEventListener('click', function () {
        navEnlaces.classList.remove('nav__enlaces--abierto');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }


  
  const cabecera = document.getElementById('cabecera');

  function actualizarCabecera() {
    if (window.scrollY > 40) {
      cabecera.classList.add('cabecera--fija');
    } else {
      cabecera.classList.remove('cabecera--fija');
    }
  }

  window.addEventListener('scroll', actualizarCabecera);
  actualizarCabecera();


  
  const secciones = document.querySelectorAll('section[id]');
  const enlacesMenu = document.querySelectorAll('.nav__enlaces a[href^="#"]');

  const observerMenu = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        const id = entrada.target.getAttribute('id');
        enlacesMenu.forEach(function (enlace) {
          enlace.classList.toggle('activo', enlace.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  secciones.forEach(function (seccion) {
    observerMenu.observe(seccion);
  });


  
  const elementosReveal = document.querySelectorAll('.reveal');

  const observerReveal = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observerReveal.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  elementosReveal.forEach(function (el) {
    observerReveal.observe(el);
  });



  const ACCESS_KEY = '8a0625fc-c265-4c18-bce2-8acec16291c6';

  const formContacto = document.getElementById('form-contacto');
  const formMensaje = document.getElementById('form-mensaje');

  if (formContacto) {
    formContacto.addEventListener('submit', function (event) {


      if (window.location.protocol === 'file:') {
        return;
      }

      event.preventDefault();

      if (!formContacto.checkValidity()) {
        formMensaje.textContent = 'Por favor, revisa los campos obligatorios.';
        formMensaje.className = 'form-mensaje error';
        return;
      }

      const botonEnviar = formContacto.querySelector('button[type="submit"]');
      const textoOriginalBoton = botonEnviar.textContent;
      botonEnviar.disabled = true;
      botonEnviar.textContent = 'Enviando...';
      formMensaje.textContent = '';
      formMensaje.className = 'form-mensaje';

      const datos = new FormData(formContacto);
      datos.append('access_key', ACCESS_KEY);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: datos
      })
        .then(function (respuesta) {
          return respuesta.json().then(function (data) {
            return { ok: respuesta.ok, data: data };
          });
        })
        .then(function (resultado) {
          if (!resultado.ok || !resultado.data.success) {
            throw new Error(resultado.data.message || 'Error desconocido');
          }
          formMensaje.textContent = '¡Gracias! Hemos recibido tu mensaje y te contactaremos pronto.';
          formMensaje.className = 'form-mensaje exito';
          formContacto.reset();
        })
        .catch(function () {


          formMensaje.textContent = 'Enviando de otra forma, un momento...';
          formMensaje.className = 'form-mensaje';
          formContacto.submit();
        })
        .finally(function () {
          botonEnviar.disabled = false;
          botonEnviar.textContent = textoOriginalBoton;
        });
    });
  }

  
  const anioActual = document.getElementById('anio-actual');
  if (anioActual) {
    anioActual.textContent = new Date().getFullYear();
  }


  
  const botonesPrograma = document.querySelectorAll('.programa-tabs__boton');

  botonesPrograma.forEach(function (boton) {
    boton.addEventListener('click', function () {
      const idPrograma = boton.getAttribute('data-programa');

      botonesPrograma.forEach(function (b) {
        b.classList.toggle('activo', b === boton);
      });

      document.querySelectorAll('.programa').forEach(function (panel) {
        panel.classList.toggle('programa--activo', panel.id === idPrograma);
      });
    });
  });


  
  const botonesAbrirModal = document.querySelectorAll('.js-abrir-nosotros');
  const modalSobreNosotros = document.getElementById('modal-sobre-nosotros');

  if (botonesAbrirModal.length && modalSobreNosotros) {
    function abrirModal(event) {
      event.preventDefault();
      modalSobreNosotros.classList.add('modal--abierto');
      document.body.classList.add('modal-abierto');
    }

    function cerrarModal() {
      modalSobreNosotros.classList.remove('modal--abierto');
      document.body.classList.remove('modal-abierto');
    }

    botonesAbrirModal.forEach(function (boton) {
      boton.addEventListener('click', abrirModal);
    });

    modalSobreNosotros.querySelectorAll('[data-cerrar-modal]').forEach(function (el) {
      el.addEventListener('click', cerrarModal);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modalSobreNosotros.classList.contains('modal--abierto')) {
        cerrarModal();
      }
    });
  }

});
