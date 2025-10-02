// =========================================================================
// scripts/sections.mjs - MÓDULO DE SELEÇÃO
// =========================================================================

export function setSectionSelection(sections) {
    const html = sections.map(
        (section) =>
            `<option value="${section.sectionNum}">${section.sectionNum}</option>`
    );
    // Adiciona as novas opções, mantendo o primeiro item desabilitado
    document.querySelector("#sectionNumber").innerHTML += html.join("");
}