import React, { useContext } from "react";
import { ResumeContext } from "@/pages/builder";
import FormButton from "@/components/form/FormButton";

const Skill = ({ title }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  // skills
  const handleSkill = (e, index, title) => {
    const newSkills = [
      ...resumeData.skills.find((skillType) => skillType.title === title)
        .skills,
    ];
    newSkills[index] = { ...newSkills[index], text: e.target.value };
    setResumeData((prevData) => ({
      ...prevData,
      skills: prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      ),
    }));
  };

  const handleUnderline = (index, title) => {
    const newSkills = [
      ...resumeData.skills.find((skillType) => skillType.title === title)
        .skills,
    ];
    newSkills[index] = { ...newSkills[index], underline: !newSkills[index].underline };
    setResumeData((prevData) => ({
      ...prevData,
      skills: prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      ),
    }));
  };

  const addSkill = (title) => {
    setResumeData((prevData) => {
      const skillType = prevData.skills.find(
        (skillType) => skillType.title === title
      );
      const newSkills = [...skillType.skills, { text: "", underline: false }];
      const updatedSkills = prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      );
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };

  const removeSkill = (title, index) => {
    setResumeData((prevData) => {
      const skillType = prevData.skills.find(
        (skillType) => skillType.title === title
      );
      const newSkills = [...skillType.skills];
      newSkills.pop();
      const updatedSkills = prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      );
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };

  const skillType = resumeData.skills.find(
    (skillType) => skillType.title === title
  );

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{title}</h2>
      {skillType.skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={skill.underline}
            onChange={() => handleUnderline(index, title)}
            className="w-4 h-4 cursor-pointer"
            title="Underline this skill"
          />
          <input
            type="text"
            placeholder={title}
            name={title}
            className="flex-1 other-input"
            value={skill.text}
            onChange={(e) => handleSkill(e, index, title)}
          />
        </div>
      ))}
      <FormButton
        size={skillType.skills.length}
        add={() => addSkill(title)}
        remove={() => removeSkill(title)}
      />
    </div>
  );
};

export default Skill;
