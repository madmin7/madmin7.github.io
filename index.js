//constantes

const btnSobremi = document.getElementById("btn-sobremi");
const btnFormacion = document.getElementById("btn-formacion");
const btnExperiencia = document.getElementById("btn-experiencia");
const btnHabilidades = document.getElementById("btn-habilidades");
const divContenido = document.getElementById("container-contenido");





//eventos

btnSobremi.addEventListener('click', ()=> {
    const contenidoSobreMi = `
    <div id="contenido" class="animate__animated animate__fadeIn">
        <h1 class="mb-4 text-secondary"><ins>Sobre Mi</ins></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quidem provident dignissimos eos magni tenetur, quasi ad porro iure distinctio reprehenderit debitis nam, repudiandae aliquam impedit sapiente rerum. Saepe, esse?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quidem provident dignissimos eos magni tenetur, quasi ad porro iure distinctio reprehenderit debitis nam, repudiandae aliquam impedit sapiente rerum. Saepe, esse?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quidem provident dignissimos eos magni tenetur, quasi ad porro iure distinctio reprehenderit debitis nam, repudiandae aliquam impedit sapiente rerum. Saepe, esse?
        </p>
    </div>
    `;
    divContenido.innerHTML = contenidoSobreMi;
})


btnFormacion.addEventListener('click', ()=> {
    const contenidoSobreMi = `
    <div id="contenido" class="animate__animated animate__fadeIn">
        <h1 class="mb-4 text-secondary"><ins>Formación</ins></h1>
        <ul>
            <li class="mb-2">
                <h2 class="text-success">Primaria</h2>
                <h5 class="text-secondary">Junio 2000 - Diciembre 2002</h5>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora esse optio.</p>
            </li>
            <li>
                <h2 class="text-success">Secundaria</h2>
                <h5 class="text-secondary">Junio 2002 - Diciembre 2004</h5>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora esse optio.</p>
            </li>
            <li>
                <h2 class="text-warning">Curso Programacion 1</h2>
                <h5 class="text-secondary">Junio 2004 - Diciembre 2010</h5>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora esse optio.</p>
            </li>
            <li>
                <h2 class="text-warning">Curso Programacion 2</h2>
                <h5 class="text-secondary">Junio 2004 - Diciembre 2010</h5>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora esse optio.</p>
            </li>
            <li>
                <h2 class="text-info">Universidad 1</h2>
                <h5 class="text-secondary">Junio 2010 - Diciembre 2016</h5>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora esse optio.</p>
            </li>
        </ul>
    </div>
    `;
    divContenido.innerHTML = contenidoSobreMi;
})

btnExperiencia.addEventListener('click', ()=> {
    const contenidoSobreMi = `
    <div id="contenido" class="animate__animated animate__fadeIn">
        <h1 class="mb-4 text-secondary"><ins>Experiencia</ins></h1>
        <ul>
            <li>
                <h2>Pasantia Empresa 1</h2>
                <h5 class="text-secondary">Junio 2015 - Julio 2017</h5>

                <div class="div-tareas">
                    <h3>Tareas realizadas:</h3>
                    <ul>
                        <li>Tarea 1</li>
                        <li>Tarea 2</li>
                        <li>Tarea 3</li>
                    </ul>
                </div>
            </li>
            <li>
                <h2>Trabajo Empresa 2</h2>
                <h5 class="text-secondary">Noviembre 2017 - Diciembre 2019</h5>

                <div class="div-tareas">
                <h3>Tareas realizadas:</h3>
                <ul>
                    <li>Tarea 1</li>
                    <li>Tarea 2</li>
                    <li>Tarea 3</li>
                </ul>
            </div>
            </li>
            <li>
                <h2>Trabajo Empresa 3</h2>
                <h5><mark>Diciembre 2019 - Actualidad</mark></h5>

                <div class="div-tareas">
                <h3>Tareas realizadas:</h3>
                <ul>
                    <li>Tarea 1</li>
                    <li>Tarea 2</li>
                    <li>Tarea 3</li>
                </ul>
            </div>
            </li>
        </ul>
    </div>
    `;
    divContenido.innerHTML = contenidoSobreMi;
})

btnHabilidades.addEventListener('click', ()=> {
    const contenidoSobreMi = `
    <div 
        id="contenido" 
        class="animate__animated animate__fadeIn"
    >
        <div class="row" id="habilidades">
            <h1 class="mb-4 text-secondary"><ins>Habilidades</ins></h1>
            <p>
                <label for="file" class="text-primary">Trabajo en equipo:</label>
                <progress id="file" max="100" value="70"></progress>
            </p>
            <p>
                <label for="file" class="text-primary">Oratoria:</label>
                <progress id="file" max="100" value="80"></progress>
            </p>
            <p>
                <label for="file" class="text-primary">Redacción:</label>
                <progress id="file" max="100" value="40"></progress>
            </p>
            <p>
                <label for="file" class="text-primary">Redes Informaticas:</label>
                <progress id="file" max="100" value="92"></progress>
            </p>
            <p>
                <label for="file" class="text-primary">Programación:</label>
                <progress id="file" max="100" value="60"></progress>
            </p>
            <p>
                <label for="file" class="text-primary">Google Calendar:</label>
                <progress id="file" max="100" value="65"></progress>
            </p>
        
        </div>
    </div>
    `;
    divContenido.innerHTML = contenidoSobreMi;
})