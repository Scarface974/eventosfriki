function abrirMiniVentanaBazaru() {
    let ventana = window.open('bazaruredes.php', 'Mini Ventana', 'width=400,height=400');
    let left = (window.screen.width - 400) / 2;
    let top = (window.screen.height - 400) / 2;
    ventana.moveTo(left, top);
  }