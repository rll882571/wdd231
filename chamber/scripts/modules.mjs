// =========================================================================
// scripts/modules.mjs - MÓDULO PRINCIPAL (O Hub)
// =========================================================================

// Importa o objeto de dados (default export)port byuiCourse from "./course.mjs"; 

// Importa as funções nomeadas de outros módulos
import { setSectionSelection } from "./sections.mjs"; 
import { setTitle, renderSections } from "./output.mjs"; 

// LÓGICA INICIAL
setTitle(byuiCourse.courseName);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);

// EVENT LISTENERS
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    byuiCourse.changeEnrollment(sectionNum);
    renderSections(byuiCourse.sections); 
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections); 
});