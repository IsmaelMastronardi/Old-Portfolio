
const Works = {
    name :"",
    description :"",
    'featured image' :"",
    technologies :"",
    'link to live version' :"",
    'link to source' :""
}

const newWork = Object.create(Works);
newWork['name'] = "Multi-Post Stories Gain+Glory";
newWork['description'] = "una descripcion";
newWork['feature image'] = "hola";
newWork['technologies'] = ["Ruby on Rails" , "CSS" , "javaScript" , "HTML"];
newWork['link to live version'] = "no link yet";
newWork['link to source'] = "also no link yet";

const workSection = document.querySelector('#newWorkSection');
const workDiv = document.querySelector('#newWorkDiv')


function createWorkArticle (work){
const workArticle = document.createElement('article')
workArticle.classList.add('project');

const projectPictureDiv = document.createElement('div');
projectPictureDiv.classList.add('projectPicture')

const projectInfoDiv = document.createElement('div');
projectInfoDiv.classList.add('projectInfo');
const projectTitle = document.createElement('h3');
projectTitle.classList.add('projectTitle');
projectTitle.innerText = work['name'];
const projectBtnList = document.createElement('ul');
projectBtnList.classList.add('greyProjectButtons');

const projectListItems = document.createElement('projectListItems');
projectListItems.classList.add('projectListItems');
projectListItems.innerText = work['technologies'][0];
const projectListItems2 = document.createElement('projectListItems');
projectListItems2.classList.add('projectListItems');
projectListItems2.innerText = work['technologies'][1];
const projectListItems3 = document.createElement('projectListItems');
projectListItems3.classList.add('projectListItems');
projectListItems3.innerText = work['technologies'][2];
const projectListItems4 = document.createElement('projectListItems');
projectListItems4.classList.add('projectListItems');
projectListItems4.innerText = work['technologies'][3];

const projectGreenBtn = document.createElement('div');
projectGreenBtn.classList.add('greenProjectButton');
const seeProjectBtn = document.createElement('button');
seeProjectBtn.classList.add('LinkButton');
seeProjectBtn.innerText = "See Project";


workDiv.appendChild(workArticle);
workArticle.appendChild(projectPictureDiv)
workArticle.appendChild(projectInfoDiv)
projectInfoDiv.appendChild(projectTitle)
projectInfoDiv.appendChild(projectBtnList)
projectInfoDiv.appendChild(projectGreenBtn)



projectBtnList.appendChild(projectListItems)
projectBtnList.appendChild(projectListItems2)
projectBtnList.appendChild(projectListItems3)
projectBtnList.appendChild(projectListItems4)
projectGreenBtn.appendChild(seeProjectBtn)




}

window.onload = createWorkArticle(newWork);
window.onload = createWorkArticle(newWork);
window.onload = createWorkArticle(newWork);
window.onload = createWorkArticle(newWork);
window.onload = createWorkArticle(newWork);
window.onload = createWorkArticle(newWork);

