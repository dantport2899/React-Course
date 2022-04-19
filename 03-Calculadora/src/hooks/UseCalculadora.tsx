import { useState, useRef } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir 
 }

export const UseCalculadora = () => {
  
    const [numero, setnumero] = useState('0');
    const [numeroAnterior, setnumeroAnterior] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () =>{
        setnumero('0');
        setnumeroAnterior('0');
    };

    const armarNumero = (numeroTexto:string) =>{

        //no aceptar doble punto
        if(numero.includes('.') && numeroTexto ==='.') return;

        //validar el 0
        if(numero.startsWith('0') || numero.startsWith('-0')){
            //preguntar si el primer punto decimal
            if(numeroTexto === '.'){
                setnumero(numero + numeroTexto);
            
                //evaluar si es otro 0 y hay un punto
            }else if(numeroTexto==='0' && numero.includes('.')){
                setnumero(numero + numeroTexto);            
            
                //evaluar si es diferente de 0 y no tiene un punto
            }else if(numeroTexto !== '0' && !numero.includes('.')){
                setnumero(numeroTexto);

                //evitar 0.0000        
            }else if(numeroTexto === '0' && !numero.includes('.')){
                setnumero(numeroTexto);           
            }else{
                setnumero(numero + numeroTexto);            
            }


        }else{

            setnumero(numero + numeroTexto);            
        }


    }

    const positivoNegativo = () => {
        if(numero.includes('-')){
            setnumero(numero.replace('-',''));
        }else{
            setnumero('-'+numero);
        }
    }

    const btndelete = () =>{
        let negativo ='';
        let numerotemp = numero;
        
        if(numero.includes('-')){
            negativo="-";
            numerotemp = numero.substr(1);
        }

        if(numero.length>1){
            setnumero(negativo+numerotemp.slice(0,-1));
        }else{
            setnumero('0');
        }
    }

    const cambiarNumeroPorAnterior = ()=>{

        //pasar el numero , pero quitando la posicion o el punto
        if(numero.endsWith('.')){
            setnumeroAnterior(numero.slice(0,-1));
        }else{
            setnumeroAnterior(numero);
        }
        setnumero('0');
    }

    const btndividir = () =>{
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnmultiplicar = () =>{
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnrestar = () =>{
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnsumar = () =>{
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }


    const calcular = () =>{
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setnumero(`${num1+num2}`);
                break;

            case Operadores.restar:
                setnumero(`${num2-num1}`);
                break;

            case Operadores.dividir:
                setnumero(`${num2/num1}`);
                break;
            
            case Operadores.multiplicar:
                setnumero(`${num1*num2}`);
                break;
        
            default:
                break;
        }

        setnumeroAnterior('0');
    }

    return{
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        armarNumero,
        btndelete,
        btndividir,
        btnmultiplicar,
        btnrestar,
        btnsumar,
        calcular
    }
}
