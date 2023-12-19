/* eslint-disable no-undef */
const {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
} = require('../Ejercicio 1');

const {
   promedioResultadosTest,
   cuentoElementos,
   todosIguales,
   mayorACien,
} = require('../Ejercicio 2');

const {
   incrementarPorUno,
   dePalabrasAFrase,
   agregarNumeros,
   numeroMasGrande,
} = require('../Ejercicio 3');

describe('M5 | Arreglos', function () {
   describe('-------- EJERCICIO 1 --------', function () {
      describe('devolverPrimerElemento(array)', function () {
         it('Debe retornar el primer elemento del arreglo', function () {
            expect(devolverPrimerElemento([10, 10, 16, 12])).toBe(10);
            expect(devolverPrimerElemento([97, 100, 80, 55, 72, 94])).toBe(97);
         });
      });
      describe('devolverUltimoElemento(array)', function () {
         it('Debe retornar el último elemento del arreglo', function () {
            expect(devolverUltimoElemento([10, 10, 16, 12])).toBe(12);
            expect(devolverUltimoElemento([97, 100, 80, 55, 72, 94])).toBe(94);
            expect(
               devolverUltimoElemento([
                  'hi',
                  'there',
                  'how',
                  'are',
                  'you',
                  'doing?',
               ])
            ).toBe('doing?');
         });
      });

      describe('obtenerLargoDelArray(array)', function () {
         it('Debe retornar la longitud del arreglo', function () {
            expect(obtenerLargoDelArray([10, 10, 16, 12])).toBe(4);
            expect(obtenerLargoDelArray([97, 100, 80, 55, 72, 94])).toBe(6);
            expect(
               obtenerLargoDelArray([
                  'hi',
                  'there',
                  'how',
                  'are',
                  'you',
                  'doing?',
               ])
            ).toBe(6);
         });
      });

      describe('agregarItemAlFinalDelArray(array, elemento)', function () {
         it('Debe retornar el arreglo con el elemento agregado al final', function () {
            expect(agregarItemAlFinalDelArray([10, 10, 16, 12], 10)).toEqual([
               10, 10, 16, 12, 10,
            ]);
            expect(
               agregarItemAlFinalDelArray([97, 100, 80, 55, 72, 94], 'Hola')
            ).toEqual([97, 100, 80, 55, 72, 94, 'Hola']);
            expect(agregarItemAlFinalDelArray([], true)).toEqual([true]);
         });
      });

      describe('agregarItemAlComienzoDelArray(array, elemento)', function () {
         it('Debe retornar el arreglo con el elemento agregado al comienzo', function () {
            expect(agregarItemAlComienzoDelArray([10, 10, 16, 12], 10)).toEqual(
               [10, 10, 10, 16, 12]
            );
            expect(
               agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], 'Hola')
            ).toEqual(['Hola', 97, 100, 80, 55, 72, 94]);
            expect(agregarItemAlComienzoDelArray([], true)).toEqual([true]);
         });
      });
   });

   describe('-------- EJERCICIO 2 --------', function () {
      describe('promedioResultadosTest(resultadosTest)', function () {
         it('Debe retornar el promedio de todas las notas', function () {
            expect(promedioResultadosTest([10, 10, 16, 12])).toBe(12);
            expect(promedioResultadosTest([97, 100, 80, 55, 72, 94])).toBe(83);
         });
      });

      describe('cuentoElementos(array)', function () {
         it('Debe retornar la cantidad de elementos mayores a a 18', function () {
            expect(cuentoElementos([10, 10, 18, 21])).toBe(1);
            expect(cuentoElementos([97, 100, 190, 5, 7, 9])).toBe(3);
            expect(cuentoElementos([97, 20, 90, 50, 7, 709])).toBe(5);
         });
      });

      describe('todosIguales(array)', function () {
         it('Debe retornar True si todos los números del arreglo son iguales', function () {
            expect(todosIguales([20, 20, 20, 20])).toBe(true);
            expect(todosIguales([230, 230, 230, 230])).toBe(true);
         });
         it('Debe retornar False si NO todos los números del arreglo son iguales', function () {
            expect(todosIguales([97, 100, 190, 9])).toBe(false);
         });
      });

      describe('mayorACien(array)', function () {
         it('Debe retornar un arreglo con todos los número mayores a 100', function () {
            var integers = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22];
            expect(mayorACien(integers)).toEqual([200, 120, 160, 148]);
         });
      });
   });

   describe('-------- EJERCICIO 3 --------', function () {
      describe('incrementarPorUno(array)', function () {
         it('Debe retornar el arreglo con cada elemento aumentado en +1', function () {
            expect(incrementarPorUno([10, 10, 16, 12])).toEqual([
               11, 11, 17, 13,
            ]);
            expect(incrementarPorUno([97, 100, 80, 55, 72, 94])).toEqual([
               98, 101, 81, 56, 73, 95,
            ]);
            expect(incrementarPorUno([])).toEqual([]);
         });
      });

      describe('dePalabrasAFrase(palabras)', function () {
         it('Debe retornar un string con las palabras separadas por un espacio', function () {
            expect(dePalabrasAFrase(['Henry', 'JavaScript', 'Class'])).toBe(
               'Henry JavaScript Class'
            );
            expect(dePalabrasAFrase(['Henry'])).toBe('Henry');
         });
      });

      describe('agregarNumeros(arrayOfNums)', function () {
         it('Debe retornar la suma de todos los números del arreglo', function () {
            expect(agregarNumeros([10, 10, 16])).toBe(36);
            expect(agregarNumeros([97, 100])).toBe(197);
            expect(agregarNumeros([0, 0, 0])).toBe(0);
         });
      });

      describe('numeroMasGrande(arrayOfNums)', function () {
         it('Debe retornar el número más grande del arreglo', function () {
            expect(numeroMasGrande([10, 10, 16, 12])).toBe(16);
            expect(numeroMasGrande([97, 100, 80, 55, 72, 94])).toBe(100);
            expect(numeroMasGrande([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
         });
      });
   });
});
