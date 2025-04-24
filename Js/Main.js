// start sumbit form js
document.querySelector("#form").addEventListener("submit" , function(event){

    // ============================
    // creat and Dom all Element
    // ============================
    
    // Dom all Element
    var result = document.querySelector("#result");
    var input = document.querySelector("#input").value;
     
    // creat all Element
    var myli =document.createElement("li");
    let mybutton2 =document.createElement("button");
    let para =document.createElement("p");
    let mybutton =document.createElement("button");
    let myicon =document.createElement("i");
    let para_form =document.createElement("p");
    let myform =document.createElement("form");
    let myedit =document.createElement("input");
    let mybutton3 =document.createElement("button");
    
    // set all Attribute for Element
    myedit.setAttribute("type","text")
    myedit.setAttribute("class","myedit form-control")
    para_form.setAttribute("class","para_form")
    myform.setAttribute("class","myform")
    myicon.setAttribute("class","fa-classic fa-trash")
    mybutton.setAttribute("class","mybutton")
    mybutton2.setAttribute("class","mr-3")
    mybutton3.setAttribute("class","mybutton3")
    para.setAttribute("class","para")

    // Set title in button edit and delet
    mybutton.setAttribute("title","Delet")
    mybutton2.setAttribute("title","Edit")
    
    
    // The value input ==> para in li 
    para.innerHTML= input;
    
    // Use if and else for empty input
    if(input.trim()==""){     
        document.querySelector("#p").innerHTML="please Enter notes";    
    }else{
        myform.remove();
        document.querySelector("#p").innerHTML="";
        document.querySelector("#input").value = "";
        // creat all Element in ol
        result.appendChild(myli);
        myli.append(mybutton2);
        myli.append(mybutton);
        mybutton2.append(para);
        mybutton.append(myicon);
        
        // Remove li 
        mybutton.onclick = function(event){
            
            myli.remove();
            myform.remove();
            event.preventDefault();
    
        }
      
        // =================================
        
        // edit notes
        mybutton2.onclick = function(event){   
            document.querySelector("body").append(myform);
            myform.append(myedit);
            myform.append(mybutton3);
            myform.append(para_form);
            myedit.value=para.innerHTML;
        event.preventDefault();
        }

    mybutton3.innerHTML="Edit";
    mybutton3.onclick=function(event){
        if(myedit.value.trim()==""){
            
            para_form.innerHTML="please Enter notes";    
            // event.preventDefault;
            
        }else{    
            para.innerHTML=myedit.value;
            myform.remove();
            para_form.innerHTML="";
        }
    event.preventDefault();
    }
    
    }

    event.preventDefault();
} )