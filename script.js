function readFile() {
    let file = document.getElementById("fileInput").files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
      let fileContents = e.target.result;
      processFileContents(fileContents);
    };
    reader.readAsText(file);
  }
  
  function processFileContents(fileContents) {
    let lines = fileContents.split("\n");
    let outputDiv = document.getElementById("output");
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      if (line.startsWith("Nama:")) {
        let name = line.substring(5);
        outputDiv.innerHTML += "Nama: " + name + "<br>";
      } else if (line.startsWith("Umur:")) {
        let age = parseInt(line.substring(5));
        if (age >= 18) {
          outputDiv.innerHTML += "Umur: " + age + " (dewasa)<br>";
        } else {
          outputDiv.innerHTML += "Umur: " + age + " (anak-anak)<br>";
        }
      }
    }
  }
  
  