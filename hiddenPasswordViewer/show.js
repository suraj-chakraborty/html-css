const root = document.documentElement;
const eye = document.getElementById('eyeball');
const beam = document.getElementById("beam");
const password = document.getElementById("password");

root.addEventListener('mousemove', (e) => {
        let rect = beam.getBoundingClientRect();
        let mouseX = rect.right + (rect.width / 2);
        let mouseY = rect.top + (rect.height / 2);
        let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
        let degrees = (rad + (20 / Math.PI) * -1) - 350;
        console.log(degrees)

        root.style.setProperty('--beamDegrees', `${degrees}deg`);

    }
);

eye.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.toggle('show-password');
        password.type = password.type === 'password' ? 'test' : 'password'
        password.focus()
});