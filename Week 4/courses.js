// courses.js
const aCourse = {
    CourseCode: "CSE121b",
    name: "Javascript Language",
    sections:[
      {sectionNum:1, roomNum:'STC 353',enrolled:26,days:'TTh',instructor:'Bro T'},
      {sectionNum:2, roomNum:'STC347',enrolled:28,days:'TTh',instructor:'Sis A'},
      
    ],
    enrollStudent: function (sectionNum)
    {
      console.log(this.sections);
    }
  };

function SetCourseInfo(course)
{
  const coursename = document.querySelector('#courseName');
  const coursecode = document.querySelector('#courseCode');
  coursename.textContent = course.name;
  coursecode.textContent = course.CourseCode;

}
function sectionTemplate(section)
{
  return `<tr>
  <td>${section.sectionNum}</td>
  <td>${section.roomNum}</td>
  <td>${section.enrolled}</td>
  <td>${section.days}</td>
  <td>${section.instructor}</td></tr>`
}

function setSections(sections)
{
  const html = sections.map(sectionTemplate);
  document.querySelector('#sections').innerHTML = html.join('');
}
SetCourseInfo(aCourse);
setSections(aCourse.sections);

aCourse.enrollStudent(1);