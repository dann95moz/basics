var Bills=[10,20,30,40,50,60];
var   fifty =10;
var   twenty=20;
var   ten=30;
var   five=40;
var   two=50;
var   one=60;
var  Currency = [50,20,10,5,2,1];

var total = fifty*Currency[0]+twenty*Currency[1]+ten*Currency[2]+five*Currency[3]+two*Currency[4]+one*Currency[5];
var faltante
function automatic(){
    
     var input = parseInt( document.getElementById("numero").value);
     var faltante= input;
    document.getElementById("cincuentas").innerHTML=("")
    document.getElementById("veintes").innerHTML=("")
    document.getElementById("diez").innerHTML=("")
    document.getElementById("cincos").innerHTML=("")
    document.getElementById("dos").innerHTML=("")
    document.getElementById("unos").innerHTML=("")
    for (let i = 0; i < 6; i++) {
        const element = array[i];
        
    }
    
    //50
    
    if (faltante/Currency[0]>=1 && fifty>0 && input<total ) {
        document.getElementById("cincuentas").innerHTML=("Recibes "+"\n"+Math.floor(input/Currency[0]))
        fifty = fifty-Math.floor(input/Currency[0]);
        total=total- (Math.floor(input/Currency[0])*Currency[0]);
        document.getElementById("total").innerHTML=("total " + total)
        faltante= input%Currency[0]
       
    }
    
        //20
    if (faltante/Currency[1]>=1 && twenty>0 && input<total) {
        document.getElementById("veintes").innerHTML=("Recibes "+"\n"+Math.floor(faltante/Currency[1]))
        twenty= Math.floor(twenty - faltante/Currency[1])
        total=total- Math.floor(faltante/Currency[1])*Currency[1];
        document.getElementById("total").innerHTML=("total " + total)    
        faltante=faltante%Currency[1]
            
        }
 
        //10
    if (faltante/Currency[2]>=1 && ten>0 && input<total) {
        document.getElementById("diez").innerHTML=("Recibes "+"\n"+Math.floor(faltante/Currency[2]))
        ten= Math.floor(ten - faltante/Currency[2])
        total=total- Math.floor(faltante/Currency[2])*Currency[2];
        document.getElementById("total").innerHTML=("total " + total)
        faltante=faltante%Currency[2]
            
         }
        //5

    if (faltante/Currency[3]>=1 && five>0 && input<total) {
        document.getElementById("cincos").innerHTML=("Recibes "+"\n"+Math.floor(faltante/Currency[3]))
        five= Math.floor(five - faltante/Currency[3]) 
        total=total- Math.floor(faltante/Currency[3])*Currency[3];
        document.getElementById("total").innerHTML=("total " + total)
        faltante=faltante%Currency[3]
        
            }
    //2
    if (faltante/Currency[4]>=1 && two>0 && input<total) {
        document.getElementById("dos").innerHTML=("Recibes "+"\n"+Math.floor(faltante/Currency[4]))
        two= Math.floor(two - faltante/Currency[4])
        total=total- Math.floor(faltante/Currency[4])*Currency[4];
        document.getElementById("total").innerHTML=("total " + total)
        faltante=faltante%Currency[4]
                   
                }
       //1 
    if (faltante/Currency[5]>=1 && one>0 && input<total) {
        document.getElementById("unos").innerHTML=("Recibes "+"\n"+Math.floor(faltante/Currency[5]))
        one= Math.floor(one - faltante/Currency[5])
        total=total- Math.floor(faltante/Currency[5])*Currency[5];
        document.getElementById("total").innerHTML=("total " + total)
        faltante=faltante%Currency[5]
                       
                    }
                    
                    
}
            
        
        
        
    
        
    


 