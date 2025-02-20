document.getElementById("colorInput").addEventListener("input",function(event){
    // dapet warna dari input
    let selecColor= event.target.value  
    

    document.getElementById("colorCode").textContent=selecColor;
    document.getElementById("colorDisplay").style.backgroundColor=selecColor;

})