from math import sqrt
import numpy as np
#numX = float(input('Ingrese un numero'))
#numY = float(input('Ingrese un numero'))

def raizCuadrada(num):
    raiz = sqrt(num)
    return(raiz)

#print(raizCuadrada(numX))

def moduloX(num):
    x = abs(num)
    return x
#print(moduloX(numD))

def moduloXY(numx):
    x1 = np.array([numx-3])
    x2 = np.absolute(x1)
    return(x2)
#print(moduloXY(numX))

def raiz2modXY(numx):
   x1 = moduloXY(numx-2)
   x2 = raizCuadrada(x1)
   return x2

#print(raiz2modXY(numX))

##Ejercicio 2========

def mostrar3veces(cadena):
    for i in range(1,3):
        print(cadena)

#cadena = input('ingrese la')

#print(mostrar3veces(cadena))

##Ejercicio 4 =========
def promedio(x,y):
    x1 = (x+y)/2
    return(x1)

#print('Bienvenido al programa de calcular promedios')

#x = int(input('ingrese un numero 1'))
#y = int(input('ingrese un numero 2'))
#print('El promedio de ',x+y,'es  ',promedio(x,y))
def promedio3(x,y,z):
     x1 = (x+y+z)/3
     return(x1)
#print(promedio3(3,7,2))

##Ejercicio 5 =======

def valorAbsolutoManual(x):
    if x < 0:
        x1 = x * -1
    else:
        x1 = x * 1
    return(x1)

#print(valorAbsolutoManual(-5))
##Ejercicio 6 ===
def exclamar(unaCadena):
    return('¡'+unaCadena+'!')

#print(exclamar('FUNCIONA'))
def gritar(unaCadena):
    return(exclamar('¡¡'+unaCadena+'!!'))
#print(gritar('Ouch'))

#Ejercicio 7 ===
def elevarAlCubo(x):
    x1 = x**2
    return(x1)
#print(0, "al cubo:", elevarAlCubo(0))
#print(1, "al cubo:", elevarAlCubo(1))
#print(2, "al cubo:", elevarAlCubo(2))
#print(3, "al cubo:", elevarAlCubo(3))
#print(4, "al cubo:", elevarAlCubo(4))
#print(5, "al cubo:", elevarAlCubo(5))
#print(6, "al cubo:", elevarAlCubo(6))
#print(-1, "al cubo:", elevarAlCubo(-1))
#print(-2, "al cubo:", elevarAlCubo(-2))
#print(-3, "al cubo:", elevarAlCubo(-3))
#print(-4, "al cubo:", elevarAlCubo(-4))
#print(-5, "al cubo:", elevarAlCubo(-5))

#ejercicio 8=======

def divsPositivos(x):
    suma = ''
    for i in range(1,x+1):
        if x % i == 0 and i > 0 and i != x:
            suma+=str(i)+','
    return(suma)

#print(divsPositivos(20))

def tipoEntero(x):
    if divsPositivos(x) >= 3:
        return False
    else:
        return True

#print(tipoEntero(6))

def divPrimos(x):
    suma = ''
    for i in range(1,x+1):
        if x % i == 0 and i != x and i % 4!=0:
         suma = suma +','+ str(i)
    return(suma)
#print(divPrimos(20))



#Ejercicio 9========

def returnMayor(x,y):
    if x > y:
        return x
    else:
        return y

#print(returnMayor(199,9))

def returnMayor3(x,y,z):
    if returnMayor(x,y) > z:
        return returnMayor(x,y)
    else:
        return z
#print(returnMayor3(1000,101,100))



##Ejercicio 10========
def potencia(x,y):
    x1 = x**y
    return x1

#print(potencia(2,3))

####Ejercicioo 11 ====

def sumaDivisores(x):
    suma = 0
    for i in range(1,x+1):
        if x % i == 0 and i > 0 and i != x:
         suma = suma + i
    return(suma)

#print(sumaDivisores(18))

def numeroPerfecto(x):
    if sumaDivisores(x) == x:
      return('es un numero perfecto')
    else:
        return('no es perfecto')
#print(numeroPerfecto(8128))

def numeroAbundante(x):
    if sumaDivisores(x) > x:
        return print('numero abundante')
    else:
        return print('nada no es abudante xd')
#print(numeroAbundante(8000))

##Ejercico 12::::::::
def cantdiv(n):
    cont = 0
    for i in range(1, n+1):
        if n % i ==0:
            cont += 1
    return cont

### VERIFICA SI UN NUMERO ES PRIMOS O NO EJERCICIO 8 PÚNTO B
def esPrimo(n):
    if cantdiv(n) == 2:
        return True
    return False

#print(esPrimo(22))

def numSigPrimo(n):

    m = n+1
    while not esPrimo(m):
        m+=1
    return(m)
#print(numSigPrimo(5))

print('=== Bienvenido al programa que calcula el siguiente numero primo de un numero n===')
x = int(input('Ingrese un numero'))
print('El siguiente numero primo de  ',x,'es ', numSigPrimo(x))















