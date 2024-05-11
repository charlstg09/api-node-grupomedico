CREATE TABLE admin (
    id serial PRIMARY KEY,
    usuario varchar(90) NOT NULL,
    contra varchar(90) NOT NULL,
    activo boolean NOT NULL,
    nombre varchar(90),
    numero varchar(10)
);

CREATE TABLE usuarios (
    idUsuario serial PRIMARY KEY,
    nombre varchar(90) NOT NULL,
    apellido varchar(90) NOT NULL,
    correo varchar(90) NOT NULL,
    numero int NOT NULL,
    estatura int NOT NULL,
    peso bigint NOT NULL,
    alergias varchar(300),
    tipoSangre varchar(40)
);

CREATE TABLE medicos (
    idMedico serial PRIMARY KEY,
    nombre varchar(90) NOT NULL,
    apellido varchar(90) NOT NULL,
    correo varchar(90) NOT NULL,
    numero bigint NOT NULL,
    cedula bigint NOT NULL,
    especialidad varchar(90) NOT NULL
);

CREATE TABLE consultas (
    idConsulta serial PRIMARY KEY,
    descripcion varchar(255),
    tratamiento varchar(255),
    fecha date NOT NULL,
    hora time NOT NULL,
    idUsuario int REFERENCES usuarios(idUsuario),
    idMedico int REFERENCES medicos(idMedico)
);

CREATE TABLE historialMedico (
    idHistorialMedico serial PRIMARY KEY,
    idConsulta int REFERENCES consultas(idConsulta),
    idMedico int REFERENCES medicos(idMedico),
    idUsuario int REFERENCES usuarios(idUsuario)
);

CREATE TABLE citasMedicas (
    idCita serial PRIMARY KEY,
    idUsuario int REFERENCES usuarios(idUsuario),
    idMedico int REFERENCES medicos(idMedico),
    fecha date NOT NULL,
    hora time NOT NULL
);