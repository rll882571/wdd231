// =========================================================================
// scripts/output.mjs - MÓDULO DE SAÍDA
// =========================================================================

export function setTitle(courseName) {
    // Note: Usando h2 no exemplo para o nome, mas o código original pode usar h1/h2
    document.querySelector("h2").textContent = courseName;
}

export function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
            <td>${section.sectionNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days.join(", ")}</td>
            <td>${section.instructor}</td></tr>`
    );

    // O seletor correto é #sections, que é o tbody/table
    document.querySelector("#sections").innerHTML = html.join(""); 
}