
function createList(numero,nome){
    var i;
    let idlista = document.getElementById('lista');
    var nome = document.getElementById('nomes').value;
    var q = document.getElementById('numeros').value;
    

  
    for(i=0; i<q; i++){
      
      let list = document.createElement("li");
      list.appendChild(document.createTextNode(nome));
      idlista.appendChild(list);
      //let item = document.createTextNode(nome);
     // document.getElementById("lista").appendChild(item);
      //document.getElementById("lista").appendChild(list);

    }
}


function clean(){
 
      document.getElementById("lista").innerHTML = "";
}
