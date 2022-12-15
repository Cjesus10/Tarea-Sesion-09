const rsueldoBruto = document.getElementById("rsueldoBruto");
const rdescuento = document.getElementById("rdescuento");
const rsueldoNeto = document.getElementById("rsueldoNeto");

let sb = 0;
let desc = 0;
let sn = 0;

class empleado{
    codigo;
    nombre;
    apellido;
    correo;
    cargo;
    sueldoBruto(){
        if(this.cargo === "Jefe"){
            sb = 5000; 
        }
        else if(this.cargo === "Analista"){
            sb = 4000;
        }
        else if(this.cargo === "Programador" ){
            sb = 3000;
        }
        else if(this.cargo === "Soporte" ){
            sb = 2000;
        }
        else if(this.cargo === "Asistente" ){
            sb = 1500;
        }
        rsueldoBruto.innerText = `El sueldo bruto es: S/.${sb}`;
    }
    descuento(){
        desc = 12.5/100*sb;
        rdescuento.innerText = `El descuento es: S/.${desc}`;
    }
    sueldoNeto(){
        sn = sb-desc;
        rsueldoNeto.innerText = `El sueldo neto es: S/.${sn}`;
    }
}
let empleadoNuevo = new empleado
empleadoNuevo.cargo = prompt("Escriba el Cargo")
empleadoNuevo.sueldoBruto()
empleadoNuevo.descuento()
empleadoNuevo.sueldoNeto()