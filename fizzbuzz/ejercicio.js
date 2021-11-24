     for (i=0; i<=100; i++) {
        if (i%3 ==0 && i%5==0){
            /*Múltiplo de tres y de cinco?*/
            document.write( " Múltiplo de tres y de cinco"+"<br>");
        } else {
            if (i % 3 ==0) {
                /*es Múltiplo de tres solamente? Muestra el texto*/
                document.write( " Múltiplo de tres"+"<br>"); 
            } 
            
            if (i % 5 ==0) {
                /*es Múltiplo de cinco? muestra el texto*/
                document.write( " Múltiplo de cinco"+"<br>"); 
            } if (i % 5 !==0 && i % 3 !==0){
                /*Si no es multiplo de tres y de cinco muestra [i]*/
                document.write(i+"<br>")
            } 
        }
           
        }