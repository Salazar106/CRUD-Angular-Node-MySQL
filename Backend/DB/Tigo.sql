-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 31-12-2022 a las 06:37:16
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Tigo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencias`
--

CREATE TABLE `incidencias` (
  `id` int(11) NOT NULL,
  `cedula` int(11) NOT NULL,
  `descripcion` text NOT NULL,
  `asesor` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1,
  `Fecha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `incidencias`
--

INSERT INTO `incidencias` (`id`, `cedula`, `descripcion`, `asesor`, `estado`, `Fecha`) VALUES
(1, 1233212, 'editar desde AG', 2, 1, '12/30/22, 1:55 PM'),
(2, 123456, 'segunda incidencia', 1, 0, '12/30/22, 1:55 PM'),
(3, 4433, 'tercera incidencia', 2, 1, '12/30/22, 1:55 PM'),
(4, 44040404, 'cuarta incidencia', 1, 0, '12/30/22, 1:55 PM'),
(5, 103372, 'quinta incidencia', 4, 0, '12/30/22, 1:55 PM'),
(6, 54345, 'sexta incidencia', 3, 0, '12/30/22, 1:55 PM'),
(10, 2147483647, 'prueba con Daniel', 3, 0, '12/30/22, 1:55 PM'),
(11, 987655, 'prueba desde postman', 1, 0, '12/30/22, 1:55 PM'),
(12, 10376221, 'Prueba desde Angular', 2, 1, '2022/11/30, 15:40'),
(13, 30093211, 'prueba de sweet alert', 1, 1, '2022/11/30, 16:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`) VALUES
(1, 'Julian'),
(2, 'Andres'),
(3, 'Jose');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `incidencias`
--
ALTER TABLE `incidencias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `incidencias`
--
ALTER TABLE `incidencias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
