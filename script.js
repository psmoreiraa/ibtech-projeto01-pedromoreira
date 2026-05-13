// TERMINAL
const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const command = input.value.toLowerCase();
    let response = "";

    if (command === "whoami") {
      response = "Pedro Moreira - estudante de Engenharia da Computação";
    } else if (command === "skills") {
      response = "HTML, CSS, C/C++, Excel, Canva";
    } else if (command === "contact") {
      response = "Email: pedrosmoreira34@gmail.com";
    } else {
      response = "Comando não reconhecido";
    }

    output.innerHTML += `<p>> ${command}</p><p>${response}</p>`;
    input.value = "";
  }
});


// COPIAR EMAIL
const email = "pedrosmoreira34@gmail.com";

document.querySelector("#contato p").addEventListener("click", () => {
  navigator.clipboard.writeText(email);
  alert("Email copiado!");
});


// ANIMAÇÃO AO ROLAR
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(20px)";
  sec.style.transition = "0.5s";

  observer.observe(sec);
});
