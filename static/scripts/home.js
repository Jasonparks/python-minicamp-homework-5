function validateForm() {
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;


  if (!name.length || !species.length || !age.length) {
      alert('All fields must be filled out!');
      return false;
  }

  if (isNaN(parseInt(age)) || typeof parseInt(age)!=='number'){
      alert('The Animals age must be a number');
      return false;
  }

  return true;
}

document.getElementById('changeColor').addEventListener('click', function() {
  var color = document.getElementById('colorInput').value;
  var body = document.getElementById('body')
  body.style.background=color;

})

document.getElementById('hide').addEventListener('click', function() {
	var body = document.getElementById('body');
	body.style.visibility = "hidden";
})
