

var   fifty =10;
var   twenty=20;
var   ten=30;
var   five=40;
var   two=50;
var   one=60;
var  Currency = [50,20,10,5,2,1];
var res;

var total = (fifty*Currency[0])+(twenty*Currency[1])+(ten*Currency[2])+(five*Currency[3])+(two*Currency[4])+(one*Currency[5]);
var faltante
function automatic(){
    //Currency.forEach(element=>console.log(Bills[0]--))
    
     var input = parseInt( document.getElementById("numero").value);
     
    document.getElementById("cincuentas").innerHTML=(" 0 ")
    document.getElementById("veintes").innerHTML=(" 0 ")
    document.getElementById("diez").innerHTML=(" 0 ")
    document.getElementById("cincos").innerHTML=(" 0 ")
    document.getElementById("dos").innerHTML=(" 0 ")
    document.getElementById("unos").innerHTML=(" 0 ")
    
    //50
    if (input/Currency[0]>fifty){
        document.getElementById("cincuentas").innerHTML=(" "+ fifty)
        faltante= input-(fifty*Currency[0])
        fifty = 0
        if (faltante/Currency[1]>=1 && twenty>0 && input<total) {
            console.log(faltante)
            document.getElementById("veintes").innerHTML=(" "+Math.floor(faltante/Currency[1]))
            twenty= Math.floor(twenty - faltante/Currency[1])
            total=total- Math.floor(faltante/Currency[1])*Currency[1];
            document.getElementById("total").innerHTML=("total " + total)    
            faltante=faltante%Currency[1]
                
            }
    }
    if (fifty<1) {
        document.getElementById("total").innerHTML=("total " + total)
        faltante= input
    }
    if (fifty==1) {
        
        document.getElementById("cincuentas").innerHTML=(" "+ 1)
        total=total- Currency[0];
        fifty= fifty-1
        document.getElementById("total").innerHTML=("total " + total)
        faltante= input-Currency[0]
    }
   if (faltante/Currency[0]>=1 && fifty>1 && input<total ) {
        document.getElementById("cincuentas").innerHTML=(" "+Math.floor(input/Currency[0]))
        fifty = fifty-Math.floor(input/Currency[0]);
        total=total- (Math.floor(input/Currency[0])*Currency[0]);
        document.getElementById("total").innerHTML=("total " + total)
        faltante= input%Currency[0]
       
   }
    
        //20
        if (twenty<1) {
            document.getElementById("total").innerHTML=("total " + total)
            faltante= input
        }
        if (twenty==1) {
        
            document.getElementById("veintes").innerHTML=(" "+1)
            total=total- Currency[1];
            document.getElementById("total").innerHTML=("total " + total)
            faltante= input-Currency[1]
        }
    if (faltante/Currency[1]>=1 && twenty>0 && input<total) {
        console.log(faltante)
        document.getElementById("veintes").innerHTML=(" "+Math.floor(faltante/Currency[1]))
        twenty= Math.floor(twenty - faltante/Currency[1])
        total=total- Math.floor(faltante/Currency[1])*Currency[1];
        document.getElementById("total").innerHTML=("total " + total)    
        faltante=faltante%Currency[1]
            
        }
 
        //10
        if (ten<1) {
            document.getElementById("total").innerHTML=("total " + total)
            faltante= input
        }
        if (ten==1) {
        
            document.getElementById("diez").innerHTML=(1)
            total=total- Currency[2];
            document.getElementById("total").innerHTML=("total " + total)
            faltante= input-Currency[2]
        }
    if (faltante/Currency[2]>=1 && ten>0 && input<total) {
        document.getElementById("diez").innerHTML=(" "+Math.floor(faltante/Currency[2]))
        ten= Math.floor(ten - faltante/Currency[2])
        total=total- Math.floor(faltante/Currency[2])*Currency[2];
        document.getElementById("total").innerHTML=("total " + total)
        faltante=faltante%Currency[2]
            
         }
        //5
        if (five<1) {
            document.getElementById("total").innerHTML=("total " + total)
            faltante= input
        }
     if (five==1) {
        
            document.getElementById("cincos").innerHTML=(1)
            total=total- Currency[3];
            document.getElementById("total").innerHTML=("total " + total)
            faltante= input-Currency[3]
        }

    if (faltante/Currency[3]>=1 && five>0 && input<total) {
        document.getElementById("cincos").innerHTML=(" "+Math.floor(faltante/Currency[3]))
        five= Math.floor(five - faltante/Currency[3]) 
        total=total- Math.floor(faltante/Currency[3])*Currency[3];
        document.getElementById("total").innerHTML=("total " + total)
        faltante=faltante%Currency[3]
        
            }
    //2
    if (two<1) {
        document.getElementById("total").innerHTML=("total " + total)
        faltante= input
    }
    if (two==1) {
        
        document.getElementById("dos").innerHTML=(1)
        total=total- Currency[4];
        document.getElementById("total").innerHTML=("total " + total)
        faltante= input-Currency[4]
    }
    if (faltante/Currency[4]>=1 && two>0 && input<total) {
        document.getElementById("dos").innerHTML=(" "+Math.floor(faltante/Currency[4]))
        two= Math.floor(two - faltante/Currency[4])
        total=total- Math.floor(faltante/Currency[4])*Currency[4];
        document.getElementById("total").innerHTML=("total " + total)
        faltante=faltante%Currency[4]
                   
                }
       //1 
       if (one<1) {
        document.getElementById("total").innerHTML=("total " + total)
        faltante= input
       }
       if (one==1) {
        
        document.getElementById("unos").innerHTML=(1)
        total=total- Currency[5];
        document.getElementById("total").innerHTML=("total " + total)
        faltante= input-Currency[5]
    }
    if (faltante/Currency[5]>=1 && one>0 && input<total) {
        document.getElementById("unos").innerHTML=(" "+Math.floor(faltante/Currency[5]))
        one= Math.floor(one - faltante/Currency[5])
        total=total- Math.floor(faltante/Currency[5])*Currency[5];
        document.getElementById("total").innerHTML=("total " + total)
        faltante=faltante%Currency[5]
                       
                    }
                    
                    
}
            
        
        
        
    
        
    


 