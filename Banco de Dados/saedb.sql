-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 08-Dez-2016 às 00:22
-- Versão do servidor: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `saedb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can add permission', 2, 'add_permission'),
(5, 'Can change permission', 2, 'change_permission'),
(6, 'Can delete permission', 2, 'delete_permission'),
(7, 'Can add group', 3, 'add_group'),
(8, 'Can change group', 3, 'change_group'),
(9, 'Can delete group', 3, 'delete_group'),
(10, 'Can add user', 4, 'add_user'),
(11, 'Can change user', 4, 'change_user'),
(12, 'Can delete user', 4, 'delete_user'),
(13, 'Can add content type', 5, 'add_contenttype'),
(14, 'Can change content type', 5, 'change_contenttype'),
(15, 'Can delete content type', 5, 'delete_contenttype'),
(16, 'Can add session', 6, 'add_session'),
(17, 'Can change session', 6, 'change_session'),
(18, 'Can delete session', 6, 'delete_session'),
(19, 'Can add site', 7, 'add_site'),
(20, 'Can change site', 7, 'change_site'),
(21, 'Can delete site', 7, 'delete_site'),
(22, 'Can add antecedente', 8, 'add_antecedente'),
(23, 'Can change antecedente', 8, 'change_antecedente'),
(24, 'Can delete antecedente', 8, 'delete_antecedente'),
(25, 'Can add paciente', 9, 'add_paciente'),
(26, 'Can change paciente', 9, 'change_paciente'),
(27, 'Can delete paciente', 9, 'delete_paciente'),
(28, 'Can add escala braden', 10, 'add_escalabraden'),
(29, 'Can change escala braden', 10, 'change_escalabraden'),
(30, 'Can delete escala braden', 10, 'delete_escalabraden'),
(31, 'Can add caracteristica', 11, 'add_caracteristica'),
(32, 'Can change caracteristica', 11, 'change_caracteristica'),
(33, 'Can delete caracteristica', 11, 'delete_caracteristica'),
(34, 'Can add caracteristicas definidora', 12, 'add_caracteristicasdefinidora'),
(35, 'Can change caracteristicas definidora', 12, 'change_caracteristicasdefinidora'),
(36, 'Can delete caracteristicas definidora', 12, 'delete_caracteristicasdefinidora'),
(37, 'Can add intervencao', 13, 'add_intervencao'),
(38, 'Can change intervencao', 13, 'change_intervencao'),
(39, 'Can delete intervencao', 13, 'delete_intervencao'),
(40, 'Can add diagnostico', 14, 'add_diagnostico'),
(41, 'Can change diagnostico', 14, 'change_diagnostico'),
(42, 'Can delete diagnostico', 14, 'delete_diagnostico'),
(43, 'Can add plano de cuidados', 15, 'add_planodecuidados'),
(44, 'Can change plano de cuidados', 15, 'change_planodecuidados'),
(45, 'Can delete plano de cuidados', 15, 'delete_planodecuidados');

-- --------------------------------------------------------

--
-- Estrutura da tabela `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(75) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$15000$NmboHwqJhDN2$dnWLyQNWL6WtgtYY2uYiU6GhMoc5Y4ofIs2S3CWb0Us=', '2016-12-06 00:52:08', 1, 'adminSae', '', '', '', 1, 1, '2016-11-17 18:06:16'),
(2, '1', '2016-12-05 19:33:37', 1, '1', 'cley', 'cardoso', 'ds@gmail.com', 1, 1, '2016-11-17 18:06:16');

-- --------------------------------------------------------

