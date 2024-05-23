const alumnos = [
    { nombre: 'Paco Gonzalez' },
    { nombre: 'Antonia Gutierrez' },
    { nombre: 'Carlos Perez' },
];

exports.getAlumnos = (req, res) => {
    res.json(alumnos);
};
