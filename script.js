// const timeEl = document.querySelector('.timer');
const taskFormEl = document.querySelector('#task-input-form');
const taskContainer = document.querySelector('#task-container');

const setTime = {
    hours: 0,
    minutes: 0.2
};

const countdown = (setTime, id) => {
    console.log(setTime);
    const timeEl = document.querySelector('#am');

    let timeLeft = calculateSeconds(setTime.hours, setTime.minutes);

    setInterval(() => {
        if (timeLeft < 0) {
            return clearInterval();
        }

        timeEl.innerHTML = formatTimeLeft(timeLeft);

        timeLeft = timeLeft - 1;
    }, 1000)
};

const calculateSeconds = (hours, minutes) => {
    let seconds = (hours * 3600) + (minutes * 60);
    return seconds;
};

const formatTimeLeft = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10 ) {
        seconds = '0' + seconds
    }

    if (minutes < 10 ) {
        minutes = '0' + minutes
    }

    return `${minutes}:${seconds}`;
};

const startTask = (event) => {
    event.preventDefault();
    const minutes = document.querySelector('#minutes');
    const hours = document.querySelector('#hours');
    const time = {hours: hours.value, minutes: minutes.value}
    const name = document.querySelector('#name');

    const newTask = document.createElement('div');
    newTask.className = 'task-item';

    const taskName = document.createElement('h2');
    taskName.innerHTML = name.value;

    const taskTimeEl = document.createElement('p');
    taskTimeEl.innerHTML = 'Time: ';

    const taskTimerEl = document.createElement('span');
    taskTimerEl.id = 'am';

    taskTimeEl.appendChild(taskTimerEl);
    newTask.append(taskName, taskTimeEl);
    taskContainer.appendChild(newTask);

    countdown(time, taskTimerEl.id);
};

taskFormEl.addEventListener('submit', startTask);
