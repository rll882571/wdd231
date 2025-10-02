// =========================================================================
// scripts/course.mjs - MÓDULO DE DADOS
// =========================================================================

const byuiCourse = {
    courseName: "WDD 231",
    sections: [
        {
            sectionNum: 1,
            enrolled: 88,
            days: ["M", "W", "F"],
            instructor: "Brother Bingham",
        },
        {
            sectionNum: 2,
            enrolled: 81,
            days: ["T", "Th"],
            instructor: "Sister Shultz",
        },
        {
            sectionNum: 3,
            enrolled: 95,
            days: ["T", "Th"],
            instructor: "Sister Smith",
        },
    ],
    changeEnrollment: function (sectionNum, enroll = true) {
        const sectionIndex = this.sections.findIndex(
            (s) => s.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            if (enroll) {
                this.sections[sectionIndex].enrolled++;
            } else {
                this.sections[sectionIndex].enrolled--;
            }
            // A LINHA renderSections FOI REMOVIDA DAQUI
        }
    },
};

// Exportação Padrão
export default byuiCourse;