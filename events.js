<script>
    document.getElementById("first").addEventListener("click",function(e){
        console.log("clicked outside the ul")
    },false)
        document.getElementById("day2").addEventListener("click",function(e){
        console.log("monday clicked")
        e.stopPropagation()
    },false)
   </script>




 document.querySelector("#first").addEventListener("click",function(e){
    console.log(e.target.tagName)


    let removeit= e.target.parentNode
    removeit.remove()
    },false)


//     <div id="box" style="width:200px; height:100px;padding:30px;
// border:1px solid black;">Move mouse over here</div>
// </div>

// <script>
//    const box=document.getElementById("box")

//  box.addEventListener("mouseover",function(){
//     box.innerHTML ="mouse is moving "
//   })
// box.addEventListener("mouseout", function () {
//   box.innerHTML = "Move is out!";
// });
