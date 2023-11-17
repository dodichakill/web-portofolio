AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  const skillItems = document.querySelectorAll(".item");

  skillItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Mendapatkan data atribut dan teks dari elemen yang diklik
      const skillName = item.querySelector("span").innerText;
      const skillDescription = getSkillDescription(skillName);
      showSkillPopup(skillName, skillDescription);
    });
  });

  function getSkillDescription(skillName) {
    const descriptions = {
      HTML: "HTML is the standard markup language for documents designed to be displayed in a web browser. Using tags and attributes, HTML builds the basic structure of a web page",
      CSS: "CSS is a style sheet language used to design and enhance the appearance of web pages. With CSS, you can control color, size, layout, and various other presentation aspects.",
      javascript:
        "JavaScript is a high-level programming language used to make web pages interactive. With JavaScript, you can handle events, manipulate HTML elements, and communicate with servers.",
      PHP: "PHP is a server-side programming language commonly used to develop dynamic web applications. PHP can process forms, access databases, and perform various other server-side tasks.",
      ReactJS:
        "ReactJS is a JavaScript library used to build interactive user interfaces (UI). Developed by Facebook, React allows developers to create reusable UI components.",
      Laravel:
        "Laravel is a PHP framework used to build modern web applications. Laravel provides a robust structure, along with features such as Object-Relational Mapping (ORM) and routing.",
      MySQL:
        "MySQL is a relational database management system (RDBMS) used to store and manage data. It is commonly used in conjunction with PHP to manage databases in web development.",
      Bootstrap:
        "Bootstrap is a front-end framework that allows developers to quickly build responsive designs. It contains a set of UI components and pre-designed styles to facilitate development.",
      TailwindCSS:
        "Tailwind CSS is a CSS framework that focuses on direct configuration through HTML. Using utility classes, Tailwind enables developers to create highly customized designs without writing specific CSS.",
    };

    return descriptions[skillName];
  }

  function showSkillPopup(skillName, skillDescription) {
    alert(`Skill: ${skillName}\nDeskripsi: ${skillDescription}`);
  }
});
