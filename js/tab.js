 function filterContent(type) {
      const tabcontent = document.querySelectorAll(".tabcontent");
      tabcontent.forEach(content => content.style.display = "none");

      const coursework = document.querySelectorAll(".coursework");
      const extracurricular = document.querySelectorAll(".extracurricular");
      coursework.forEach(item => item.style.display = "none");
      extracurricular.forEach(item => item.style.display = "none");

      if (type === 'all') {
        document.getElementById('All').style.display = "block";
        coursework.forEach(item => item.style.display = "block");
        extracurricular.forEach(item => item.style.display = "block");
      } else if (type === 'coursework') {
        document.getElementById('All').style.display = "block";
        coursework.forEach(item => item.style.display = "block");
      } else if (type === 'extracurricular') {
        document.getElementById('All').style.display = "block";
        extracurricular.forEach(item => item.style.display = "block");
      }

      var tabbuttons = document.querySelectorAll(".tab button");
      tabbuttons.forEach(button => button.classList.remove("active"));
      document.querySelector(`button[onclick="filterContent('${type}')"]`).classList.add("active");
    }

    document.getElementById("defaultOpen").click();
