import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";

const Education = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleEducation = (e, index) => {
    const newEducation = [...resumeData.education];

    // Handle URL field formatting - remove protocols like work experience does
    if (e.target.name === "url") {
      newEducation[index][e.target.name] = e.target.value.replace(
        /^https?:\/\//,
        ""
      );
    } else {
      newEducation[index][e.target.name] = e.target.value;
    }

    setResumeData({ ...resumeData, education: newEducation });
  };

  const handleToggleEducationDates = (e) => {
    setResumeData({ ...resumeData, showEducationDates: e.target.checked });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { school: "", url: "", degree: "", startYear: "", endYear: "" },
      ],
    });
  };

  const removeEducation = (index) => {
    const newEducation = [...resumeData.education];
    newEducation[index] = newEducation[newEducation.length - 1];
    newEducation.pop();
    setResumeData({ ...resumeData, education: newEducation });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Education</h2>
      {resumeData.education.map((education, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder="School"
            name="school"
            className="w-full other-input"
            value={education.school}
            onChange={(e) => handleEducation(e, index)}
          />
          <input
            type="url"
            placeholder="School URL (optional)"
            name="url"
            className="w-full other-input"
            value={education.url}
            onChange={(e) => handleEducation(e, index)}
          />
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            className="w-full other-input"
            value={education.degree}
            onChange={(e) => handleEducation(e, index)}
          />
          <div className="flex-wrap-gap-2">
            <input
              type="date"
              placeholder="Start Year"
              name="startYear"
              className="other-input"
              value={education.startYear}
              onChange={(e) => handleEducation(e, index)}
            />
            <input
              type="date"
              placeholder="End Year"
              name="endYear"
              className="other-input"
              value={education.endYear}
              onChange={(e) => handleEducation(e, index)}
            />
          </div>
        </div>
      ))}
      <div className="flex items-center gap-2 mt-2 mb-2">
        <input
          type="checkbox"
          id="showEducationDates"
          checked={resumeData.showEducationDates}
          onChange={handleToggleEducationDates}
          className="w-4 h-4 text-[deepskyblue] bg-gray-100 border-gray-300 rounded focus:ring-fuchsia-500"
        />
        <label
          htmlFor="showEducationDates"
          className="text-sm text-white cursor-pointer"
        >
          Display Graduation Date
        </label>
      </div>
      <FormButton
        size={resumeData.education.length}
        add={addEducation}
        remove={removeEducation}
      />
    </div>
  );
};

export default Education;
