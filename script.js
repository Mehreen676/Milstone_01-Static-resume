var _a;
(_a = document.getElementById('toggleSkills')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});
