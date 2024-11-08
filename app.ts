const generateResume1 = (event: Event) => {
  event.preventDefault();

  event.target as HTMLFormElement;

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const gmail = (document.getElementById("gmail") as HTMLInputElement).value;
  const about = (document.getElementById("about") as HTMLInputElement).value;
  const field1 = (document.getElementById("field1") as HTMLInputElement).value;
  const para1 = (document.getElementById("para1") as HTMLInputElement).value;
  const field2 = (document.getElementById("field2") as HTMLInputElement).value;
  const para2 = (document.getElementById("para2") as HTMLInputElement).value;
  const field3 = (document.getElementById("field3") as HTMLInputElement).value;
  const para3 = (document.getElementById("para3") as HTMLInputElement).value;
  const skills1 = (document.getElementById("skills1") as HTMLInputElement).value;
  const skills2 = (document.getElementById("skills2") as HTMLInputElement).value;
  const skills3 = (document.getElementById("skills3") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLInputElement).value;

  const resume = ` <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Resume</title>
              <style>
                  .container {
   max-width: 800px;
   margin: 20px auto;
   padding: 20px;
   box-shadow: 0 0 1rem black;
   border-radius: 2rem;
   background-color: rgb(236 253 245);
   }
   
   h1,
   h2 {
      background-image: linear-gradient(to right, black, rgb(110 231 183));
      text-align: center;
      padding: 10px;
      margin-bottom: 2rem;
      border-radius: 2rem;
      color:  black;
   }

   h3 {
      margin: 1rem;
   }
   
   .info {
      margin-bottom: 2rem;
   }
   
   .lists{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: space-evenly;
      list-style: none;
      padding-top: 20px;
      overflow: hidden;
   }
   
   .section {
      margin-top: 2rem;
      overflow: hidden;
      text-align: center;
   }
   .section h2 {
      font-size: larger;
   }
   
   .btn {
      display: flex;
      justify-self: center;
      margin-top: 2rem;
      border: 1px solid;
      padding: 0.5rem;
      border-radius: 1rem;
      background-color: rgb(110 231 183);
      font-family: "Poppins", serif;
      font-weight: 600;
      font-style: normal;
   }
   
   .font{
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-style: normal;
   }
      @media(min-width:768px){
      .lists{
          flex-direction: row;
      }  
   }
   </style>
   </head>
   <body>
      <div class="container">
        <div class="info font">
          <h1 class="editable" contenteditable="true">${name}</h1>
        <ul class="lists">
          <li class="editable" contenteditable="true"><b>Phone:</b>${phone}</li>
          <li class="editable" contenteditable="true"><b>Email:</b> ${gmail}</li>
        </ul>  
        </div>
        <div class="section font">
          <h2>About Me</h2>
          <p class="editable" contenteditable="true">
              ${about}
          </p>
        </div>
        <div class="section font">
          <h2>Education</h2>
          <h3 class="editable" contenteditable="true">${field1}:</h3>
          <p class="editable" contenteditable="true">
              ${para1} 
          </p>
          <h3 class="editable" contenteditable="true">${field2}:</h3>
          <p class="editable" contenteditable="true">
            ${para2}
          </p>
          <h3 class="editable" contenteditable="true">${field3}:</h3>
          <p class="editable" contenteditable="true">
              ${para3}
          </p>
        </div>
        <div class="section font" id="skill" >
          <h2>Skills</h2>
           <div>
            <p class="editable" contenteditable="true">${skills1}</p>
            <p class="editable" contenteditable="true">${skills2}</p>
            <p class="editable" contenteditable="true">${skills3}</p>
          </div> 
        </div>
         <button id="button" class="btn" ">Hide Skills</button> 
        <div class="section font">
          <h2>Experience</h2>
          <p class="editable" contenteditable="true">
              ${experience}
          </p>
        </div>
      </div>
      </body>
      </html>`;

  const inputTaker = document.getElementById("input-taker") as HTMLDivElement;
  inputTaker.style.display = "none";

  const resumeDiv = document.getElementById("resume-div") as HTMLDivElement;
  resumeDiv.innerHTML = resume;
  resumeDiv.style.display = "block";

  const button = document.getElementById("button") as HTMLButtonElement;
  const skill = document.getElementById("skill") as HTMLDivElement;

  button.addEventListener("click", () => {
    if (skill.style.display === "none") {
      skill.style.display = "block";
      button.textContent = "Hide Skills";
    } else {
      skill.style.display = "none";
      button.textContent = "Show Skills";
    }
  });
};

const form1 = document.getElementById("form") as HTMLFormElement;
form1.addEventListener("submit", generateResume1);

const downloadResume1 = () => {
  const resumeDiv = document.getElementById("resume-div") as HTMLDivElement;
  const resumeContent = resumeDiv.innerHTML;

  const blob = new Blob([resumeContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "resume.html";
  document.body.appendChild(a);
  a.click();

  URL.revokeObjectURL(url);
  document.body.removeChild(a);
};


const downloadButton = document.createElement("button");
downloadButton.textContent = "Download Resume";
downloadButton.className = "btn";
downloadButton.addEventListener("click", downloadResume1);
document.body.appendChild(downloadButton);
