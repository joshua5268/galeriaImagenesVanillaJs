function girarCard(elemento){
    let id = elemento.getAttribute("data-girar");
    let tarj = document.querySelector(`[data-flip="${id}"]`);
    if(tarj.classList.contains('rotar2')){
        tarj.classList.replace('rotar2', 'rotar1');
    }else{
        tarj.classList.replace('rotar1', 'rotar2');
    }
}