--
-- Estrutura da tabela `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2016-11-17 23:24:05', '1', 'João da Silva', 1, '', 9, 1),
(2, '2016-11-17 23:34:22', '1', 'Alimenta-se regularmente', 1, '', 11, 1),
(3, '2016-11-17 23:34:42', '2', 'Armazenagem de alimentos com segurança', 1, '', 11, 1),
(4, '2016-11-17 23:35:36', '3', 'Armazenagem de líquidos com segurança', 1, '', 11, 1),
(5, '2016-11-17 23:35:48', '4', 'Atitude em relação à bebida coerente com as metas de saúde', 1, '', 11, 1),
(6, '2016-11-17 23:35:58', '5', 'Atitude em relação à comida coerente com as metas de saúde', 1, '', 11, 1),
(7, '2016-11-17 23:36:09', '6', 'Consome alimentos adequados', 1, '', 11, 1),
(8, '2016-11-17 23:36:20', '7', 'Consome líquidos adequados', 1, '', 11, 1),
(9, '2016-11-17 23:36:29', '8', 'Expressa conhecimento sobre escolhas alimentares saudáveis', 1, '', 11, 1),
(10, '2016-11-17 23:36:37', '9', 'Expressa conhecimento sobre escolhas saudáveis de líquidos', 1, '', 11, 1),
(11, '2016-11-17 23:36:45', '10', 'Expressa desejo de melhorar a nutrição', 1, '', 11, 1),
(12, '2016-11-17 23:36:53', '11', 'Prepara os alimentos com segurança', 1, '', 11, 1),
(13, '2016-11-17 23:37:01', '12', 'Prepara os líquidos com segurança', 1, '', 11, 1),
(14, '2016-11-17 23:37:13', '13', 'Segue um padrão apropriado de alimentação (p. ex., pirâmide de alimentos ou normas da American Diabetic Association)Segue um padrão apropriado de alimentação (p. ex., pirâmide de alimentos ou normas d', 1, '', 11, 1),
(15, '2016-11-17 23:45:08', '14', 'Esquecimento de efetuar uma ação em horário planejado', 1, '', 11, 1),
(16, '2016-11-17 23:45:26', '1', 'Alimenta-se regularmente', 3, '', 11, 1),
(17, '2016-11-17 23:45:26', '2', 'Armazenagem de alimentos com segurança', 3, '', 11, 1),
(18, '2016-11-17 23:45:27', '3', 'Armazenagem de líquidos com segurança', 3, '', 11, 1),
(19, '2016-11-17 23:45:27', '4', 'Atitude em relação à bebida coerente com as metas de saúde', 3, '', 11, 1),
(20, '2016-11-17 23:45:27', '5', 'Atitude em relação à comida coerente com as metas de saúde', 3, '', 11, 1),
(21, '2016-11-17 23:45:27', '6', 'Consome alimentos adequados', 3, '', 11, 1),
(22, '2016-11-17 23:45:27', '7', 'Consome líquidos adequados', 3, '', 11, 1),
(23, '2016-11-17 23:45:27', '8', 'Expressa conhecimento sobre escolhas alimentares saudáveis', 3, '', 11, 1),
(24, '2016-11-17 23:45:27', '9', 'Expressa conhecimento sobre escolhas saudáveis de líquidos', 3, '', 11, 1),
(25, '2016-11-17 23:45:27', '10', 'Expressa desejo de melhorar a nutrição', 3, '', 11, 1),
(26, '2016-11-17 23:45:27', '11', 'Prepara os alimentos com segurança', 3, '', 11, 1),
(27, '2016-11-17 23:45:28', '12', 'Prepara os líquidos com segurança', 3, '', 11, 1),
(28, '2016-11-17 23:45:28', '13', 'Segue um padrão apropriado de alimentação (p. ex., pirâmide de alimentos ou normas da American Diabetic Association)Segue um padrão apropriado de alimentação (p. ex., pirâmide de alimentos ou normas d', 3, '', 11, 1),
(29, '2016-11-17 23:45:35', '15', 'Experiências de esquecimento', 1, '', 11, 1),
(30, '2016-11-17 23:45:42', '16', 'Incapacidade de aprender novas habilidades', 1, '', 11, 1),
(31, '2016-11-17 23:45:50', '17', 'Incapacidade de aprender novas informações', 1, '', 11, 1),
(32, '2016-11-17 23:45:58', '18', 'Incapacidade de determinar se uma ação foi efetuada', 1, '', 11, 1),
(33, '2016-11-17 23:46:07', '19', 'Incapacidade de executar habilidade previamente aprendida', 1, '', 11, 1),
(34, '2016-11-17 23:46:14', '20', 'Incapacidade de recordar eventos', 1, '', 11, 1),
(35, '2016-11-17 23:46:21', '21', 'Incapacidade de recordar informações reais', 1, '', 11, 1),
(36, '2016-11-17 23:46:29', '22', 'Incapacidade de reter novas habilidades', 1, '', 11, 1),
(37, '2016-11-17 23:46:37', '23', 'Incapacidade de reter novas informações', 1, '', 11, 1),
(38, '2016-11-17 23:46:59', '1', 'Redução da ansiedade', 1, '', 13, 1),
(39, '2016-11-17 23:47:10', '2', 'Controle da demência', 1, '', 13, 1),
(40, '2016-11-17 23:47:21', '3', 'Controle do ambiente', 1, '', 13, 1),
(41, '2016-11-17 23:47:38', '4', 'Controle de líquidos/eletrólitos', 1, '', 13, 1),
(42, '2016-11-17 23:47:50', '5', 'Monitorização de líquidos', 1, '', 13, 1),
(43, '2016-11-17 23:47:59', '6', 'Treinamento da memória', 1, '', 13, 1),
(44, '2016-11-17 23:48:08', '7', 'Cuidados cardíacos', 1, '', 13, 1),
(45, '2016-11-17 23:48:22', '8', 'Monitorização de eletrólitos', 1, '', 13, 1),
(46, '2016-11-17 23:48:35', '9', 'Controle do ambiente: segurança', 1, '', 13, 1),
(47, '2016-11-17 23:48:48', '10', 'Controle de medicamentos', 1, '', 13, 1),
(48, '2016-11-17 23:49:04', '11', 'Controle de líquidos', 1, '', 13, 1),
(49, '2016-11-17 23:49:24', '12', 'Monitorização neurológica', 1, '', 13, 1),
(50, '2016-11-17 23:49:51', '13', 'Oxigenoterapia', 1, '', 13, 1),
(51, '2016-11-17 23:50:00', '14', 'Supervisão', 1, '', 13, 1),
(52, '2016-11-17 23:50:12', '15', 'Orientação para realidade', 1, '', 13, 1),
(53, '2016-11-17 23:50:24', '16', 'Supervisão: segurança', 1, '', 13, 1),
(54, '2016-11-17 23:52:12', '1', 'Memória prejudicada', 1, '', 14, 1),
(55, '2016-11-17 23:54:18', '1', 'caracteristicasDefinidora object', 1, '', 12, 1),
(56, '2016-11-17 23:56:58', '2', 'caracteristicasDefinidora object', 1, '', 12, 1),
(57, '2016-11-17 23:57:36', '3', 'caracteristicasDefinidora object', 1, '', 12, 1),
(58, '2016-11-17 23:59:25', '4', 'caracteristicasDefinidora object', 1, '', 12, 1),
(59, '2016-11-18 00:00:58', '5', 'caracteristicasDefinidora object', 1, '', 12, 1),
(60, '2016-11-18 01:14:46', '6', 'caracteristicasDefinidora object', 1, '', 12, 1),
(61, '2016-11-18 01:15:32', '7', 'caracteristicasDefinidora object', 1, '', 12, 1),
(62, '2016-11-18 01:16:19', '8', 'caracteristicasDefinidora object', 1, '', 12, 1),
(63, '2016-11-18 01:17:19', '9', 'caracteristicasDefinidora object', 1, '', 12, 1),
(64, '2016-11-18 01:20:33', '10', 'caracteristicasDefinidora object', 1, '', 12, 1),
(65, '2016-11-18 01:20:52', '11', 'caracteristicasDefinidora object', 1, '', 12, 1),
(66, '2016-11-18 01:23:03', '12', 'caracteristicasDefinidora object', 1, '', 12, 1),
(67, '2016-11-18 01:23:34', '13', 'caracteristicasDefinidora object', 1, '', 12, 1),
(68, '2016-11-18 01:24:22', '14', 'caracteristicasDefinidora object', 1, '', 12, 1),
(69, '2016-11-18 01:25:55', '15', 'caracteristicasDefinidora object', 1, '', 12, 1),
(70, '2016-11-18 01:27:55', '16', 'caracteristicasDefinidora object', 1, '', 12, 1),
(71, '2016-11-18 01:28:23', '17', 'caracteristicasDefinidora object', 1, '', 12, 1),
(72, '2016-11-18 01:32:27', '18', 'caracteristicasDefinidora object', 1, '', 12, 1),
(73, '2016-11-18 01:33:04', '19', 'caracteristicasDefinidora object', 1, '', 12, 1),
(74, '2016-11-18 01:33:35', '20', 'caracteristicasDefinidora object', 1, '', 12, 1),
(75, '2016-11-18 01:34:03', '21', 'caracteristicasDefinidora object', 1, '', 12, 1),
(76, '2016-11-18 01:34:51', '22', 'caracteristicasDefinidora object', 1, '', 12, 1),
(77, '2016-11-18 01:35:38', '23', 'caracteristicasDefinidora object', 1, '', 12, 1),
(78, '2016-11-18 01:35:51', '24', 'caracteristicasDefinidora object', 1, '', 12, 1),
(79, '2016-11-18 01:36:14', '25', 'caracteristicasDefinidora object', 1, '', 12, 1),
(80, '2016-11-18 01:37:17', '26', 'caracteristicasDefinidora object', 1, '', 12, 1),
(81, '2016-11-18 01:37:41', '27', 'caracteristicasDefinidora object', 1, '', 12, 1),
(82, '2016-11-18 01:38:00', '28', 'caracteristicasDefinidora object', 1, '', 12, 1),
(83, '2016-11-18 01:38:16', '29', 'caracteristicasDefinidora object', 1, '', 12, 1),
(84, '2016-11-18 01:38:46', '30', 'caracteristicasDefinidora object', 1, '', 12, 1),
(85, '2016-11-18 01:40:21', '31', 'caracteristicasDefinidora object', 1, '', 12, 1),
(86, '2016-11-18 01:40:48', '32', 'caracteristicasDefinidora object', 1, '', 12, 1),
(87, '2016-11-18 01:41:15', '33', 'caracteristicasDefinidora object', 1, '', 12, 1),
(88, '2016-11-18 01:43:46', '34', 'caracteristicasDefinidora object', 1, '', 12, 1),
(89, '2016-11-18 01:46:37', '35', 'caracteristicasDefinidora object', 1, '', 12, 1),
(90, '2016-11-18 01:47:28', '36', 'caracteristicasDefinidora object', 1, '', 12, 1),
(91, '2016-11-18 01:48:08', '37', 'caracteristicasDefinidora object', 1, '', 12, 1),
(92, '2016-11-18 01:48:31', '38', 'caracteristicasDefinidora object', 1, '', 12, 1),
(93, '2016-11-18 01:49:18', '39', 'caracteristicasDefinidora object', 1, '', 12, 1),
(94, '2016-11-18 01:49:32', '40', 'caracteristicasDefinidora object', 1, '', 12, 1),
(95, '2016-11-18 01:49:51', '41', 'caracteristicasDefinidora object', 1, '', 12, 1),
(96, '2016-11-18 01:50:15', '42', 'caracteristicasDefinidora object', 1, '', 12, 1),
(97, '2016-12-06 00:53:53', '4', 'Teste', 1, '', 9, 1),
(98, '2016-12-06 00:54:30', '5', 'Teste', 1, '', 9, 1),
(99, '2016-12-06 00:55:38', '6', 'Teste', 1, '', 9, 1),
(100, '2016-12-06 00:57:34', '6', 'Teste', 3, '', 9, 1),
(101, '2016-12-06 00:57:34', '5', 'Teste', 3, '', 9, 1),
(102, '2016-12-06 00:57:34', '4', 'Teste', 3, '', 9, 1),
(103, '2016-12-06 00:58:39', '7', 'Teste', 1, '', 9, 1),
(104, '2016-12-06 01:02:11', '8', 'Gabriel', 1, '', 9, 1),
(105, '2016-12-06 01:08:29', '8', 'Gabriel', 3, '', 9, 1),
(106, '2016-12-06 01:08:29', '7', 'Teste', 3, '', 9, 1),
(107, '2016-12-06 01:08:38', '9', 'Teste', 1, '', 9, 1),
(108, '2016-12-06 01:12:07', '10', 'Gabriel', 1, '', 9, 1),
(109, '2016-12-06 01:13:51', '11', 'Rafa', 1, '', 9, 1),
(110, '2016-12-06 01:16:51', '12', 'Rafa', 1, '', 9, 1),
(111, '2016-12-06 01:17:28', '13', 'Rafa', 1, '', 9, 1),
(112, '2016-12-06 01:17:46', '13', 'Rafa', 3, '', 9, 1),
(113, '2016-12-06 01:17:46', '12', 'Rafa', 3, '', 9, 1),
(114, '2016-12-06 01:17:46', '11', 'Rafa', 3, '', 9, 1),
(115, '2016-12-06 01:17:46', '10', 'Gabriel', 3, '', 9, 1),
(116, '2016-12-06 01:17:47', '9', 'Teste', 3, '', 9, 1),
(117, '2016-12-06 01:17:55', '14', 'Teste', 1, '', 9, 1),
(118, '2016-12-06 01:18:35', '15', 'Teste', 1, '', 9, 1),
(119, '2016-12-06 01:19:00', '16', 'Teste', 1, '', 9, 1),
(120, '2016-12-06 01:19:54', '17', 'Test2', 1, '', 9, 1),
(121, '2016-12-06 01:21:23', '18', 'Test2', 1, '', 9, 1),
(122, '2016-12-06 01:23:08', '18', 'Test2', 3, '', 9, 1),
(123, '2016-12-06 01:23:08', '17', 'Test2', 3, '', 9, 1),
(124, '2016-12-06 01:23:08', '16', 'Teste', 3, '', 9, 1),
(125, '2016-12-06 01:23:09', '15', 'Teste', 3, '', 9, 1),
(126, '2016-12-06 01:23:09', '14', 'Teste', 3, '', 9, 1),
(127, '2016-12-06 01:23:21', '19', 'Teste', 1, '', 9, 1),
(128, '2016-12-06 01:24:15', '20', 'Paciente teste', 1, '', 9, 1),
(129, '2016-12-06 01:28:16', '21', 'Rafael', 1, '', 9, 1),
(130, '2016-12-06 01:39:22', '21', 'Rafael', 3, '', 9, 1),
(131, '2016-12-06 01:39:22', '20', 'Paciente teste', 3, '', 9, 1),
(132, '2016-12-06 01:39:22', '19', 'Teste', 3, '', 9, 1),
(133, '2016-12-06 01:39:34', '22', 'Rafael', 1, '', 9, 1),
(134, '2016-12-06 01:42:03', '23', 'Gabriel', 1, '', 9, 1),
(135, '2016-12-06 01:42:47', '24', 'Rosa', 1, '', 9, 1),
(136, '2016-12-06 01:43:21', '24', 'Rosa', 3, '', 9, 1),
(137, '2016-12-06 01:43:21', '23', 'Gabriel', 3, '', 9, 1),
(138, '2016-12-06 01:43:21', '22', 'Rafael', 3, '', 9, 1),
(139, '2016-12-06 01:43:30', '25', 'aaa', 1, '', 9, 1),
(140, '2016-12-06 01:43:55', '26', 'aaa', 1, '', 9, 1),
(141, '2016-12-06 01:44:36', '26', 'aaa', 3, '', 9, 1),
(142, '2016-12-06 01:44:36', '25', 'aaa', 3, '', 9, 1),
(143, '2016-12-06 01:44:44', '27', 'Tes', 1, '', 9, 1),
(144, '2016-12-06 01:47:01', '28', 'aaaaaa', 1, '', 9, 1),
(145, '2016-12-06 01:48:26', '29', 'aaaaaa', 1, '', 9, 1),
(146, '2016-12-06 01:48:54', '30', 'aaaaaa', 1, '', 9, 1),
(147, '2016-12-06 01:49:38', '30', 'aaaaaa', 3, '', 9, 1),
(148, '2016-12-06 01:49:38', '29', 'aaaaaa', 3, '', 9, 1),
(149, '2016-12-06 01:49:38', '28', 'aaaaaa', 3, '', 9, 1),
(150, '2016-12-06 01:49:38', '27', 'Tes', 3, '', 9, 1),
(151, '2016-12-06 01:49:54', '31', 'Rafa', 1, '', 9, 1),
(152, '2016-12-06 01:54:23', '32', 'aaaaaaa', 1, '', 9, 1),
(153, '2016-12-06 12:02:01', '33', 'Teste aaa', 1, '', 9, 1),
(154, '2016-12-06 12:25:36', '33', 'Teste aaa', 3, '', 9, 1),
(155, '2016-12-06 12:25:37', '32', 'aaaaaaa', 3, '', 9, 1),
(156, '2016-12-06 12:25:37', '31', 'Rafa', 3, '', 9, 1),
(157, '2016-12-06 12:25:49', '34', 'Rafael', 3, '', 9, 1),
(158, '2016-12-06 12:26:06', '37', 'Rafael', 1, '', 9, 1),
(159, '2016-12-06 12:28:00', '38', 'test', 1, '', 9, 1),
(160, '2016-12-06 12:28:26', '39', 'test', 1, '', 9, 1),
(161, '2016-12-06 12:29:22', '39', 'test', 3, '', 9, 1),
(162, '2016-12-06 12:29:22', '38', 'test', 3, '', 9, 1),
(163, '2016-12-06 12:29:22', '37', 'Rafael', 3, '', 9, 1),
(164, '2016-12-06 12:29:39', '40', 'Rafael', 1, '', 9, 1),
(165, '2016-12-06 12:31:01', '41', 'Rafael', 1, '', 9, 1),
(166, '2016-12-06 12:33:13', '41', 'Rafael', 3, '', 9, 1),
(167, '2016-12-06 12:33:13', '40', 'Rafael', 3, '', 9, 1),
(168, '2016-12-06 12:34:00', '42', 'Rafael', 1, '', 9, 1),
(169, '2016-12-06 12:37:14', '43', 'Gabriel', 1, '', 9, 1),
(170, '2016-12-06 12:38:52', '44', 'Teste', 1, '', 9, 1),
(171, '2016-12-06 12:40:18', '44', 'Teste', 2, 'Nenhum campo modificado.', 9, 1),
(172, '2016-12-06 12:40:27', '45', 'ffff', 1, '', 9, 1),
(173, '2016-12-06 12:41:13', '46', 'ffff', 1, '', 9, 1),
(174, '2016-12-06 13:20:00', '46', 'ffff', 3, '', 9, 1),
(175, '2016-12-06 13:20:01', '45', 'ffff', 3, '', 9, 1),
(176, '2016-12-06 13:20:01', '44', 'Teste', 3, '', 9, 1),
(177, '2016-12-06 13:20:01', '43', 'Gabriel', 3, '', 9, 1),
(178, '2016-12-06 13:20:01', '42', 'Rafael', 3, '', 9, 1),
(179, '2016-12-06 13:20:13', '47', 'Rafael', 1, '', 9, 1),
(180, '2016-12-06 13:22:44', '48', 'Rafael', 1, '', 9, 1),
(181, '2016-12-07 13:48:35', '48', 'Rafael', 3, '', 9, 1),
(182, '2016-12-07 13:48:35', '47', 'Rafael', 3, '', 9, 1),
(183, '2016-12-07 13:48:47', '49', 'Rafael', 1, '', 9, 1),
(184, '2016-12-07 13:50:35', '50', 'Rafael', 1, '', 9, 1),
(185, '2016-12-07 13:53:38', '50', 'Rafael', 2, 'Nenhum campo modificado.', 9, 1),
(186, '2016-12-07 19:10:55', '50', 'Rafael', 3, '', 9, 1),
(187, '2016-12-07 19:10:55', '49', 'Rafael', 3, '', 9, 1),
(188, '2016-12-07 19:11:04', '51', 'Rafael', 1, '', 9, 1),
(189, '2016-12-07 20:09:13', '52', 'Teste', 1, '', 9, 1),
(190, '2016-12-07 20:11:25', '52', 'Teste', 2, 'Nenhum campo modificado.', 9, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `name`, `app_label`, `model`) VALUES
(1, 'log entry', 'admin', 'logentry'),
(2, 'permission', 'auth', 'permission'),
(3, 'group', 'auth', 'group'),
(4, 'user', 'auth', 'user'),
(5, 'content type', 'contenttypes', 'contenttype'),
(6, 'session', 'sessions', 'session'),
(7, 'site', 'sites', 'site'),
(8, 'antecedente', 'SaeApp', 'antecedente'),
(9, 'paciente', 'SaeApp', 'paciente'),
(10, 'escala braden', 'SaeApp', 'escalabraden'),
(11, 'caracteristica', 'SaeApp', 'caracteristica'),
(12, 'caracteristicas definidora', 'SaeApp', 'caracteristicasdefinidora'),
(13, 'intervencao', 'SaeApp', 'intervencao'),
(14, 'diagnostico', 'SaeApp', 'diagnostico'),
(15, 'plano de cuidados', 'SaeApp', 'planodecuidados');

-- --------------------------------------------------------

--
-- Estrutura da tabela `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'SaeApp', '0001_initial', '2016-11-17 18:02:48'),
(2, 'SaeApp', '0002_paciente_internacao_anterior', '2016-11-17 18:02:49'),
(3, 'SaeApp', '0003_auto_20160629_2142', '2016-11-17 18:02:52'),
(4, 'SaeApp', '0004_caracteristica_caracteristicasdefinidoras', '2016-11-17 18:02:57'),
(5, 'SaeApp', '0005_auto_20160629_2210', '2016-11-17 18:03:04'),
(6, 'SaeApp', '0006_auto_20160629_2251', '2016-11-17 18:03:13'),
(7, 'SaeApp', '0007_auto_20160801_2128', '2016-11-17 18:03:19'),
(8, 'SaeApp', '0008_remove_antecedente_outrotitulo', '2016-11-17 18:03:21'),
(9, 'SaeApp', '0009_paciente_alergia', '2016-11-17 18:03:23'),
(10, 'SaeApp', '0010_auto_20160801_2152', '2016-11-17 18:03:23'),
(11, 'SaeApp', '0011_auto_20160801_2153', '2016-11-17 18:03:26'),
(12, 'SaeApp', '0012_auto_20160801_2154', '2016-11-17 18:03:26'),
(13, 'SaeApp', '0013_auto_20160801_2158', '2016-11-17 18:03:28'),
(14, 'SaeApp', '0014_entrevista', '2016-11-17 18:03:30'),
(15, 'SaeApp', '0015_auto_20160815_0944', '2016-11-17 18:03:34'),
(16, 'SaeApp', '0016_auto_20160818_0908', '2016-11-17 18:03:34'),
(17, 'SaeApp', '0017_auto_20160826_1712', '2016-11-17 18:03:35'),
(18, 'SaeApp', '0018_auto_20160828_0909', '2016-11-17 18:03:35'),
(19, 'SaeApp', '0019_auto_20160830_0808', '2016-11-17 18:03:37'),
(20, 'SaeApp', '0020_planodecuidados', '2016-11-17 18:03:39'),
(21, 'SaeApp', '0021_planodecuidados_idpaciente', '2016-11-17 18:03:40'),
(22, 'SaeApp', '0022_auto_20160920_2031', '2016-11-17 18:03:42'),
(23, 'SaeApp', '0023_remove_planodecuidados_idpaciente', '2016-11-17 18:03:43'),
(24, 'SaeApp', '0024_planodecuidados_idpaciente', '2016-11-17 18:03:44'),
(25, 'SaeApp', '0025_planodecuidados_intervencoes', '2016-11-17 18:03:47'),
(26, 'SaeApp', '0026_planodecuidados_data', '2016-11-17 18:03:49'),
(27, 'SaeApp', '0027_auto_20160920_2123', '2016-11-17 18:03:51'),
(28, 'SaeApp', '0028_auto_20160920_2134', '2016-11-17 18:03:52'),
(29, 'SaeApp', '0029_planodecuidados_paciente', '2016-11-17 18:03:56'),
(30, 'SaeApp', '0030_remove_planodecuidados_idpaciente', '2016-11-17 18:03:58'),
(31, 'SaeApp', '0031_auto_20160922_0905', '2016-11-17 18:04:00'),
(32, 'SaeApp', '0032_auto_20160922_0908', '2016-11-17 18:04:02'),
(33, 'SaeApp', '0033_paciente_vacinas', '2016-11-17 18:04:04'),
(34, 'SaeApp', '0034_caracteristica_ocorrencias', '2016-11-17 18:04:05'),
(35, 'SaeApp', '0035_auto_20161001_1913', '2016-11-17 18:04:07'),
(36, 'SaeApp', '0036_auto_20161003_1857', '2016-11-17 18:04:12'),
(37, 'SaeApp', '0037_auto_20161003_1915', '2016-11-17 18:04:16'),
(38, 'SaeApp', '0038_auto_20161007_1232', '2016-11-17 18:04:23'),
(39, 'SaeApp', '0039_auto_20161007_1234', '2016-11-17 18:04:25'),
(40, 'SaeApp', '0040_auto_20161007_1241', '2016-11-17 18:04:32'),
(41, 'contenttypes', '0001_initial', '2016-11-17 18:04:33'),
(42, 'auth', '0001_initial', '2016-11-17 18:04:47'),
(43, 'admin', '0001_initial', '2016-11-17 18:04:52'),
(44, 'sessions', '0001_initial', '2016-11-17 18:04:53'),
(45, 'sites', '0001_initial', '2016-11-17 18:04:53'),
(46, 'SaeApp', '0041_paciente_allergies', '2016-12-06 00:57:22'),
(47, 'SaeApp', '0042_remove_paciente_allergies', '2016-12-06 00:57:25');

