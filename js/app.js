console.log("Welcome to my Notes ")

// add in local  storage 

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e)
{
    let addTxt = document.getElementById("addTxt");
    // console.log(addText);
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesobj = [];
    }
    else
    {
        notesobj=JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addTxt.value="";
    console.log(notesobj);
    showNotes();
})

function showNotes()
{
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesobj = [];
    }
    else
    {
        notesobj=JSON.parse(notes);
    }
    let html ="";
    notesobj.forEach(function(element,index)
    {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
              
        <div class="card-body">
          <h5 class="card-title">Note ${index+1} </h5>
          <p class="card-text">${element}.</p>
          <button id=${index} onclick="deletenote(this.id)" class="btn btn-primary">Delete Node</button>
        </div>
      </div>`;
    });
    let noteselm = document.getElementById("notes");
    if(notesobj.length!=0)
    {
        noteselm.innerHTML=html;
    }
    else
    {
        noteselm.innerHTML=`"nothing to show"`;
    }
}

function deletenote(index)
{
  console.log(index);
  let notes = localStorage.getItem("notes");
  if(notes == null)
  {
      notesobj = [];
  }
  else
  {
      notesobj=JSON.parse(notes);
  }
  notesobj.splice(index, 1);
  localStorage.setItem("notes",JSON.stringify(notesobj));
  showNotes();
  

  
}

let search = document.getElementById('searchtxt');
search.addEventListener("input",function()
{
    let inputval = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element)
    {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputval))
        {
            element.style.display= "block";
        }
        else
        {
            element.style.display="none";
        }
    })
})