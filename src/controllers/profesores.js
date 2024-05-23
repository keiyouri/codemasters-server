const profesores = [
    { nombre: 'Profesor 1' },
    { nombre: 'Profesor 2' },
    { nombre: 'Profesor 3' },
];

exports.getProfesores = (req, res) => {
    res.json(profesores);
};
