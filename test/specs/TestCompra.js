describe("LOGIN - Abrir pagina", () => {
  it("open website", async () => {
    browser.url("http://localhost:5173/AdminMenu");
    await browser.pause(1000);
  });

  it("check website opens", async () => {
    await expect(browser).toHaveUrlContaining(
      "http://localhost:5173/AdminMenu"
    );
    await browser.pause(1000);
  });
});

describe("hacer la compra", () => {
  it('1. Hacer click en boton "Agregar".', async () => {
    const botonAgregar = $("#openComboModal");
    await botonAgregar.click();
    await browser.pause(1000);
  });

  // it("1. Rellenar campos - nombre", async () => {
  //   const crearComboNombre = $("#ComboNombre");
  //   await crearComboNombre.addValue("nombre prueba");
  //   await browser.pause(500);
  // });

  // it("2. Rellenar campos - descripcion", async () => {
  //   const crearComboDescripcion = $("#ComboDescripcion");
  //   await crearComboDescripcion.addValue("descripcion prueba");
  //   await browser.pause(500);
  // });

  it("3. Desplegar Lista", async () => {
    const crearComboAbrirListaProductos = $("#ComboProductosList");
    await crearComboAbrirListaProductos.click();
    await browser.pause(1000);
  });

  it("4. Elegir producto 1", async () => {
    const crearComboElegirProducto1 = $("#ComboProducto");
    await crearComboElegirProducto1.click();
    await crearComboElegirProducto1.selectByVisibleText("Buenos Aires Roll");
    await browser.pause(1000);
  });

  it("5. Agregar cantidad producto 1", async () => {
    const crearComboElegirCantidad1 = $("#ComboProductoCantidad");
    await crearComboElegirCantidad1.addValue("10");
    await browser.pause(1000);
  });

  it('6. Hacer click en boton "Agregar".', async () => {
    const AgregarProducto = $("#ComboAgregarProducto");
    await AgregarProducto.click();
    await browser.pause(1000);
  });

  it("7. Desplegar Lista", async () => {
    const crearComboAbrirListaProductos = $("#ComboProductosList");
    await crearComboAbrirListaProductos.click();
    await browser.pause(1000);
  });

  it("8. Elegir producto 2", async () => {
    const crearComboElegirProducto2 = $("#ComboProducto");
    await crearComboElegirProducto2.click();
    await crearComboElegirProducto2.selectByVisibleText("Ceviche Roll");
    await browser.pause(1000);
  });

  it("9. Agregar cantidad producto 2", async () => {
    const crearComboElegirCantidad2 = $("#ComboProductoCantidad");
    await crearComboElegirCantidad2.addValue("10");
    await browser.pause(1000);
  });

  it('10. Hacer click en boton "Agregar".', async () => {
    const AgregarProducto = $("#ComboAgregarProducto");
    await AgregarProducto.click();
    await browser.pause(1000);
  });
});
