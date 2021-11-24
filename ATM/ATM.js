var
    total = 1560,
   Currency = [50,20,10,5,2,1],
   fifty =" billete/s de 50 ",
   twenty= " billete/s de 20 ", 
   ten= " billete/s de 10 ", 
   five= " billete/s de 5 ", 
   two= " billete/s de 2 ", 
   one= " billete/s de 1 "
   
function automatic(){
    
    var 
    input = document.getElementById("numero").value,
    resfloor= Math.floor(input/Currency[0]),
    module= input%Currency[0],
    condition=input!=0 && input<total,
    recieve="Recibes "+"\n"+resfloor,
    fiveAmount,
    twoAmount,
    oneAmount;
    
   if (input>total) {
       alert("Error: no hay suficiente dinero en el cajero")
       total -= input;
   } 
   
   else if (input<=0){
       
        alert("error: Inserte una cantidad válida")
        
   } 
   
   if (module==0 && condition) {
    
       alert(recieve + fifty)//para billetes de 50
       total -= input;
    
   } else if(module==Currency[1]*2 && condition){ //para billetes de 20*2
   
    alert(recieve + fifty+"\n" +module/Currency[1] +twenty);
    total -= input;
   } else if (module==Currency[1] && condition){ //para billetes de 20
   
    alert(recieve + fifty+"\n" + module/Currency[1] +twenty);
    total -= input;
    
   } else if (module==Currency[2] && condition){ //para billetes de 10
    
    alert(recieve + fifty+"\n" +  module/Currency[2] + ten);
    total -= input;
   } else if (module==Currency[2]+Currency[1] && condition){ //para 30's
    alert(recieve + fifty+"\n" + Math.floor(module/Currency[1]) +twenty +"\n"+(module/Currency[2])/3 + ten);
   }else if (module==Currency[3] && condition){//para 5's
    alert(module==Currency[2] && condition)
    //alert(recieve + fifty+"\n" +  module/Currency[3] + five);
}    
}
 