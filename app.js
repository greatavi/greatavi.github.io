function settings(){
	var experience = document.getElementById("experience-list");
	var education = document.getElementById("education-list");
	var resume_list = document.getElementsByClassName("list");
	experience.style.display = 'none';
	education.style.display = 'none';
	resume_list[0].style.borderBottomColor = "lightgreen";

}
function displayData(value){
	var skills = document.getElementById("skills-list");
	var experience = document.getElementById("experience-list");
	var education = document.getElementById("education-list");
	var resume_list = document.getElementsByClassName("list");

	if(value === 'experience'){
	//hide both skills and education
		experience.style.display = 'block';
		resume_list[1].style.borderBottomColor = "lightgreen";
		resume_list[0].style.borderBottomColor = "black"
		resume_list[2].style.borderBottomColor = "black"
		skills.style.display = 'none';
		education.style.display = 'none';
	}
	else if(value === 'education'){
		skills.style.display = 'none';
		resume_list[2].style.borderBottomColor = "lightgreen";
		resume_list[0].style.borderBottomColor = "black"
		resume_list[1].style.borderBottomColor = "black"
		experience.style.display = 'none';

		education.style.display = 'block';
	}
	else{
		skills.style.display = 'block';
		resume_list[0].style.borderBottomColor = "lightgreen";
		resume_list[1].style.borderBottomColor = "black"
		resume_list[2].style.borderBottomColor = "black"
		experience.style.display = 'none';
		education.style.display = 'none';
	}
}