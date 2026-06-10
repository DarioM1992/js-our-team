const teamMembers = [
    {name: "Marco Bianchi" ,role: "Designer", img: "male1.png", email: "marcobianchi@team.com"},
    {name: "Laura Rossi" ,role: "Front-End Developer", img: "female1.png", email: "laurarossi@team.com"},
    {name: "Giorgio Verdi" ,role: "Back-End Developer", img: "male2.png", email: "giorgioverdi@team.com"},
    {name: "Marta Ipsum" ,role: "SEO Specialist", img: "female2.png", email: "martarossi@team.com"},
    {name: "Roberto Lorem" ,role: "SEO Specialist", img: "male3.png", email: "robertolorem@team.com"},
    {name: "Daniela Amet" ,role: "Analyst", img: "female3.png", email: "danielaamet@team.com"},
]

const teamContainer = document.querySelector('.team-container');
const newMemberForm = document.querySelector('#new-member');

const memberForm = {
nameInput : newMemberForm.querySelector('#name'),
roleInput : newMemberForm.querySelector('#role'),
imgInput : newMemberForm.querySelector('#img'),
emailInput : newMemberForm.querySelector('#email'),
};

const teamMemberCardTemplate = ({ name, role, img, email }) => `
    <div class="team-card">
        <div class="card-image">
            <img src="assets/img/${img}" alt="${name}">
        </div>
        <div class="card-text">
            <h3>${name}</h3>
            <p>${role}</p>
            <address>${email}</address>
        </div>
    </div>
`;

const renderTeam = () => {
let html = '' ;
for (let i = 0 ; i < teamMembers.length; i++) {
    const member = teamMembers[i];

    html += teamMemberCardTemplate(member);
}

teamContainer.innerHTML = html;
};


const onFormSubmit = event => {
    event.preventDefault();

    const name = memberForm.nameInput.value;
    const role = memberForm.roleInput.value;
    const img = memberForm.imgInput.value;
    const email = memberForm.emailInput.value;


    teamMembers.push ({ name, role, img, email});
    renderTeam();
};

newMemberForm.addEventListener('submit', onFormSubmit);


renderTeam();

