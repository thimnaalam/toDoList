document.querySelector('#add').onclick = function(){
    if (document.querySelector('#new').ariaValueMax.length == 0){
        alert("Kindly Enter item name!!!")
    }
    else{
        document.querySelector('#list').innerHTML += `
        ${document.querySelector('#content input').value}
        `;
        let current_task = document.querySelector(".delete");
        for (let i=0; i<current_task.length; 1++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }

        }
    }
}