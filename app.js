var generateResume = function (event) {
    event.preventDefault();
    event.target;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var gmail = document.getElementById("gmail").value;
    var about = document.getElementById("about").value;
    var field1 = document.getElementById("field1").value;
    var para1 = document.getElementById("para1").value;
    var field2 = document.getElementById("field2").value;
    var para2 = document.getElementById("para2").value;
    var field3 = document.getElementById("field3").value;
    var para3 = document.getElementById("para3").value;
    var skills1 = document.getElementById("skills1").value;
    var skills2 = document.getElementById("skills2").value;
    var skills3 = document.getElementById("skills3").value;
    var experience = document.getElementById("experience").value;
    var resume = " <!DOCTYPE html>\n          <html lang=\"en\">\n          <head>\n              <meta charset=\"UTF-8\">\n              <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n              <title>Resume</title>\n              <style>\n                  .container {\n   max-width: 800px;\n   margin: 20px auto;\n   padding: 20px;\n   box-shadow: 0 0 1rem black;\n   border-radius: 2rem;\n   background-color: rgb(236 253 245);\n   }\n   \n   h1,\n   h2 {\n      background-image: linear-gradient(to right, black, rgb(110 231 183));\n      text-align: center;\n      padding: 10px;\n      margin-bottom: 2rem;\n      border-radius: 2rem;\n      color:  black;\n   }\n\n   h3 {\n      margin: 1rem;\n   }\n   \n   .info {\n      margin-bottom: 2rem;\n   }\n   \n   .lists{\n      display: flex;\n      flex-direction: column;\n      gap: 1rem;\n      justify-content: space-evenly;\n      list-style: none;\n      padding-top: 20px;\n      overflow: hidden;\n   }\n   \n   .section {\n      margin-top: 2rem;\n      overflow: hidden;\n      text-align: center;\n   }\n   .section h2 {\n      font-size: larger;\n   }\n   \n   .btn {\n      display: flex;\n      justify-self: center;\n      margin-top: 2rem;\n      border: 1px solid;\n      padding: 0.5rem;\n      border-radius: 1rem;\n      background-color: rgb(110 231 183);\n      font-family: \"Poppins\", serif;\n      font-weight: 600;\n      font-style: normal;\n   }\n   \n   .font{\n      font-family: \"Roboto\", sans-serif;\n      font-weight: 500;\n      font-style: normal;\n   }\n      @media(min-width:768px){\n      .lists{\n          flex-direction: row;\n      }  \n   }\n   </style>\n   </head>\n   <body>\n      <div class=\"container\">\n        <div class=\"info font\">\n          <h1 class=\"editable\" contenteditable=\"true\">".concat(name, "</h1>\n        <ul class=\"lists\">\n          <li class=\"editable\" contenteditable=\"true\"><b>Phone:</b>").concat(phone, "</li>\n          <li class=\"editable\" contenteditable=\"true\"><b>Email:</b> ").concat(gmail, "</li>\n        </ul>  \n        </div>\n        <div class=\"section font\">\n          <h2>About Me</h2>\n          <p class=\"editable\" contenteditable=\"true\">\n              ").concat(about, "\n          </p>\n        </div>\n        <div class=\"section font\">\n          <h2>Education</h2>\n          <h3 class=\"editable\" contenteditable=\"true\">").concat(field1, ":</h3>\n          <p class=\"editable\" contenteditable=\"true\">\n              ").concat(para1, " \n          </p>\n          <h3 class=\"editable\" contenteditable=\"true\">").concat(field2, ":</h3>\n          <p class=\"editable\" contenteditable=\"true\">\n            ").concat(para2, "\n          </p>\n          <h3 class=\"editable\" contenteditable=\"true\">").concat(field3, ":</h3>\n          <p class=\"editable\" contenteditable=\"true\">\n              ").concat(para3, "\n          </p>\n        </div>\n        <div class=\"section font\" id=\"skill\" >\n          <h2>Skills</h2>\n           <div>\n            <p class=\"editable\" contenteditable=\"true\">").concat(skills1, "</p>\n            <p class=\"editable\" contenteditable=\"true\">").concat(skills2, "</p>\n            <p class=\"editable\" contenteditable=\"true\">").concat(skills3, "</p>\n          </div> \n        </div>\n         <button id=\"button\" class=\"btn\" \">Hide Skills</button> \n        <div class=\"section font\">\n          <h2>Experience</h2>\n          <p class=\"editable\" contenteditable=\"true\">\n              ").concat(experience, "\n          </p>\n        </div>\n      </div>\n      </body>\n      </html>");
    var inputTaker = document.getElementById("input-taker");
    inputTaker.style.display = "none";
    var resumeDiv = document.getElementById("resume-div");
    resumeDiv.innerHTML = resume;
    resumeDiv.style.display = "block";
    var button = document.getElementById("button");
    var skill = document.getElementById("skill");
    button.addEventListener("click", function () {
        if (skill.style.display === "none") {
            skill.style.display = "block";
            button.textContent = "Hide Skills";
        }
        else {
            skill.style.display = "none";
            button.textContent = "Show Skills";
        }
    });
};
var form = document.getElementById("form");
form.addEventListener("submit", generateResume);
var downloadResume = function () {
    var resumeDiv = document.getElementById("resume-div");
    var resumeContent = resumeDiv.innerHTML;
    var blob = new Blob([resumeContent], { type: "text/html" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "resume.html";
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
};
var downloadButton = document.createElement("button");
downloadButton.textContent = "Download Resume";
downloadButton.className = "btn";
downloadButton.addEventListener("click", downloadResume);
document.body.appendChild(downloadButton);
