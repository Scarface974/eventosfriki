function abrirMiniVentanaLixieStore() {
    let ventana = window.open('lixiestoreredes.php', 'Mini Ventana', 'width=400,height=400');
    let left = (window.screen.width - 400) / 2;
    let top = (window.screen.height - 400) / 2;
    ventana.moveTo(left, top);
  }