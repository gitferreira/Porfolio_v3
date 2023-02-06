export const currentAge = () => {
  const today = new Date();
  const bday = new Date("1996/01/18");
  let age = today.getFullYear() - bday.getFullYear();
  const m = today.getMonth() - bday.getMonth();
  if (m < 0 || (m === 0 && today.getDay() < bday.getDay())) {
    age--;
  }
  return age;
};


function updateSkillsSection() {
  const skillsSection = document.querySelector(".skills_section");
  const skillsSectionRect = skillsSection.getBoundingClientRect();
  const isInViewport = (
    skillsSectionRect.top >= 0 &&
    skillsSectionRect.left >= 0 &&
    skillsSectionRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    skillsSectionRect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
  if (isInViewport) {
    // code to update the keyframe and set the width and background color
    console.log('ajhsdjka')
  }
}

export default updateSkillsSection;