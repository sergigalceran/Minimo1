var persona = require('./modelo/alumno');
var persona = require('./modelo/asignatura');
var Controller = require ('./controllerA');
var Controller2 = require ('./controllerS');


module.exports = function(app) {

// Alumnos -------------------------------------------------------------
	// devolver todos los Alumnos
	app.get('/api/alumnos', Controller.getAlumno);
	app.post('/api/buscar', Controller.getAlumno2);
	app.post('/api/buscar2', Controller.getAlumno3);
	// Crear un nuevo Alumno
	app.post('/api/alumno', Controller.setAlumno);
	// Modificar los datos de un Alumno
	app.put('/api/alumno/:alumno_id', Controller.updateAlumno);
	app.put('/api/alumno/subject/:alumno_id', Controller.updateAlumno2);
	// Borrar un Alumno
	app.delete('/api/alumno/:alumno_id', Controller.removeAlumno);
	// Asignaturas -------------------------------------------------------------
	app.get('/api/subjects', Controller2.getSubjects);
	app.post('/api/subject', Controller2.setSubject);
	app.put('/api/subject/:subject_id', Controller2.updateSubject);
	app.delete('/api/subject/:subject_id', Controller2.removeSubject);
	// application -------------------------------------------------------------
	/*app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});*/
};
