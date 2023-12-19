/* eslint-disable no-undef */
const {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
} = require('../Ejercicio 1');

describe('M7 | Clases', function () {
   describe('-------- EJERCICIO 1 --------', function () {
      describe('Clase Persona', function () {
         it('Debe crear una instancia "Persona" con las propiedades "nombre", "apellido", "edad" y "domicilio"', function () {
            const nuevaPersona = new Persona(
               'Juan',
               'Pérez',
               22,
               'Saavedra 123'
            );
            expect(nuevaPersona).toBeInstanceOf(Persona);
            expect(nuevaPersona.nombre).toBe('Juan');
            expect(nuevaPersona.apellido).toBe('Pérez');
            expect(nuevaPersona.edad).toBe(22);
            expect(nuevaPersona.domicilio).toBe('Saavedra 123');
         });
         it('"Persona" debe tener un método "detalle" que devuelva la información de la persona en forma de objeto', function () {
            const nuevaPersona = new Persona(
               'Juan',
               'Pérez',
               22,
               'Saavedra 123'
            );
            expect(nuevaPersona.detalle()).toStrictEqual({
               nombre: 'Juan',
               apellido: 'Pérez',
               edad: 22,
               domicilio: 'Saavedra 123',
            });
         });
      });

      describe('crearInstanciaPersona()', function () {
         it('Debe retornar una nueva instancia de "Persona"', function () {
            expect(
               crearInstanciaPersona('Juan', 'Pérez', 22, 'Saavedra 123')
            ).toBeInstanceOf(Persona);
         });
      });

      describe('agregarMetodo(Persona)', function () {
         it('"Persona" debe tener un método "datos" que retorne la información correspondiente', function () {
            agregarMetodo();
            const persona = new Persona('Juan', 'Pérez', 22, 'Saavedra 123');
            persona.nombre === 'Juan' && persona.edad === 22
               ? expect(persona.datos()).toBe('Juan, 22 años')
               : expect(persona.datos()).toBe('undefined, undefined años');
         });
      });
   });
});
