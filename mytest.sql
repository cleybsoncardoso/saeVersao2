-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tempo de Geração: 11/11/2016 às 04:04
-- Versão do servidor: 5.5.28
-- Versão do PHP: 5.3.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `mytest`
--
CREATE DATABASE IF NOT EXISTS `mytest` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mytest`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `caracteristicas_definidoras`
--

CREATE TABLE IF NOT EXISTS `caracteristicas_definidoras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ocorrencias` int(10) DEFAULT '0',
  `titulo` varchar(250) CHARACTER SET armscii8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Fazendo dump de dados para tabela `caracteristicas_definidoras`
--

INSERT INTO `caracteristicas_definidoras` (`id`, `ocorrencias`, `titulo`) VALUES
(1, 0, 'Amplitude limitada de movimento'),
(2, 0, 'Capacidade limitada para desempenhar as habilidades motoras finas'),
(3, 0, 'Capacidade limitada para desempenhar as habilidades motoras grossas'),
(4, 0, 'Dificuldade para virar-se'),
(5, 0, 'Dispneia ao esforco'),
(6, 0, 'Engaja-se em substituicoes de movimento'),
(7, 0, 'Instabilidade postural '),
(8, 0, 'Movimentos descontrolados'),
(9, 0, 'Movimentos lentos'),
(10, 0, 'Movimentos nao coordenados');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_cadastros`
--

CREATE TABLE IF NOT EXISTS `tb_cadastros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) CHARACTER SET armscii8 DEFAULT NULL,
  `login` varchar(20) NOT NULL,
  `senha` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Fazendo dump de dados para tabela `tb_cadastros`
--

INSERT INTO `tb_cadastros` (`id`, `nome`, `login`, `senha`) VALUES
(3, 'joao', '1234', 'teste'),
(4, 'maria', '9876', 'teste'),
(5, 'jose', '1', '1');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_definicoes`
--

CREATE TABLE IF NOT EXISTS `tb_definicoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) DEFAULT NULL,
  `dominio` varchar(150) NOT NULL,
  `classe` varchar(150) CHARACTER SET ascii NOT NULL,
  `definicao` varchar(150) CHARACTER SET ascii NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=armscii8 AUTO_INCREMENT=4 ;

--
-- Fazendo dump de dados para tabela `tb_definicoes`
--

INSERT INTO `tb_definicoes` (`id`, `titulo`, `dominio`, `classe`, `definicao`) VALUES
(1, 'Mobilidade fisica prejudicada', 'atividade/repouso', 'atividade/exercicio', 'teste'),
(2, 'integridade tissular prejudicada', 'seguranca/protecao', 'lesao fisica', 'teste2'),
(3, 'Degluticao prejudicada', 'Nutricao', 'ingestao', 'teste3');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_pacientes`
--

CREATE TABLE IF NOT EXISTS `tb_pacientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `leito` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Fazendo dump de dados para tabela `tb_pacientes`
--

INSERT INTO `tb_pacientes` (`id`, `nome`, `leito`) VALUES
(1, 'joao', 12),
(2, 'carlos', 15),
(3, 'pedro', 2),
(4, 'teste', 5),
(7, 'r', 1),
(8, 'havallon', 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_relacao`
--

CREATE TABLE IF NOT EXISTS `tb_relacao` (
  `diagnostico` int(11) DEFAULT NULL,
  `caracteristica` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `tb_relacao`
--

INSERT INTO `tb_relacao` (`diagnostico`, `caracteristica`) VALUES
(1, 1),
(2, 1),
(2, 3),
(3, 3),
(1, 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
