# Sistema de Turnos

Este es un proyecto pequeño cuyo objetivo es ir demostrando pequeñas funcionalidades utilizando diversas tecnologías. En este caso, se ha creado un sistema de gestión de turnos utilizando **Next.js**, **DatePicker**, **TypeScript**, **Toast**, **Zustand** y **Tailwind CSS**. El proyecto está modularizado por componentes para facilitar su escalabilidad y mantenimiento.

## Tecnologías utilizadas

- **Next.js**: Framework de React para la creación de aplicaciones web escalables y rápidas.
- **DatePicker**: Componente para la selección de fechas con soporte para selección de hora.
- **TypeScript**: Un superset de JavaScript que añade tipado estático, mejorando la calidad del código y la detección temprana de errores.
- **Toast**: Mensajes emergentes para confirmaciones y alertas.
- **Zustand**: Una pequeña librería de gestión de estado que permite manejar el estado global de forma eficiente y sencilla sin la sobrecarga de herramientas más grandes como Redux.
- **Tailwind CSS**: Framework CSS de utilidad que permite un diseño altamente personalizable y fácil de usar.

## Descripción del Proyecto

Este proyecto es un **sistema de turnos** donde los usuarios pueden seleccionar una fecha y hora a través de un calendario interactivo. Cuando el usuario selecciona una fecha, se guarda como un "turno" y se muestra una notificación de confirmación utilizando el componente **Toast**.

### Características

- **Selección de fecha y hora**: Utiliza `react-datepicker` para una interfaz de usuario amigable, con soporte para seleccionar tanto fechas como horas.
- **Modularización por componentes**: Los diferentes elementos, como el selector de fecha, los botones y los mensajes de confirmación, están organizados como componentes reutilizables, lo que permite una fácil expansión y mantenimiento del proyecto.
- **Interactividad**: Muestra un toast de confirmación cuando un turno es creado exitosamente, mejorando la experiencia del usuario.
- **Gestión de estado con Zustand**: Utiliza **Zustand** para gestionar el estado global de la aplicación, como el estado de los turnos y la información del usuario. Esto permite que los componentes accedan y actualicen el estado de manera eficiente sin complicaciones innecesarias.
- **Uso de TypeScript**: Todo el proyecto está escrito en **TypeScript**, lo que añade robustez al código al contar con un sistema de tipos estáticos. Esto ayuda a evitar errores comunes en tiempo de compilación y mejora la experiencia de desarrollo al proporcionar autocompletado y documentación de tipos.
