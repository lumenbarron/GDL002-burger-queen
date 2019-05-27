# Il Piccolo

Como desarrolladora se realizo un proyecto por encargo para el restaurante "Il Piccolo" una pizzería italiana que acaba de llegar a GDL, que quería innovar en la forma en que toma sus pedidos . La mayor parte de los meseros usaran una _tablet_, para poder anotar sus pedidos enviarlos a la cocina para que se preparen ordenada y eficientemente..
![il piccolo](https://lh3.googleusercontent.com/Hyc-3aldWIqQc8njDbRtIUmwohydHz1yuhm1F33vF2Hf1O1r7eXAwg4RIQwrEh7z_RXLpsu6pXxD)

## Diseño (UI)
La paleta de colores escogida fue en base a la imagen y logotipo que el cliente nos proporcionó.
![paleta de colores](https://lh3.googleusercontent.com/RK0FNh2CtZgHtbUmsnrsKErV8HguMPbANYBCvqg1RmozwH58Va9aWUiqsPGCpoAweyt7TAP8CbLt "paleta de colores")
La interfaz escogida igualmente fue más simplificada para ayudar al/lxs meserxs
![prototipado](https://lh3.googleusercontent.com/0SiARQ6iPWCWicCztU1d3VQVvyHRl7fzJVkisBZz0lj7Jy2IHtcBvO9tQHsUF_Mzo-9FvHIbykxV)
## Contenido
La interfaz muestra los dos menús (desayuno y almuerzo), cada uno
con todos sus _productos_. El mesero puede ir eligiendo qué _productos_
agregar y la mostrará el _resumen del pedido_ con el costo total.

> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural              |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Pizzas**             |   **$**   |
> |Pizza peperoni         |    50|
> |Pizza hawaina          |    50|
> |**Para tomar**         |   **$**   |
> |Agua natura            |     5|
> |Bebida gaseosa         |     10|
> |Extra queso            |     5|
>
> **Importante:** 
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
> su pedido varias veces antes de finalizarlo.
## Tecnologías
Para este proyecto se utilizó React JS como librería de JS, algunos componenetes de Boostrap y CSS.
Para cambiar entre pantallas se uso una SPA(_Single Page App_) gracias a un router de una dependencia de NPM (_react-router-dom_).Para la base de datos se utilizó Firebase Firestore.