-- --------------------------------------------------------

--
-- Estrutura da tabela `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('12tfal67pyhv9i4mi0h1o4qt24ovjhbf', 'NzRiNTRkYmNkMWJmNTQ2MzU3NTdiNmM2YWQ1YTNlOGI1ODgzMTJjNzp7Il9hdXRoX3VzZXJfaWQiOjEsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMTE4NTM0NmJkZWY4MzQyZmMzYTRmYzEzMzNhNThkMTYwZWRmNDI4YSJ9', '2016-12-20 00:52:09'),
('gh6nzwxharenb2p8wib4uk35il4hrk0i', 'NzRiNTRkYmNkMWJmNTQ2MzU3NTdiNmM2YWQ1YTNlOGI1ODgzMTJjNzp7Il9hdXRoX3VzZXJfaWQiOjEsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMTE4NTM0NmJkZWY4MzQyZmMzYTRmYzEzMzNhNThkMTYwZWRmNDI4YSJ9', '2016-12-01 18:06:20'),
('vcjynde6sv0a7max5csiml2hurgndvdb', 'NzRiNTRkYmNkMWJmNTQ2MzU3NTdiNmM2YWQ1YTNlOGI1ODgzMTJjNzp7Il9hdXRoX3VzZXJfaWQiOjEsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMTE4NTM0NmJkZWY4MzQyZmMzYTRmYzEzMzNhNThkMTYwZWRmNDI4YSJ9', '2016-12-02 01:14:20');

-- --------------------------------------------------------

--
-- Estrutura da tabela `django_site`
--

CREATE TABLE `django_site` (
  `id` int(11) NOT NULL,
  `domain` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `django_site`
--

INSERT INTO `django_site` (`id`, `domain`, `name`) VALUES
(1, 'example.com', 'example.com');

-- --------------------------------------------------------

--
-- Estrutura da tabela `saeapp_antecedente`
--

CREATE TABLE `saeapp_antecedente` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `saeapp_caracteristica`
--

CREATE TABLE `saeapp_caracteristica` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `ocorrencias` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `saeapp_caracteristica`
--

INSERT INTO `saeapp_caracteristica` (`id`, `titulo`, `ocorrencias`) VALUES
(14, 'Esquecimento de efetuar uma ação em horário planejado', 0),
(15, 'Experiências de esquecimento', 0),
(16, 'Incapacidade de aprender novas habilidades', 37),
(17, 'Incapacidade de aprender novas informações', 0),
(18, 'Incapacidade de determinar se uma ação foi efetuada', 37),
(19, 'Incapacidade de executar habilidade previamente aprendida', 36),
(20, 'Incapacidade de recordar eventos', 1),
(21, 'Incapacidade de recordar informações reais', 0),
(22, 'Incapacidade de reter novas habilidades', 0),
(23, 'Incapacidade de reter novas informações', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `saeapp_caracteristicasdefinidora`
--

CREATE TABLE `saeapp_caracteristicasdefinidora` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `saeapp_caracteristicasdefinidora`
--

INSERT INTO `saeapp_caracteristicasdefinidora` (`id`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20),
(21),
(22),
(23),
(24),
(25),
(26),
(27),
(28),
(29),
(30),
(31),
(32),
(33),
(34),
(35),
(36),
(37),
(38),
(39),
(40),
(41),
(42);

-- --------------------------------------------------------

--
-- Estrutura da tabela `saeapp_caracteristicasdefinidora_caracteristicas`
--

CREATE TABLE `saeapp_caracteristicasdefinidora_caracteristicas` (
  `id` int(11) NOT NULL,
  `caracteristicasdefinidora_id` int(11) DEFAULT NULL,
  `caracteristica_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `saeapp_caracteristicasdefinidora_caracteristicas`
