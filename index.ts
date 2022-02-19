import { Person } from './person';
import './style.css';
let Felipe = new Person('Filipe', 'Toledo', 'Silva', 18);
const appDiv: HTMLElement = document.getElementById('P');
appDiv.innerHTML = `<h1> Tarefa </h1>`;
const nomecomp: HTMLElement = document.getElementById('N');
const idade: HTMLElement = document.getElementById('I');
nomecomp.innerHTML = Felipe.Getfullname();
idade.innerHTML += ': ' + Felipe.GetbirthdayYear();
