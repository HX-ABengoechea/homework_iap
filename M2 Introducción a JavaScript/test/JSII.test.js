/* eslint-disable no-undef */
const { nuevoString, nuevoNumero, nuevoBoolean } = require('../Ejercicio 1');
const {
   nuevaResta,
   nuevaMultiplicacion,
   nuevoModulo,
} = require('../Ejercicio 2');

describe('M2 | Introducción A JavaScript', function () {
   describe('-------- EJERCICIO 1 --------', function () {
      describe('nuevoString', function () {
         it('Debe ser un string', function () {
            expect(typeof nuevoString).toBe('string');
         });
      });

      describe('nuevoNumero', function () {
         it('Debe ser un número', function () {
            expect(typeof nuevoNumero).toBe('number');
         });
      });

      describe('nuevoBoolean', function () {
         it('Debe ser un booleano', function () {
            expect(typeof nuevoBoolean).toBe('boolean');
         });
      });
   });

   describe('-------- EJERCICIO 2 --------', function () {
      describe('nuevaResta', function () {
         it('Debe ser la resta correcta', function () {
            expect(nuevaResta).toBe(true);
         });
      });

      describe('nuevaMultiplicación', function () {
         it('Debe ser la multiplicación correcta', function () {
            expect(nuevaMultiplicacion).toBe(true);
         });
      });

      describe('nuevoModulo', function () {
         it('Debe ser el resultado correcto del módulo', function () {
            expect(nuevoModulo).toBe(true);
         });
      });
   });
});