--

INSERT INTO `saeapp_caracteristicasdefinidora_caracteristicas` (`id`, `caracteristicasdefinidora_id`, `caracteristica_id`) VALUES
(2, 1, 14),
(3, 1, 15),
(1, 1, 16),
(5, 2, 14),
(6, 2, 15),
(4, 2, 16),
(8, 3, 14),
(9, 3, 15),
(7, 3, 16),
(11, 4, 14),
(12, 4, 15),
(10, 4, 16),
(14, 5, 14),
(15, 5, 15),
(13, 5, 16),
(16, 6, 16),
(17, 6, 18),
(18, 6, 19),
(19, 7, 16),
(20, 7, 18),
(21, 7, 19),
(22, 8, 16),
(23, 8, 18),
(24, 8, 19),
(25, 9, 16),
(26, 9, 18),
(27, 9, 19),
(28, 10, 16),
(29, 10, 18),
(30, 10, 19),
(31, 11, 16),
(32, 11, 18),
(33, 11, 19),
(34, 12, 16),
(35, 12, 18),
(36, 12, 19),
(37, 13, 16),
(38, 13, 18),
(39, 13, 19),
(40, 14, 16),
(41, 14, 18),
(42, 14, 19),
(43, 15, 16),
(44, 15, 18),
(45, 15, 19),
(46, 16, 16),
(47, 16, 18),
(48, 16, 19),
(49, 17, 16),
(50, 17, 18),
(51, 17, 19),
(52, 18, 16),
(53, 18, 18),
(54, 18, 19),
(55, 19, 16),
(56, 19, 18),
(57, 19, 19),
(58, 20, 16),
(59, 20, 18),
(60, 20, 19),
(61, 21, 16),
(62, 21, 18),
(63, 21, 19),
(64, 22, 16),
(65, 22, 18),
(66, 22, 19),
(67, 23, 16),
(68, 23, 18),
(69, 23, 19),
(70, 24, 16),
(71, 24, 18),
(72, 24, 19),
(73, 25, 16),
(74, 25, 18),
(75, 25, 19),
(76, 26, 16),
(77, 26, 18),
(78, 26, 19),
(79, 27, 16),
(80, 27, 18),
(81, 27, 19),
(82, 28, 16),
(83, 28, 18),
(84, 28, 19),
(85, 29, 16),
(86, 29, 18),
(87, 29, 19),
(88, 30, 16),
(89, 30, 18),
(90, 30, 19),
(91, 31, 16),
(92, 31, 18),
(93, 31, 19),
(94, 32, 16),
(95, 32, 18),
(96, 32, 19),
(97, 33, 16),
(98, 33, 18),
(99, 33, 19),
(100, 34, 16),
(101, 34, 18),
(102, 34, 19),
(103, 35, 16),
(104, 35, 18),
(105, 35, 19),
(106, 36, 16),
(107, 36, 18),
(108, 36, 19),
(109, 37, 16),
(110, 37, 18),
(111, 37, 19),
(112, 38, 16),
(113, 38, 18),
(114, 38, 19),
(115, 39, 16),
(116, 39, 18),
(117, 39, 19),
(118, 40, 16),
(119, 40, 18),
(120, 40, 19),
(121, 41, 16),
(122, 41, 18),
(123, 41, 19),
(124, 42, 16),
(125, 42, 18),
(126, 42, 20);

