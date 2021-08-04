//variables y datos en general

let myLibrary = [];

const $title = document.getElementById("title")
const $author = document.getElementById("author")
const $pages = document.getElementById("pages")
const $read = document.getElementById("read")
const $btnAdd = document.getElementById("btnAdd")
const $table = document.querySelector(".table")
const $tBody = document.querySelector("#book-list")
const $pantalla = document.querySelector(".pantalla")


let contador = 0


class Book{
    constructor(title, author, pages,read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}




// funcion agregar libros

function addBookToLibrary(){
    let title = $title.value
    let author = $author.value
    let pages = $pages.value
    let read = $read.value

    let newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
    return myLibrary
}


// funcion mostrar libros 
function displayBooks(lastPosition,libros,contador){
    
    if(lastPosition == 1){
        for (let i = 0; i < 1; i++) {
        let tr = document.createElement("tr")
        tr.setAttribute(`data-index`,0)
        tr.setAttribute("id",`tr-0`)
        let tdT = document.createElement("td")
        let tdA = document.createElement("td")
        let tdP = document.createElement("td")
        let tdR = document.createElement("td")
        let tdBtns = document.createElement("td")
        let btnDle = document.createElement("button")
        let btnChan = document.createElement("button")   
    

        tdT.textContent = libros[i].title
        tdA.textContent = libros[i].author
        tdP.textContent = libros[i].pages
        tdR.textContent = libros[i].read
        tdR.setAttribute("id",`tdR-0`)
        btnDle.textContent = "Delete"
        btnChan.textContent = "Change Status"
    
        btnDle.classList.add("btonesDelete")
        btnChan.classList.add("btonesChan")
        tdBtns.classList.add("Btones")

        tdBtns.append(btnChan)
        tdBtns.append(btnDle)

      
        tr.append(tdT)
        tr.append(tdA)
        tr.append(tdP)
        tr.append(tdR)
        tr.append(tdBtns)
      

      $tBody.append(tr)}
    } else{
        let tr = document.createElement("tr")
        tr.setAttribute(`data-index`,contador)
        tr.setAttribute("id",`tr-${contador}`)
        contador++
        let tdT = document.createElement("td")
        let tdA = document.createElement("td")
        let tdP = document.createElement("td")
        let tdR = document.createElement("td")
        let tdBtns = document.createElement("td")
        let btnDle = document.createElement("button")
        let btnChan = document.createElement("button")   
        
    
        tdT.textContent = libros[lastPosition -1].title
        tdA.textContent = libros[lastPosition -1].author
        tdP.textContent = libros[lastPosition -1].pages
        tdR.textContent = libros[lastPosition -1].read
        tdR.setAttribute("id",`tdR-${contador}`)
        btnDle.textContent = "Delete"
        btnChan.textContent = "Change Status"
        
        btnDle.classList.add("btonesDelete")
        btnChan.classList.add("btonesChan")
        tdBtns.classList.add("Btones")
    
        tdBtns.append(btnChan)
        tdBtns.append(btnDle)
    
          
        tr.append(tdT)
        tr.append(tdA)
        tr.append(tdP)
        tr.append(tdR)
        tr.append(tdBtns)
          
    
        $tBody.append(tr)
    }
    
    
    
    
    
  
}


//funcion eliminar libro de array y fila

function deleteData(arr,index){
    arr.splice(index,1)
    let elementDelete =  document.getElementById(`tr-${index}`)
    elementDelete.remove()
   
   
}

// funcion cambiar status

function changeStatus(arr,index){
    let tdR = document.getElementById(`tdR-${index}`)
    if(arr[index].read == "yes") {
        arr[index].read = "no"
        tdR.textContent = "no"
    } else if(arr[index]== "no"){
        arr[index].read = "yes"
        tdR.textContent = "yes"
    }
     
}




// funcion limpiar inputs
function clearInputs(){
    $title.value = ""
    $author.value = ""
    $pages.value = ""
    $read.value = ""
}




// Evento: mostrar info


$btnAdd.addEventListener("click",(e)=>{
   if($title.value == "" || $author.value == "" || $pages.value == "" || $read.value == "") return // si Los inputs estan vacios no hacer nada
   let libros
   let lastPosition
   
   
   e.preventDefault()
   libros = addBookToLibrary()
   lastPosition = libros.length
   displayBooks(lastPosition,libros,contador)
   const btonesDelete = document.querySelectorAll(".btonesDelete")
   const btnChanges = document.querySelectorAll(".btonesChan")
   
   contador++
   
   btonesDelete.forEach((deleteBtn) =>{
    deleteBtn.addEventListener("click",(e)=>{
        let index = e.target.parentNode.parentNode.getAttribute("data-index")
        deleteData(myLibrary,index)
        console.log(myLibrary)
    })
    
    btnChanges.forEach((btnchan)=> {
        btnchan.addEventListener("click",(e)=>{
            let index = e.target.parentNode.parentNode.getAttribute("data-index")
            changeStatus(myLibrary,index)
        })
    })




})
   
   
   
   clearInputs()
   console.log(btonesDelete)

   

   

})




// evento eliminar tds

