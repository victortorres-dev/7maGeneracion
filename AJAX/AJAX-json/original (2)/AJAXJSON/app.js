const button1 = document.getElementById('boton1')
const button2 = document.getElementById('boton2')

const jsonRequestPerson = () => {
    let xhttpr = new XMLHttpRequest()
    xhttpr.open('GET', 'empleado.json', true)

    xhttpr.onload = function () {
        if(this.status === 200){
            const persona = JSON.parse(this.responseText)
            const templatePersona =`
                <ul>
                    <li>${persona.id}</li>
                    <li>${persona.nombre}</li>
                    <li>${persona.empresa}</li>
                    <li>${persona.trabajo}</li>
                </ul>
            `
            document.getElementById('empleado').innerHTML = templatePersona
        }
    }

    xhttpr.send()
}

const jsonRequestPersons = () => {
    let xhttpr = new XMLHttpRequest()

    xhttpr.open('GET', 'empleados.json', true)
    xhttpr.onload = function() {
        if (this.status === 200) {
            const persons = JSON.parse(this.responseText)
            console.log(persons)

            let templateByPersona = ""
            persons.forEach(persona => {
                templateByPersona +=`
                <ul>
                    <li>${persona.id}</li>
                    <li>${persona.nombre}</li>
                    <li>${persona.empresa}</li>
                    <li>${persona.trabajo}</li>
                </ul>
            `
            });
            document.getElementById('empleados').innerHTML = templateByPersona          
        }
    }
    xhttpr.send()
}


button1.addEventListener('click', jsonRequestPerson)
button2.addEventListener('click', jsonRequestPersons)