-- --------------------------------------------------------

--
-- Estrutura da tabela `saeapp_diagnostico`
--

CREATE TABLE `saeapp_diagnostico` (
  `id` int(11) NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `dominio` varchar(150) NOT NULL,
  `classe` varchar(150) NOT NULL,
  `definicao` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `saeapp_diagnostico`
--

INSERT INTO `saeapp_diagnostico` (`id`, `titulo`, `dominio`, `classe`, `definicao`) VALUES
(1, 'Memória prejudicada', 'Domínio 5: Percepção/cognição', 'Classe 4: Cognição', 'Incapacidade de recordar informações ou habilidades comportamentais.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `saeapp_diagnostico_caracteristicas`
--

CREATE TABLE `saeapp_diagnostico_caracteristicas` (
  `id` int(11) NOT NULL,
  `diagnostico_id` int(11) NOT NULL,
  `caracteristica_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `saeapp_diagnostico_caracteristicas`
--

INSERT INTO `saeapp_diagnostico_caracteristicas` (`id`, `diagnostico_id`, `caracteristica_id`) VALUES
(1, 1, 14),
(2, 1, 15),
(3, 1, 16),
(4, 1, 17),
(5, 1, 18),
(6, 1, 19),
(7, 1, 20),
(8, 1, 21),
(9, 1, 22),
(10, 1, 23);

-- --------------------------------------------------------

--
-- Estrutura da tabela `saeapp_diagnostico_intervencoes`
--

CREATE TABLE `saeapp_diagnostico_intervencoes` (
  `id` int(11) NOT NULL,
  `diagnostico_id` int(11) NOT NULL,
  `intervencao_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `saeapp_diagnostico_intervencoes`
--

INSERT INTO `saeapp_diagnostico_intervencoes` (`id`, `diagnostico_id`, `intervencao_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 8),
(9, 1, 9),
(10, 1, 10),
(11, 1, 11),
(12, 1, 12),
(13, 1, 13),
(14, 1, 14),
(15, 1, 15),
(16, 1, 16);

-- --------------------------------------------------------

--
-- Estrutura da tabela `saeapp_escalabraden`
--

CREATE TABLE `saeapp_escalabraden` (
  `id` int(11) NOT NULL,
  `percepcao_Sensorial` varchar(1) NOT NULL,
  `Paciente_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `saeapp_historico`
--

CREATE TABLE `saeapp_historico` (
  `idsaeapp_historico` int(11) NOT NULL,
  `idPaciente` varchar(45) NOT NULL,
  `internacoes` int(2) DEFAULT NULL,
  `motivoInternacao` varchar(100) DEFAULT NULL,
  `antecedentes` varchar(50) DEFAULT NULL,
  `alergias` varchar(80) DEFAULT NULL,
  `vacinas` varchar(50) DEFAULT NULL,
  `consciencia` varchar(200) DEFAULT NULL,
  `pupilas` varchar(200) DEFAULT NULL,
  `mmii_esquerdo` varchar(200) DEFAULT NULL,
  `mmii_direito` varchar(200) DEFAULT NULL,
  `mmss_esquerdo` varchar(200) DEFAULT NULL,
  `mmss_direito` varchar(200) DEFAULT NULL,
  `falaELinguagem` varchar(20) DEFAULT NULL,
  `respiracao` varchar(200) DEFAULT NULL,
  `O2` varchar(5) DEFAULT NULL,
  `SpO` varchar(5) DEFAULT NULL,
  `FR` varchar(5) DEFAULT NULL,
  `oxigenacao` varchar(300) DEFAULT NULL,
  `modalidade` varchar(200) DEFAULT NULL,
  `FiO2` varchar(200) DEFAULT NULL,
  `Peep` varchar(200) DEFAULT NULL,
  `SpO2` varchar(200) DEFAULT NULL,
  `auscultaPulmonar_MvPresente` varchar(300) DEFAULT NULL,
  `auscultaPulmonar_Ruidos` varchar(300) DEFAULT NULL,
  `prevencaoDeTosse` varchar(200) DEFAULT NULL,
  `presencaoDeTosse_xpectoracao` varchar(45) DEFAULT NULL,
  `aspiracao` varchar(100) DEFAULT NULL,
  `drenagemToracica` varchar(45) DEFAULT NULL,
  `mamas` varchar(200) DEFAULT NULL,
  `avaliacaoCardiovascular_Fc` varchar(5) DEFAULT NULL,
  `avaliacaoCardiovascular_Pa` varchar(5) DEFAULT NULL,
  `avaliacaoCardiovascular_PVC` varchar(5) DEFAULT NULL,
  `avaliacaoCardiovascular_PAM` varchar(5) DEFAULT NULL,
  `pulso` varchar(300) DEFAULT NULL,
  `presencaDeEdema` varchar(200) DEFAULT NULL,
  `turgidezDaPele` varchar(45) DEFAULT NULL,
  `eliminacaoUrinaria_Volume` varchar(5) DEFAULT NULL,
  `eliminacaoUrinaria` varchar(100) DEFAULT NULL,
  `hidratacao_Caracteristicas` varchar(200) DEFAULT NULL,
  `tipoDeDieta` varchar(100) DEFAULT NULL,
  `glicemia` varchar(45) DEFAULT NULL,
  `apetite` varchar(100) DEFAULT NULL,
  `alimentacao_ViasDeAdministracao` varchar(100) DEFAULT NULL,
  `presencaoDe` varchar(45) DEFAULT NULL,
  `abdome` varchar(100) DEFAULT NULL,
  `RHA` varchar(100) DEFAULT NULL,
  `ostomia` varchar(3) DEFAULT NULL,
  `eliminacaoIntestinal` varchar(300) DEFAULT NULL,
  `eliminacaoIntestinal_frequencia` varchar(2) DEFAULT NULL,
  `pele` varchar(300) DEFAULT NULL,
  `pele_temperatura` varchar(5) DEFAULT NULL,
  `olhos` varchar(200) DEFAULT NULL,
  `AVP` varchar(3) DEFAULT NULL,
  `AVP_local_tempo` varchar(100) DEFAULT NULL,
  `CVC` varchar(3) DEFAULT NULL,
  `CVC_local_tempo` varchar(100) DEFAULT NULL,
  `dreno` varchar(3) DEFAULT NULL,
  `dreno_caracteristicas` varchar(100) DEFAULT NULL,
  `dreno_tipo` varchar(100) DEFAULT NULL,
  `genitalia` varchar(200) DEFAULT NULL,
  `genitalia_lesoes` varchar(100) DEFAULT NULL,
  `necessidadeDeContencao` varchar(3) DEFAULT NULL,
  `riscoParaQueda` varchar(3) DEFAULT NULL,
  `escore` varchar(2) DEFAULT NULL,
  `observacoes` varchar(700) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `saeapp_historico`
--

INSERT INTO `saeapp_historico` (`idsaeapp_historico`, `idPaciente`, `internacoes`, `motivoInternacao`, `antecedentes`, `alergias`, `vacinas`, `consciencia`, `pupilas`, `mmii_esquerdo`, `mmii_direito`, `mmss_esquerdo`, `mmss_direito`, `falaELinguagem`, `respiracao`, `O2`, `SpO`, `FR`, `oxigenacao`, `modalidade`, `FiO2`, `Peep`, `SpO2`, `auscultaPulmonar_MvPresente`, `auscultaPulmonar_Ruidos`, `prevencaoDeTosse`, `presencaoDeTosse_xpectoracao`, `aspiracao`, `drenagemToracica`, `mamas`, `avaliacaoCardiovascular_Fc`, `avaliacaoCardiovascular_Pa`, `avaliacaoCardiovascular_PVC`, `avaliacaoCardiovascular_PAM`, `pulso`, `presencaDeEdema`, `turgidezDaPele`, `eliminacaoUrinaria_Volume`, `eliminacaoUrinaria`, `hidratacao_Caracteristicas`, `tipoDeDieta`, `glicemia`, `apetite`, `alimentacao_ViasDeAdministracao`, `presencaoDe`, `abdome`, `RHA`, `ostomia`, `eliminacaoIntestinal`, `eliminacaoIntestinal_frequencia`, `pele`, `pele_temperatura`, `olhos`, `AVP`, `AVP_local_tempo`, `CVC`, `CVC_local_tempo`, `dreno`, `dreno_caracteristicas`, `dreno_tipo`, `genitalia`, `genitalia_lesoes`, `necessidadeDeContencao`, `riscoParaQueda`, `escore`, `observacoes`) VALUES
(39, '42', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(40, '43', NULL, NULL, NULL, NULL, NULL, 'consciencia', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(41, '44', NULL, NULL, NULL, NULL, NULL, 'Letárgico', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(42, '46', NULL, NULL, NULL, NULL, NULL, 'Alerta', 'Miose', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(43, '48', NULL, NULL, NULL, NULL, NULL, 'Letárgico', 'Anisocóricas', 'Plegia', 'Preservada', 'Paresia', 'Paresia', 'Disfasia', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(44, '50', 2, 'Sem motivos', 'Tabagismo', 'Sim', 'Tetraviral', 'Letárgico', 'Anisocóricas', 'Paresia', 'Preservada', 'Preservada', 'Preservada', 'Disfasia', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(45, '51', 2, 'Sem motivos', 'Diabete Méllitus', 'Não', 'nenhuma', 'Letárgico', 'Anisocóricas', NULL, NULL, 'Plegia', 'Paresia', NULL, 'Máscara outra', '', '', '', NULL, '', '', '', '', NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(46, '52', 1, 'Sem motivos', 'Diabete Méllitus', 'Sim', 'Tetraviral', 'Obnubilado', 'Anisocóricas', 'Paresia', 'Plegia', 'Preservada', 'Paresia', 'Disartria', '', '111', '111', '111', NULL, '', '', '', '', 'Bilateralmente', 'Sibilos', 'Seca', '', NULL, NULL, 'Dor', '', '', '', '', 'Impalpável', '', 'Diminuída', '', 'Espontânea', '', 'Normal', '99', 'Diminuído', '', 'Vômito', '', 'Aumentado', 'Sim', 'Outros eliminação', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `saeapp_intervencao`
--

CREATE TABLE `saeapp_intervencao` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `saeapp_intervencao`
--

INSERT INTO `saeapp_intervencao` (`id`, `titulo`) VALUES
(1, 'Redução da ansiedade'),
(2, 'Controle da demência'),
(3, 'Controle do ambiente'),
(4, 'Controle de líquidos/eletrólitos'),
(5, 'Monitorização de líquidos'),
(6, 'Treinamento da memória'),
(7, 'Cuidados cardíacos'),
(8, 'Monitorização de eletrólitos'),
(9, 'Controle do ambiente: segurança'),
(10, 'Controle de medicamentos'),
(11, 'Controle de líquidos'),
(12, 'Monitorização neurológica'),
(13, 'Oxigenoterapia'),
(14, 'Supervisão'),
(15, 'Orientação para realidade'),
(16, 'Supervisão: segurança');

-- --------------------------------------------------------

--
-- Estrutura da tabela `saeapp_paciente`
--

CREATE TABLE `saeapp_paciente` (
  `id` int(11) NOT NULL,
  `Data` datetime NOT NULL,
  `Nome` varchar(60) NOT NULL,
  `Idade` varchar(3) NOT NULL,
  `Sexo` varchar(10) NOT NULL,
  `Estado_Civil` varchar(10) NOT NULL,
  `Religiao` varchar(50) NOT NULL,
  `Profissao` varchar(50) NOT NULL,
  `Naturalidade` varchar(50) NOT NULL,
  `Procedencia` varchar(50) NOT NULL,
  `Data_de_internacao` date NOT NULL,
  `Registro` varchar(40) NOT NULL,
  `Setor_de_Procedencia` varchar(50) NOT NULL,
  `Leito` varchar(50) NOT NULL,
  `Diagnostico_Medico` longtext NOT NULL,
  `Internacao_Anterior` varchar(2) NOT NULL,
  `Alergias` varchar(500) NOT NULL,
  `Vacinas` varchar(500) NOT NULL,
  `Antecedentes` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `saeapp_paciente`
--

INSERT INTO `saeapp_paciente` (`id`, `Data`, `Nome`, `Idade`, `Sexo`, `Estado_Civil`, `Religiao`, `Profissao`, `Naturalidade`, `Procedencia`, `Data_de_internacao`, `Registro`, `Setor_de_Procedencia`, `Leito`, `Diagnostico_Medico`, `Internacao_Anterior`, `Alergias`, `Vacinas`, `Antecedentes`) VALUES
(1, '2016-11-17 23:24:05', 'João da Silva', '22', 'Masculino', 'Solteiro', 'Católico', 'Estudante', 'Feira de Santana', 'Emergência', '2016-11-17', '1122100', 'Emergência', '14A', 'Infecção intestinal.', '2', 'Não possui', 'Não informado', ''),
(2, '2016-12-05 14:32:50', 'cecilia', '18', 'Feminino', 'Casado', 'caa', '232', '32', '32', '2016-12-02', '22', '2', '23', '2', '2', '', '', ''),
(3, '2016-12-05 18:48:44', 'ceci', '2', 'Feminino', 'Solteiro', 'catolico', 'as', 'ds', 'ds', '2016-12-02', '3', '3443', '2232', '434343', '43', 'a,b', 'a,c,f', ''),
(51, '2016-12-07 19:11:04', 'Rafael', '', 'Masculino', '', '', '', '', '', '2016-12-07', '', '', '', '', '', '', '', NULL),
(52, '2016-12-07 20:11:25', 'Teste', '', 'Masculino', '', '', '', '', '', '2016-12-07', '', '', '', '', '', '', '', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `saeapp_paciente_antecedentes`
--

CREATE TABLE `saeapp_paciente_antecedentes` (
  `id` int(11) NOT NULL,
  `paciente_id` int(11) NOT NULL,
  `antecedente_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `saeapp_planodecuidados`
--

CREATE TABLE `saeapp_planodecuidados` (
  `id` int(11) NOT NULL,
  `Data` datetime NOT NULL,
  `dataInicio` varchar(100) DEFAULT NULL,
  `intervalo` varchar(5) NOT NULL,
  `intervencao` varchar(100) NOT NULL,
  `ultimoHorario` varchar(100) NOT NULL,
  `horarioInicio` varchar(100) NOT NULL,
  `paciente_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `group_id` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissi_permission_id_20d382b3_fk_auth_permission_id` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `content_type_id` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_2e8ee676_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_perm_permission_id_7b979bb0_fk_auth_permission_id` (`permission_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin__content_type_id_3e0ca9d2_fk_django_content_type_id` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_514655d1_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_72f87fbc_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_de54fa62` (`expire_date`);

--
-- Indexes for table `django_site`
--
ALTER TABLE `django_site`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saeapp_antecedente`
--
ALTER TABLE `saeapp_antecedente`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saeapp_caracteristica`
--
ALTER TABLE `saeapp_caracteristica`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saeapp_caracteristicasdefinidora`
--
ALTER TABLE `saeapp_caracteristicasdefinidora`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saeapp_caracteristicasdefinidora_caracteristicas`
--
ALTER TABLE `saeapp_caracteristicasdefinidora_caracteristicas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `caracteristicasdefinidoras_id` (`caracteristicasdefinidora_id`,`caracteristica_id`),
  ADD KEY `SaeApp_ca_caracteristica_id_3bc418f7_fk_SaeApp_caracteristica_id` (`caracteristica_id`);

--
-- Indexes for table `saeapp_diagnostico`
--
ALTER TABLE `saeapp_diagnostico`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saeapp_diagnostico_caracteristicas`
--
ALTER TABLE `saeapp_diagnostico_caracteristicas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `diagnostico_id` (`diagnostico_id`,`caracteristica_id`),
  ADD KEY `SaeApp_di_caracteristica_id_3648ac92_fk_SaeApp_caracteristica_id` (`caracteristica_id`);

--
-- Indexes for table `saeapp_diagnostico_intervencoes`
--
ALTER TABLE `saeapp_diagnostico_intervencoes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `diagnostico_id` (`diagnostico_id`,`intervencao_id`),
  ADD KEY `SaeApp_diagnost_intervencao_id_29d69524_fk_SaeApp_intervencao_id` (`intervencao_id`);

--
-- Indexes for table `saeapp_escalabraden`
--
ALTER TABLE `saeapp_escalabraden`
  ADD PRIMARY KEY (`id`),
  ADD KEY `SaeApp_escalabraden_Paciente_id_8f1507c_fk_SaeApp_paciente_id` (`Paciente_id`);

--
-- Indexes for table `saeapp_historico`
--
ALTER TABLE `saeapp_historico`
  ADD PRIMARY KEY (`idsaeapp_historico`),
  ADD KEY `idsaeapp_historico` (`idsaeapp_historico`);

--
-- Indexes for table `saeapp_intervencao`
--
ALTER TABLE `saeapp_intervencao`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saeapp_paciente`
--
ALTER TABLE `saeapp_paciente`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saeapp_paciente_antecedentes`
--
ALTER TABLE `saeapp_paciente_antecedentes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `paciente_id` (`paciente_id`,`antecedente_id`),
  ADD KEY `SaeApp_paciente_antecedente_id_7b56f820_fk_SaeApp_antecedente_id` (`antecedente_id`);

--
-- Indexes for table `saeapp_planodecuidados`
--
ALTER TABLE `saeapp_planodecuidados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `SaeApp_planodecuidados_f7989c29` (`paciente_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=191;
--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
--
-- AUTO_INCREMENT for table `django_site`
--
ALTER TABLE `django_site`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `saeapp_antecedente`
--
ALTER TABLE `saeapp_antecedente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `saeapp_caracteristica`
--
ALTER TABLE `saeapp_caracteristica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `saeapp_caracteristicasdefinidora`
--
ALTER TABLE `saeapp_caracteristicasdefinidora`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT for table `saeapp_caracteristicasdefinidora_caracteristicas`
--
ALTER TABLE `saeapp_caracteristicasdefinidora_caracteristicas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
--
-- AUTO_INCREMENT for table `saeapp_diagnostico`
--
ALTER TABLE `saeapp_diagnostico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `saeapp_diagnostico_caracteristicas`
--
ALTER TABLE `saeapp_diagnostico_caracteristicas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `saeapp_diagnostico_intervencoes`
--
ALTER TABLE `saeapp_diagnostico_intervencoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `saeapp_escalabraden`
--
ALTER TABLE `saeapp_escalabraden`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `saeapp_historico`
--
ALTER TABLE `saeapp_historico`
  MODIFY `idsaeapp_historico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT for table `saeapp_intervencao`
--
ALTER TABLE `saeapp_intervencao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `saeapp_paciente`
--
ALTER TABLE `saeapp_paciente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
--
-- AUTO_INCREMENT for table `saeapp_paciente_antecedentes`
--
ALTER TABLE `saeapp_paciente_antecedentes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `saeapp_planodecuidados`
--
ALTER TABLE `saeapp_planodecuidados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissi_permission_id_20d382b3_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_418e1be1_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Limitadores para a tabela `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permissi_content_type_id_778401f3_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Limitadores para a tabela `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_2e8ee676_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_343e1c1e_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Limitadores para a tabela `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_perm_permission_id_7b979bb0_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_5c11067c_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Limitadores para a tabela `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin__content_type_id_3e0ca9d2_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_514655d1_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Limitadores para a tabela `saeapp_caracteristicasdefinidora_caracteristicas`
--
ALTER TABLE `saeapp_caracteristicasdefinidora_caracteristicas`
  ADD CONSTRAINT `SaeApp_ca_caracteristica_id_3bc418f7_fk_SaeApp_caracteristica_id` FOREIGN KEY (`caracteristica_id`) REFERENCES `saeapp_caracteristica` (`id`),
  ADD CONSTRAINT `a5a03d58e01d69454927489467d3731e` FOREIGN KEY (`caracteristicasdefinidora_id`) REFERENCES `saeapp_caracteristicasdefinidora` (`id`);

--
-- Limitadores para a tabela `saeapp_diagnostico_caracteristicas`
--
ALTER TABLE `saeapp_diagnostico_caracteristicas`
  ADD CONSTRAINT `SaeApp_di_caracteristica_id_3648ac92_fk_SaeApp_caracteristica_id` FOREIGN KEY (`caracteristica_id`) REFERENCES `saeapp_caracteristica` (`id`),
  ADD CONSTRAINT `SaeApp_diagnost_diagnostico_id_7d6d6f69_fk_SaeApp_diagnostico_id` FOREIGN KEY (`diagnostico_id`) REFERENCES `saeapp_diagnostico` (`id`);

--
-- Limitadores para a tabela `saeapp_diagnostico_intervencoes`
--
ALTER TABLE `saeapp_diagnostico_intervencoes`
  ADD CONSTRAINT `SaeApp_diagnost_intervencao_id_29d69524_fk_SaeApp_intervencao_id` FOREIGN KEY (`intervencao_id`) REFERENCES `saeapp_intervencao` (`id`),
  ADD CONSTRAINT `SaeApp_diagnosti_diagnostico_id_34b69a6_fk_SaeApp_diagnostico_id` FOREIGN KEY (`diagnostico_id`) REFERENCES `saeapp_diagnostico` (`id`);

--
-- Limitadores para a tabela `saeapp_escalabraden`
--
ALTER TABLE `saeapp_escalabraden`
  ADD CONSTRAINT `SaeApp_escalabraden_Paciente_id_8f1507c_fk_SaeApp_paciente_id` FOREIGN KEY (`Paciente_id`) REFERENCES `saeapp_paciente` (`id`);

--
-- Limitadores para a tabela `saeapp_paciente_antecedentes`
--
ALTER TABLE `saeapp_paciente_antecedentes`
  ADD CONSTRAINT `SaeApp_paciente_antec_paciente_id_6178c108_fk_SaeApp_paciente_id` FOREIGN KEY (`paciente_id`) REFERENCES `saeapp_paciente` (`id`),
  ADD CONSTRAINT `SaeApp_paciente_antecedente_id_7b56f820_fk_SaeApp_antecedente_id` FOREIGN KEY (`antecedente_id`) REFERENCES `saeapp_antecedente` (`id`);

--
-- Limitadores para a tabela `saeapp_planodecuidados`
--
ALTER TABLE `saeapp_planodecuidados`
  ADD CONSTRAINT `SaeApp_planodecuidados_paciente_id_9177d00_fk_SaeApp_paciente_id` FOREIGN KEY (`paciente_id`) REFERENCES `saeapp_paciente` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
