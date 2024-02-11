# Proyecto Final
Repositorio para Proyecto Final TDS 

Simple overview of use/purpose.

## Descripción

Contexto:

-> Empresa de seguros recibe más de 100 cotizaciones diarias de seguros.

-> Proceso de cotización es manual, lento, consume un alto número de recursos y tiempo.

-> Proceso actual no permite realizar más de 50 cotizaciones diarias.

-> Acumulación de solicitudes de cotizaciones sumado a un proceso manual poco eficiente da como resultado:
	* atraso en entrega de cotizaciones
 	* pérdida de posibles clientes.

Requerimientos:

* Asegurado > 18 años
* Costo base + costos extra en función de:
	* edad asegurado
 		* 18 - 24 años 10%
		* 25 - 49 años 20%
		* +50 años 30%
	* estatus civil
	* edad conyugue del asegurdado (si aplica)
		* 18 - 24 años 10%
		* 25 - 49 años 20%
		* +50 años 30%
	* cantidad hijos del asegurado (si aplica)
		* por cada hijo 20% (independiente de la edad del hijo)

## Autor

Santiago Vásquez
vrsanti@gmail.com

## Versiones

* 0.2
    * Versión que incluye los pasos extras:
      - Solicitud de cotizaciones hasta que el usuario ingrese la palabra “Salir”
      - recargos extra, basados en la cantidad de propiedades y los ingresos del asegurado,
          - el primero será del 35% de la cotización por propiedad,
          - el segundo será el 5% sobre el salario del asegurado.
* 0.1
    * Primera versión.
