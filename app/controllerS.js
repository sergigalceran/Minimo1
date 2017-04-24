var Asignatura = require('./modelo/asignatura');
var Persona = require('./modelo/alumno');

exports.getSubjects = function (req, res){
	Asignatura.find(
		function(err, asignatura) {
			if (err)
			res.send(err)
			res.json(asignatura); // devuelve todas las asignaturas en JSON
				}
			);
}
exports.setSubject = function(req, res) {

		// Creo el objeto Subject
		Asignatura.create(
			{nombre : req.body.nombre, alumnos: req.body.alumnos, fecha: req.body.fecha},
			function(err, asignatura) {
				if (err)
					res.send(err);

				// Obtiene y devuelve todas las asignaturas tras crear una de ellas
				Asignatura.find(function(err, asignatura) {
				 	if (err)
				 		res.send(err)
				 	res.json(asignatura);
				});
			});

	}
	exports.removeSubject = function(req, res) {
    Asignatura.remove({_id : req.params.subject_id}, function(err, subject) {
        if (err)
            res.send(err);
        // Obtine y devuelve todas las asignaturas tras borrar una de ellas
        Asignatura.find(function(err, subject) {
            if (err)
                res.send(err)
            res.json(subject);
        });
    });
}

	exports.updateSubject = function(req, res){
		Persona.find({_id : req.params.alumno_id},
		function(err, persona) {
			if (persona!= false)
			res.send("El alumno no existe")
			else
	Asignatura.update( {_id : req.params.subject_id},
					{$set:{nombre : req.body.nombre, alumnos: req.body.alumnos}},
					function(err, subject) {
						if (err)
							res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				Asignatura.find(function(err, subject) {
				 	if (err)
				 		res.send(err)
				 	res.json(subject);
				});
			});
		});
	} 
	