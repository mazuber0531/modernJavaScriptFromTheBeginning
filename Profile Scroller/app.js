const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "male",
    location: "Your Butt?",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    name: "Jenny Doe",
    age: 31,
    gender: "female",
    lookingfor: "male",
    location: "Definately Miami",
    image: "https://randomuser.me/api/portraits/women/71.jpg",
  },
  {
    name: "Phil Gastein",
    age: 21,
    gender: "male",
    lookingfor: "male",
    location: "Your Mouth?",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const profiles = profileIterator(data);

//call first profile
nextProfile();

//next event
document.getElementById("next").addEventListener("click", nextProfile);

//next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">age: ${currentProfile.age}</li>
    <li class="list-group-item">gender: ${currentProfile.gender}</li>
    <li class="list-group-item">looking for: ${currentProfile.lookingfor}</li>
    <li class="list-group-item">location: ${currentProfile.location}</li>
    </ul>`;

    document.getElementById("imageDisplay").innerHTML = `
    <img src="${currentProfile.image}"</img>`;
  } else {
    window.location.reload();
  }
}

//profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false,
          }
        : { done: true };
    },
  };
}
