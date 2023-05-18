    const newBTN=document.createElement('button')
    const nextbtn=document.getElementById("next")
    const btncontainer=document.getElementById("btncontainer")
    const toggle1=document.getElementById("toggle1")
    const toggle2=document.getElementById("toggle2")
    const toggle3=document.getElementById("toggle3")
    const form1=document.getElementById("form1")
    const form2=document.getElementById("form2")
    const form3=document.getElementById("form3")
    
    let addcount=0

    function addSubmitButton(){
        // this function add the submit button if it is on the last form
        // this function will style the color of the numbers of the form based on the condition below
        // this fuction will also change to the correct form if the condition stated below is true
            addcount++
            if (addcount==1){
                form1.style.cssText='display: none;'
                form2.style.cssText='display: block; background-color: white'
                form3.style.cssText='display: none;'

                toggle1.style.cssText='background-color: white;'
                toggle2.style.cssText='background-color: purple;'
                toggle3.style.cssText='background-color: white;'


            }else if(addcount==2){
                form1.style.cssText='display: none;'
                form2.style.cssText='display: none;'
                form3.style.cssText='display: block; background-color: white;'

                toggle1.style.cssText='background-color: white;'
                toggle2.style.cssText='background-color: white; border: 2px solid purple; border-radius: 50px;'
                toggle3.style.cssText='background-color: purple;'

                nextbtn.remove()

                const btnDiv=document.getElementById("submitBTN")
                newBTN.innerHTML="submit"
                newBTN.setAttribute('id','submitBTN')
                newBTN.addEventListener("click", addperson)
                newBTN.setAttribute('type', 'button');
                btnDiv.appendChild(newBTN)
            }
        
    }

    
    function removeSubmitButton(){
        // this function removes the submit button if it is on the second or first form
        // this fuction will also change to the correct form if the condition stated below is true

        addcount--
        if (addcount== 1){
            const btnDiv=document.getElementById("submitBTN")
            btnDiv.removeChild(newBTN)
        }

        if (addcount==1){
            form1.style.cssText='display: none;'
            form2.style.cssText='display: block; background-color: white'
            form3.style.cssText='display: none;'

            toggle1.style.cssText='background-color: white;'
            toggle2.style.cssText='background-color: purple;'
            toggle3.style.cssText='background-color: white;'

            btncontainer.appendChild(nextbtn)
        }else if(addcount==0){
            form1.style.cssText='display: block; background-color: white;'
            form2.style.cssText='display: none;'
            form3.style.cssText='display: none;'

            toggle1.style.cssText='background-color: purple;'
            toggle2.style.cssText='background-color: white;'
            toggle3.style.cssText='background-color: white;'
        }else if (addcount<0){
            addcount++
        }
    }

// this list is going to store all the objects(each students data)
const listOfStudents=[]

// this function is used to create new objects were we will store each student data
function studentObject(name, email, location, phoneNumber,course, gender, comments, rating  ){
    return{name, email, location, phoneNumber,course, gender, comments, rating }
}

    //code below gets all the values from each input field in the page
    const pagename= document.getElementById("name")
    const pageEmail= document.getElementById("email")
    const pageLocation=document.getElementById("location")
    const pagePhonenumber=document.getElementById("phonenumber")
    const pageCourse=document.getElementById("enrolled-course")
    const pageGender=document.getElementById("gender")
    const pageComments=document.getElementById("comments")
    const pageRating=document.getElementById("rating")
    

function addperson(){
    //the function below add each record to the database when you click on the submit button
    const person1= studentObject(pagename.value, pageEmail.value, pageLocation.value,pagePhonenumber.value, pageCourse.options[pageCourse.selectedIndex].text, pageGender.options[pageGender.selectedIndex].text, pageComments.value, pageRating.value)
    listOfStudents.push(person1)

    /*
    const result= document.getElementById("result")
    const contentContainer=document.createElement("div")
    const contentChild =document.createElement("p")
    contentChild.setAttribute('id','para')
    contentContainer.setAttribute('id','para-container')
     contentChild.textContent=`name: ${pagename.value},   E-mail: ${pageEmail.value},  Location: ${pageLocation.value}  Phone number: ${pagePhonenumber.value}, Course of choice: ${pageCourse.options[pageCourse.selectedIndex].text}  Gender:${pageGender.options[pageGender.selectedIndex].text} Comments: ${pageComments.value}   `
    contentContainer.appendChild(contentChild)
    result.appendChild(contentContainer)
    */
   alert("Thank you for filling out the form")
    console.log(listOfStudents)
}

function fetchDatabase(){
    for (item of listOfStudents){
        const pa=item.name
        console.log (pa)
    }
}
fetchDatabase()
console.log(pagename.value)

