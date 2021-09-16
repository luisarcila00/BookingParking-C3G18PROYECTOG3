var cupoDisp = document.getElementById('cuposDisponibles').value;
var cupoCar = document.getElementById('cuposCarros').value;
var cupoMoto = document.getElementById('cuposMotos').value;
var excedente = null;
var modCupoCar = document.getElementById('cuposCarros');
var modCupoMoto = document.getElementById('cuposMotos');

function restarCupos(){
    if(this.cupoDisp > 0){
        
        modCupoMoto.setAttribute("max", this.cupoDisp);
        modCupoCar.setAttribute("max", this.cupoDisp);

        if(this.cupoCar > 0){
            this.excedente = this.cupoDisp - this.cupoCar;

            modCupoMoto.setAttribute("max", this.excedente);

        }
        
        else if(this.cupoMoto  > 0){
            this.excedente = this.cupoDisp - this.cupoMoto;

            modCupoCar.setAttribute("max", this.excedente);

        }
    }else{
        console.log("No hay cupos disponibles")
    }
}
