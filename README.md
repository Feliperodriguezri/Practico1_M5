Proyecto React Practico 1 M5

Este proyecto utiliza React, Bootstrap y Axios para realizar peticiones a una API que devuelve una lista de doctores.

Nombre: Felipe Rodriguez
curso: Frontend Corfo grupo 1


Se ha elegido Axios en lugar de Fetch API por las siguientes razones:

*   **Manejo de Errores Simplificado:** Axios automáticamente convierte las respuestas de la API a formato JSON y maneja de forma más eficiente los errores HTTP, permitiendo un código más limpio y legible.
*   **Interceptores:** Axios permite la configuración de interceptores para peticiones y respuestas, lo cual puede ser útil para manejar casos de autenticación, logeo, etc. en aplicaciones más complejas.
*   **Cancelación de Peticiones:**  Axios facilita la cancelación de peticiones, algo que es útil en aplicaciones con muchas peticiones.
*   **Comunidad y Soporte:** Axios tiene una gran comunidad y está bien documentado, lo cual facilita el desarrollo y la resolución de problemas.

Aunque Fetch API es una alternativa válida, Axios ofrece estas ventajas que resultan en un desarrollo más cómodo y eficiente en este caso.