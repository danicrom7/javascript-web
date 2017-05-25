
$(function () {
    
 aReyes =[
     "Alfonso","Felipe","Fernando","Isabel"
 ]
oLista = $("ul")
aReyes.sort()
for (var i = 0; i < aReyes.length; i++) {
    oLista.append("<li>" + aReyes[i]+"</li>")
    
}

    $("#btn1").click(function(){
        aReyes.push($("#escribe").val())
        aReyes.sort()
        oLista.html("")
 for(var i = 0; i < aReyes.length; i++){
       oLista.append("<li>"+aReyes[i]+"</li>")
 }

    })
   
    
   
})
