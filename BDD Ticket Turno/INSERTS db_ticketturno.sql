--
-- Inserts pata tabla nivel
--
INSERT INTO `nivel` (`id_nivel`, `nivel`, `createdAt`, `updatedAt`) VALUES
(1, 'Kinder', '2023-10-24 06:48:01', '2023-10-24 06:48:01'),
(2, 'Primaria', '2023-10-24 06:58:21', '2023-10-24 06:58:21'),
(3, 'Secundaria', '2023-10-24 06:58:39', '2023-10-24 06:58:39'),
(4, 'Bachillerato', '2023-10-24 06:58:39', '2023-10-24 06:58:39'),
(5, 'Licenciatura', '2023-10-24 06:59:15', '2023-10-24 06:59:15'),
(6, 'Posgrado', '2023-10-24 06:59:15', '2023-10-24 06:59:15');

--
-- Inserts pata tabla asunto
--
INSERT INTO `asunto` (`id_asunto`, `asunto`, `createdAt`, `updatedAt`) VALUES
(1, 'Inscripcion', '2023-10-24 06:48:12', '2023-10-24 06:48:12'),
(2, 'Reinscripcion', '2023-10-24 07:03:19', '2023-10-24 07:03:19'),
(3, 'Cambio de escuela', '2023-10-24 07:03:19', '2023-10-24 07:03:19'),
(4, 'Cambio de carrera', '2023-10-24 07:03:47', '2023-10-24 07:03:47'),
(5, 'Baja temporal', '2023-10-24 07:03:47', '2023-10-24 07:03:47');

