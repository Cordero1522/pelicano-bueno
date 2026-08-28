const DATE_CONFIG = {
    weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    location: 'Cd. del Carmen'
};

function formatDate(date: Date, location: string = DATE_CONFIG.location): string {
    const weekday = DATE_CONFIG.weekdays[date.getDay()];
    const day = date.getDate();
    const month = DATE_CONFIG.months[date.getMonth()];
    const year = date.getFullYear();
    return `${location} | ${weekday}, ${day} de ${month} de ${year}`;
}

function updateCurrentDate(): void {
    const fechaElement = document.getElementById('fecha-hoy');
    if (!fechaElement) return;
    fechaElement.textContent = formatDate(new Date());
}

document.addEventListener('DOMContentLoaded', updateCurrentDate);