var Persona = require('./modelo/alumno');

// Obtiene todos los objetos Alumno de la base de datos
exports.getAlumno2 = function (req, res){
	Persona.find({nombre : req.body.nombre},
		function(err, persona) {
			if (err)
			res.send(err)
			res.json(persona); // devuelve todas las Personas en JSON
				}
			);
}
exports.getAlumno3 = function (req, res){
	Persona.find({estudios : req.body.estudios},
		function(err, persona) {
			if (err)
			res.send(err)
			res.json(persona); // devuelve todas las Personas en JSON
				}
			);
}
exports.getAlumno = function (req, res){
	Persona.find(
		function(err, persona) {
			if (err)
			res.send(err)
			res.json(persona); // devuelve todas las Personas en JSON
				}
			);
}

exports.setAlumno = function(req, res) {

		// Creo el objeto Alumno
		Persona.create(
			{nombre : req.body.nombre,	direccion: req.body.direccion, telefono: {fijo: req.body.telefono.fijo, movil: req.body.telefono.movil}, estudios: req.body.estudios},
			function(err, alumno) {
				if (err)
					res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, alumno) {
				 	if (err)
				 		res.send(err)
				 	res.json(alumno);
				});
			});

	}

	exports.updateAlumno = function(req, res){
	Persona.update( {_id : req.params.alumno_id},
					{$set:{nombre : req.body.nombre, direccion: req.body.direccion, telefono: {fijo: req.body.telefono.fijo, movil: req.body.telefono.movil}, estudios: req.body.estudios}},					
					function(err, alumno) {
						if (err)
							res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, alumno) {
				 	if (err)
				 		res.send(err)
				 	res.json(alumno);
				});
			});
	}
	exports.updateAlumno2 = function(req, res){
	Persona.update( {_id : req.params.alumno_id},
					{$push:{asignaturas:req.body.asignatura}},					
					function(err, alumno) {
						if (err)
							res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, alumno) {
				 	if (err)
				 		res.send(err)
				 	res.json(alumno);
				});
			});
	}

	exports.removeAlumno = function(req, res) {
	Persona.remove({_id : req.params.alumno_id}, function(err, alumno) {
		if (err)
			res.send(err);

			// Obtine y devuelve todas los alumnos tras borrar uno
			Persona.find(function(err, alumno) {
				if (err)
					res.send(err)
				res.json(alumno);
			});
		});
}