--
-- Inserts pata tabla municipio
--
INSERT INTO `municipio` (`id_municipio`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'Abasolo', '2023-10-24 06:47:53', '2023-10-24 06:47:53'),
(2, 'Acuña', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(3, 'Allende', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(4, 'Arteaga', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(5, 'Candela', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(6, 'Castaños', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(7, 'Cuatro Cienegas', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(8, 'Escobedo', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(9, 'Francisco I. Madero', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(10, 'Frontera', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(11, 'General Cepeda', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(12, 'Guerrero', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(13, 'Hidalgo', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(14, 'Jimenez', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(15, 'Juarez', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(16, 'Lamadrid', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(17, 'Matamoros', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(18, 'Monclova', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(19, 'Morelos', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(20, 'Muzquiz', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(21, 'Nadadores', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(22, 'Nava', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(23, 'Ocampo', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(24, 'Parras', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(25, 'Piedras Negras', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(26, 'Progreso', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(27, 'Ramos Arizpe', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(28, 'Sabinas', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(29, 'Sacramento', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(30, 'Saltillo', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(31, 'San Buenaventura', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(32, 'San Juan de Sabinas', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(33, 'San Pedro', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(34, 'Sierra Mojada', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(35, 'Torreon', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(36, 'Viesca', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(37, 'Villa Union', '2023-10-24 07:08:31', '2023-10-24 07:08:31'),
(38, 'Zaragoza', '2023-10-24 07:08:31', '2023-10-24 07:08:31');

--
-- Inserts pata tabla titular
--
INSERT INTO `titular` (`id_titular`, `nombreTitular`, `curp`, `nombre`, `paterno`, `materno`, `telefono`, `celular`, `correo`, `createdAt`, `updatedAt`) VALUES
(1, 'David Perez Tinoco', 'MOHA020309HCLRRLA6', 'Alejandro', 'Moreno', 'Hernández', '8445890208', '8445890208', 'amorenoh02@gmail.com', '2023-10-24 06:49:02', '2023-10-24 06:49:02'),
(2, 'Cristian Samuel Davila Gomez', 'AAMM230931MMCGNLA6', 'Melissa', 'Aguillones', 'Mendoza', '8337189090', '8337189090', 'samy@uadec.edu.mx', '2023-10-24 06:50:29', '2023-10-24 06:50:29'),
(4, 'Beatriz Moreno Lopez', 'HELD231014HCLRPNA1', 'Daniel', 'Hernandez', 'Lopez', '8441234567', '8441234567', 'daniel@uadec.edu.mx', '2023-10-24 17:20:29', '2023-10-24 17:20:29'),
(6, 'Juan Abimael Camacho Canizales', 'HELD231014HCLRPNA1', 'Daniel', 'Hernandez', 'Lopez', '8441234567', '8441234567', 'daniel@uadec.edu.mx', '2023-10-24 17:22:50', '2023-10-25 09:03:51'),
(10, 'Sergio Ivan Francisco Félix', 'GECA231024HCLVSRA1', 'Arturo', 'Geovanny', 'Cisneros', '8441234567', '8441234567', 'geo@gmail.com', '2023-10-25 04:36:11', '2023-10-25 04:36:11'),
(11, 'Arturo Geovanny Cisneros', 'FAFS231009HCLRLRA1', 'Sergio', 'Francisco', 'Felix', '8441234567', '8441234567', 'checo@uadec.edu.mx', '2023-10-25 04:40:10', '2023-10-25 04:40:10'),
(12, 'Cristian Samuel Davila Gomez', 'PACJ231025HCLLRSA1', 'Jesus', 'Palacios', 'Carrizales', '8441234567', '8441234567', 'jesus@uadec.edu.mx', '2023-10-25 06:10:45', '2023-10-25 06:10:45'),
(13, 'Cristian Samuel Davila Gomez', 'PACJ231025HCLLRSA1', 'Jesus', 'Palacios', 'Carrizales', '8441234567', '8441234567', 'jesus@uadec.edu.mx', '2023-10-25 06:29:42', '2023-10-25 06:29:42'),
(14, 'Cristian Samuel Davila Gomez', 'PACJ231025HCLLRSA1', 'Jesus', 'Palacios', 'Carrizales', '8441234567', '8441234567', 'jesus@uadec.edu.mx', '2023-10-25 06:31:05', '2023-10-25 06:31:05'),
(15, 'Cristian Samuel Davila Gomez', 'PACJ231025HCLLRSA1', 'Jesus', 'Palacios', 'Carrizales', '8441234567', '8442340908', 'ivan@gmail.com', '2023-10-25 06:34:17', '2023-10-25 17:56:24'),
(16, 'Juan Carlos Medina', 'MOHA020309HCLRRLA6', 'Alejandro', 'Moreno', 'Hernandez', '8441234567', '8441234567', 'alejandro@uadec.edu.mx', '2023-10-25 17:01:43', '2023-10-25 17:01:43'),
(17, 'David Perez Tinoco', 'MERJ231025HCLDDNA7', 'Juan', 'Medina', 'Rodriguez', '8441234567', '8441234567', 'j.medina@uadec.edu.mx', '2023-10-25 17:12:34', '2023-10-25 20:27:28'),
(18, 'Carlos Reyes Flores', 'HEFL231016MCLRNPA2', 'Lupita', 'Hernandez', 'Fuentes', '8441234567', '8441234567', 'lupita@uadec.edu.mx', '2023-10-25 17:33:08', '2023-10-25 17:33:08'),
(19, 'David Perez Tinoco', 'LOFM231010MCHPLRA8', 'Maria', 'Lopez', 'Flores', '8441234567', '8441234567', 'maria@gmail.com', '2023-10-25 17:39:05', '2023-10-25 17:39:05'),
(20, 'Juan Carlos Medina', 'MOHA020309HCLRRLA6', 'Alejandro', 'Moreno', 'Hernandez', '8441234567', '8441234567', 'a@uadec.edu.mx', '2023-10-25 17:57:11', '2023-10-25 17:57:11');

--
-- Inserts pata tabla login
--
INSERT INTO `login` (`user`, `pass`, `createdAt`, `updatedAt`) VALUES
('sysadmin', 'root', '2023-10-25 19:25:46', '2023-10-25 19:25:46');

--
-- Inserts pata tabla turno
--
INSERT INTO `turno` (`id_turno`, `titular_id_titular`, `nivel_id_nivel`, `municipio_id_municipio`, `asunto_id_asunto`, `estado`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 1, 1, 'resuelto', '2023-10-24 06:49:07', '2023-10-25 05:02:54'),
(7, 6, 1, 35, 5, 'resuelto', '2023-10-24 17:22:50', '2023-10-25 09:03:51'),
(8, 18, 2, 4, 3, 'resuelto', '2023-10-25 17:33:09', '2023-10-25 17:34:26'),
(11, 10, 1, 30, 4, 'resuelto', '2023-10-25 04:36:11', '2023-10-25 05:57:05'),
(12, 11, 4, 30, 2, 'resuelto', '2023-10-25 04:40:10', '2023-10-25 05:56:34'),
(16, 15, 3, 18, 4, 'pendiente', '2023-10-25 06:34:17', '2023-10-25 17:56:24'),
(18, 17, 5, 27, 2, 'resuelto', '2023-10-25 17:12:34', '2023-10-25 20:41:05'),
(19, 20, 2, 16, 3, 'resuelto', '2023-10-25 17:57:11', '2023-10-25 17:57:18');





