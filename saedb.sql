-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: saedb
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `group_id` (`group_id`,`permission_id`),
  KEY `auth_group_permissi_permission_id_20d382b3_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_group_permissi_permission_id_20d382b3_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_418e1be1_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `content_type_id` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permissi_content_type_id_778401f3_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add site',7,'add_site'),(20,'Can change site',7,'change_site'),(21,'Can delete site',7,'delete_site'),(22,'Can add antecedente',8,'add_antecedente'),(23,'Can change antecedente',8,'change_antecedente'),(24,'Can delete antecedente',8,'delete_antecedente'),(25,'Can add paciente',9,'add_paciente'),(26,'Can change paciente',9,'change_paciente'),(27,'Can delete paciente',9,'delete_paciente'),(28,'Can add escala braden',10,'add_escalabraden'),(29,'Can change escala braden',10,'change_escalabraden'),(30,'Can delete escala braden',10,'delete_escalabraden'),(31,'Can add caracteristica',11,'add_caracteristica'),(32,'Can change caracteristica',11,'change_caracteristica'),(33,'Can delete caracteristica',11,'delete_caracteristica'),(34,'Can add caracteristicas definidora',12,'add_caracteristicasdefinidora'),(35,'Can change caracteristicas definidora',12,'change_caracteristicasdefinidora'),(36,'Can delete caracteristicas definidora',12,'delete_caracteristicasdefinidora'),(37,'Can add intervencao',13,'add_intervencao'),(38,'Can change intervencao',13,'change_intervencao'),(39,'Can delete intervencao',13,'delete_intervencao'),(40,'Can add diagnostico',14,'add_diagnostico'),(41,'Can change diagnostico',14,'change_diagnostico'),(42,'Can delete diagnostico',14,'delete_diagnostico'),(43,'Can add plano de cuidados',15,'add_planodecuidados'),(44,'Can change plano de cuidados',15,'change_planodecuidados'),(45,'Can delete plano de cuidados',15,'delete_planodecuidados');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(75) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'1','2016-11-22 18:06:19',1,'1','cley','cardoso','cleybsonc@gmail.com',1,1,'2016-11-17 18:06:16');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_2e8ee676_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_2e8ee676_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_343e1c1e_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`permission_id`),
  KEY `auth_user_user_perm_permission_id_7b979bb0_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_user_user_perm_permission_id_7b979bb0_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_5c11067c_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin__content_type_id_3e0ca9d2_fk_django_content_type_id` (`content_type_id`),
  KEY `django_admin_log_user_id_514655d1_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin__content_type_id_3e0ca9d2_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_514655d1_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_72f87fbc_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'log entry','admin','logentry'),(2,'permission','auth','permission'),(3,'group','auth','group'),(4,'user','auth','user'),(5,'content type','contenttypes','contenttype'),(6,'session','sessions','session'),(7,'site','sites','site'),(8,'antecedente','SaeApp','antecedente'),(9,'paciente','SaeApp','paciente'),(10,'escala braden','SaeApp','escalabraden'),(11,'caracteristica','SaeApp','caracteristica'),(12,'caracteristicas definidora','SaeApp','caracteristicasdefinidora'),(13,'intervencao','SaeApp','intervencao'),(14,'diagnostico','SaeApp','diagnostico'),(15,'plano de cuidados','SaeApp','planodecuidados');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'SaeApp','0001_initial','2016-11-17 18:02:48'),(2,'SaeApp','0002_paciente_internacao_anterior','2016-11-17 18:02:49'),(3,'SaeApp','0003_auto_20160629_2142','2016-11-17 18:02:52'),(4,'SaeApp','0004_caracteristica_caracteristicasdefinidoras','2016-11-17 18:02:57'),(5,'SaeApp','0005_auto_20160629_2210','2016-11-17 18:03:04'),(6,'SaeApp','0006_auto_20160629_2251','2016-11-17 18:03:13'),(7,'SaeApp','0007_auto_20160801_2128','2016-11-17 18:03:19'),(8,'SaeApp','0008_remove_antecedente_outrotitulo','2016-11-17 18:03:21'),(9,'SaeApp','0009_paciente_alergia','2016-11-17 18:03:23'),(10,'SaeApp','0010_auto_20160801_2152','2016-11-17 18:03:23'),(11,'SaeApp','0011_auto_20160801_2153','2016-11-17 18:03:26'),(12,'SaeApp','0012_auto_20160801_2154','2016-11-17 18:03:26'),(13,'SaeApp','0013_auto_20160801_2158','2016-11-17 18:03:28'),(14,'SaeApp','0014_entrevista','2016-11-17 18:03:30'),(15,'SaeApp','0015_auto_20160815_0944','2016-11-17 18:03:34'),(16,'SaeApp','0016_auto_20160818_0908','2016-11-17 18:03:34'),(17,'SaeApp','0017_auto_20160826_1712','2016-11-17 18:03:35'),(18,'SaeApp','0018_auto_20160828_0909','2016-11-17 18:03:35'),(19,'SaeApp','0019_auto_20160830_0808','2016-11-17 18:03:37'),(20,'SaeApp','0020_planodecuidados','2016-11-17 18:03:39'),(21,'SaeApp','0021_planodecuidados_idpaciente','2016-11-17 18:03:40'),(22,'SaeApp','0022_auto_20160920_2031','2016-11-17 18:03:42'),(23,'SaeApp','0023_remove_planodecuidados_idpaciente','2016-11-17 18:03:43'),(24,'SaeApp','0024_planodecuidados_idpaciente','2016-11-17 18:03:44'),(25,'SaeApp','0025_planodecuidados_intervencoes','2016-11-17 18:03:47'),(26,'SaeApp','0026_planodecuidados_data','2016-11-17 18:03:49'),(27,'SaeApp','0027_auto_20160920_2123','2016-11-17 18:03:51'),(28,'SaeApp','0028_auto_20160920_2134','2016-11-17 18:03:52'),(29,'SaeApp','0029_planodecuidados_paciente','2016-11-17 18:03:56'),(30,'SaeApp','0030_remove_planodecuidados_idpaciente','2016-11-17 18:03:58'),(31,'SaeApp','0031_auto_20160922_0905','2016-11-17 18:04:00'),(32,'SaeApp','0032_auto_20160922_0908','2016-11-17 18:04:02'),(33,'SaeApp','0033_paciente_vacinas','2016-11-17 18:04:04'),(34,'SaeApp','0034_caracteristica_ocorrencias','2016-11-17 18:04:05'),(35,'SaeApp','0035_auto_20161001_1913','2016-11-17 18:04:07'),(36,'SaeApp','0036_auto_20161003_1857','2016-11-17 18:04:12'),(37,'SaeApp','0037_auto_20161003_1915','2016-11-17 18:04:16'),(38,'SaeApp','0038_auto_20161007_1232','2016-11-17 18:04:23'),(39,'SaeApp','0039_auto_20161007_1234','2016-11-17 18:04:25'),(40,'SaeApp','0040_auto_20161007_1241','2016-11-17 18:04:32'),(41,'contenttypes','0001_initial','2016-11-17 18:04:33'),(42,'auth','0001_initial','2016-11-17 18:04:47'),(43,'admin','0001_initial','2016-11-17 18:04:52'),(44,'sessions','0001_initial','2016-11-17 18:04:53'),(45,'sites','0001_initial','2016-11-17 18:04:53');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_de54fa62` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('gh6nzwxharenb2p8wib4uk35il4hrk0i','NzRiNTRkYmNkMWJmNTQ2MzU3NTdiNmM2YWQ1YTNlOGI1ODgzMTJjNzp7Il9hdXRoX3VzZXJfaWQiOjEsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMTE4NTM0NmJkZWY4MzQyZmMzYTRmYzEzMzNhNThkMTYwZWRmNDI4YSJ9','2016-12-01 18:06:20');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_site`
--

DROP TABLE IF EXISTS `django_site`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_site` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `domain` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_site`
--

LOCK TABLES `django_site` WRITE;
/*!40000 ALTER TABLE `django_site` DISABLE KEYS */;
INSERT INTO `django_site` VALUES (1,'example.com','example.com');
/*!40000 ALTER TABLE `django_site` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saeapp_antecedente`
--

DROP TABLE IF EXISTS `saeapp_antecedente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saeapp_antecedente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saeapp_antecedente`
--

LOCK TABLES `saeapp_antecedente` WRITE;
/*!40000 ALTER TABLE `saeapp_antecedente` DISABLE KEYS */;
INSERT INTO `saeapp_antecedente` VALUES (1,'teste');
/*!40000 ALTER TABLE `saeapp_antecedente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saeapp_caracteristica`
--

DROP TABLE IF EXISTS `saeapp_caracteristica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saeapp_caracteristica` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `ocorrencias` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saeapp_caracteristica`
--

LOCK TABLES `saeapp_caracteristica` WRITE;
/*!40000 ALTER TABLE `saeapp_caracteristica` DISABLE KEYS */;
INSERT INTO `saeapp_caracteristica` VALUES (1,'toce',0),(2,'espirar',0),(3,'te',0),(4,'tes',0);
/*!40000 ALTER TABLE `saeapp_caracteristica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saeapp_caracteristicasdefinidora`
--

DROP TABLE IF EXISTS `saeapp_caracteristicasdefinidora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saeapp_caracteristicasdefinidora` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saeapp_caracteristicasdefinidora`
--

LOCK TABLES `saeapp_caracteristicasdefinidora` WRITE;
/*!40000 ALTER TABLE `saeapp_caracteristicasdefinidora` DISABLE KEYS */;
/*!40000 ALTER TABLE `saeapp_caracteristicasdefinidora` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saeapp_caracteristicasdefinidora_caracteristicas`
--

DROP TABLE IF EXISTS `saeapp_caracteristicasdefinidora_caracteristicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saeapp_caracteristicasdefinidora_caracteristicas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `caracteristicasdefinidora_id` int(11) DEFAULT NULL,
  `caracteristica_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `caracteristicasdefinidoras_id` (`caracteristicasdefinidora_id`,`caracteristica_id`),
  KEY `SaeApp_ca_caracteristica_id_3bc418f7_fk_SaeApp_caracteristica_id` (`caracteristica_id`),
  CONSTRAINT `SaeApp_ca_caracteristica_id_3bc418f7_fk_SaeApp_caracteristica_id` FOREIGN KEY (`caracteristica_id`) REFERENCES `saeapp_caracteristica` (`id`),
  CONSTRAINT `a5a03d58e01d69454927489467d3731e` FOREIGN KEY (`caracteristicasdefinidora_id`) REFERENCES `saeapp_caracteristicasdefinidora` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saeapp_caracteristicasdefinidora_caracteristicas`
--

LOCK TABLES `saeapp_caracteristicasdefinidora_caracteristicas` WRITE;
/*!40000 ALTER TABLE `saeapp_caracteristicasdefinidora_caracteristicas` DISABLE KEYS */;
/*!40000 ALTER TABLE `saeapp_caracteristicasdefinidora_caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saeapp_diagnostico`
--

DROP TABLE IF EXISTS `saeapp_diagnostico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saeapp_diagnostico` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) NOT NULL,
  `dominio` varchar(150) NOT NULL,
  `classe` varchar(150) NOT NULL,
  `definicao` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saeapp_diagnostico`
--

LOCK TABLES `saeapp_diagnostico` WRITE;
/*!40000 ALTER TABLE `saeapp_diagnostico` DISABLE KEYS */;
INSERT INTO `saeapp_diagnostico` VALUES (1,'a','a','a','a'),(2,'b','b','b','b'),(3,'c','c','c','c');
/*!40000 ALTER TABLE `saeapp_diagnostico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saeapp_diagnostico_caracteristicas`
--

DROP TABLE IF EXISTS `saeapp_diagnostico_caracteristicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saeapp_diagnostico_caracteristicas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `diagnostico_id` int(11) NOT NULL,
  `caracteristica_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `diagnostico_id` (`diagnostico_id`,`caracteristica_id`),
  KEY `SaeApp_di_caracteristica_id_3648ac92_fk_SaeApp_caracteristica_id` (`caracteristica_id`),
  CONSTRAINT `SaeApp_di_caracteristica_id_3648ac92_fk_SaeApp_caracteristica_id` FOREIGN KEY (`caracteristica_id`) REFERENCES `saeapp_caracteristica` (`id`),
  CONSTRAINT `SaeApp_diagnost_diagnostico_id_7d6d6f69_fk_SaeApp_diagnostico_id` FOREIGN KEY (`diagnostico_id`) REFERENCES `saeapp_diagnostico` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saeapp_diagnostico_caracteristicas`
--

LOCK TABLES `saeapp_diagnostico_caracteristicas` WRITE;
/*!40000 ALTER TABLE `saeapp_diagnostico_caracteristicas` DISABLE KEYS */;
INSERT INTO `saeapp_diagnostico_caracteristicas` VALUES (1,1,1),(2,1,2),(3,2,2),(4,2,3),(5,3,3),(6,3,4);
/*!40000 ALTER TABLE `saeapp_diagnostico_caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saeapp_diagnostico_intervencoes`
--

DROP TABLE IF EXISTS `saeapp_diagnostico_intervencoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saeapp_diagnostico_intervencoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `diagnostico_id` int(11) NOT NULL,
  `intervencao_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `diagnostico_id` (`diagnostico_id`,`intervencao_id`),
  KEY `SaeApp_diagnost_intervencao_id_29d69524_fk_SaeApp_intervencao_id` (`intervencao_id`),
  CONSTRAINT `SaeApp_diagnost_intervencao_id_29d69524_fk_SaeApp_intervencao_id` FOREIGN KEY (`intervencao_id`) REFERENCES `saeapp_intervencao` (`id`),
  CONSTRAINT `SaeApp_diagnosti_diagnostico_id_34b69a6_fk_SaeApp_diagnostico_id` FOREIGN KEY (`diagnostico_id`) REFERENCES `saeapp_diagnostico` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saeapp_diagnostico_intervencoes`
--

LOCK TABLES `saeapp_diagnostico_intervencoes` WRITE;
/*!40000 ALTER TABLE `saeapp_diagnostico_intervencoes` DISABLE KEYS */;
INSERT INTO `saeapp_diagnostico_intervencoes` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,3),(5,2,4),(6,3,1);
/*!40000 ALTER TABLE `saeapp_diagnostico_intervencoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saeapp_escalabraden`
--

DROP TABLE IF EXISTS `saeapp_escalabraden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saeapp_escalabraden` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `percepcao_Sensorial` varchar(1) NOT NULL,
  `Paciente_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `SaeApp_escalabraden_Paciente_id_8f1507c_fk_SaeApp_paciente_id` (`Paciente_id`),
  CONSTRAINT `SaeApp_escalabraden_Paciente_id_8f1507c_fk_SaeApp_paciente_id` FOREIGN KEY (`Paciente_id`) REFERENCES `saeapp_paciente` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saeapp_escalabraden`
--

LOCK TABLES `saeapp_escalabraden` WRITE;
/*!40000 ALTER TABLE `saeapp_escalabraden` DISABLE KEYS */;
/*!40000 ALTER TABLE `saeapp_escalabraden` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saeapp_historico`
--

DROP TABLE IF EXISTS `saeapp_historico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saeapp_historico` (
  `idsaeapp_historico` int(11) NOT NULL AUTO_INCREMENT,
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
  `observacoes` varchar(700) DEFAULT NULL,
  PRIMARY KEY (`idsaeapp_historico`,`idPaciente`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saeapp_historico`
--

LOCK TABLES `saeapp_historico` WRITE;
/*!40000 ALTER TABLE `saeapp_historico` DISABLE KEYS */;
INSERT INTO `saeapp_historico` VALUES (1,'2',21,'21','21','21','21','212','21','21','21','21','21','21','21','21','21','21','21','21','21','21','21','21','21','2','121','21','21',NULL,'21','21','2','1','1','1','1','1','1','21','21','21','21','21','21','21','21','21','21','2','1','12','2','12','1','21','2','12','1','22','2','2','2','2','2','2'),(2,'1',1,'1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','11','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1');
/*!40000 ALTER TABLE `saeapp_historico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saeapp_intervencao`
--

DROP TABLE IF EXISTS `saeapp_intervencao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saeapp_intervencao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saeapp_intervencao`
--

LOCK TABLES `saeapp_intervencao` WRITE;
/*!40000 ALTER TABLE `saeapp_intervencao` DISABLE KEYS */;
INSERT INTO `saeapp_intervencao` VALUES (1,'lavar'),(2,'cuidar'),(3,'varrer'),(4,'testar'),(5,'funciona');
/*!40000 ALTER TABLE `saeapp_intervencao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saeapp_paciente`
--

DROP TABLE IF EXISTS `saeapp_paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saeapp_paciente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(60) NOT NULL,
  `Data` datetime NOT NULL,
  `Idade` varchar(3) NOT NULL,
  `Sexo` varchar(10) NOT NULL,
  `Estado_Civil` varchar(10) NOT NULL,
  `Religiao` varchar(50) DEFAULT NULL,
  `Profissao` varchar(50) DEFAULT NULL,
  `Naturalidade` varchar(50) NOT NULL,
  `Procedencia` varchar(50) NOT NULL,
  `Data_de_internacao` date NOT NULL,
  `Registro` varchar(40) NOT NULL,
  `Setor_de_Procedencia` varchar(50) DEFAULT NULL,
  `Leito` varchar(50) DEFAULT NULL,
  `Diagnostico_Medico` longtext,
  `Clinica` varchar(45) DEFAULT NULL,
  `ativo` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saeapp_paciente`
--

LOCK TABLES `saeapp_paciente` WRITE;
/*!40000 ALTER TABLE `saeapp_paciente` DISABLE KEYS */;
INSERT INTO `saeapp_paciente` VALUES (1,'rick','2016-11-16 00:00:00','19','m','solteiro','ateu','estudante','feirense','d','2016-11-16','2','s','12','s',NULL,1),(2,'joao','2016-11-01 00:00:00','2','m','s','s','s','s','s','2016-11-01','s','s','2','ds',NULL,1),(3,'a','2016-11-02 00:00:00','2','m','ds','ds','ds','ds','ds','2016-11-15','ds','ds','2','ds',NULL,1),(4,'b','2016-11-02 00:00:00','2','m','ds','ds','ds','ds','ds','2016-11-15','ds','ds','2','ds',NULL,1),(5,'teste','2016-11-17 18:13:50','20','Masculino','Solteiro','s','s','s','s','2016-11-17','2','ds','2','dsdsdsds',NULL,1),(6,'te','2016-11-18 10:52:49','1','Masculino','Solteiro','ca','s','s','s','2016-11-02','2','2','2','fdfdfdf',NULL,1),(7,'54','2017-05-03 23:55:50','54','Masculino','Solteiro','54','54','54','54','2017-05-03','54','5454','54','54','54',1),(8,'5423','2017-05-03 23:57:05','54','Masculino','Solteiro','54','54','54','54','2017-05-03','54','5454','54','54','54',1),(9,'5423','2017-05-03 23:58:24','54','Masculino','Solteiro','54','54','54','54','2017-05-03','54','5454','54','54','54',1),(10,'jaoo','2017-05-04 00:09:13','12','Masculino','Solteiro','21','21','21','21','2017-05-12','541','6321','21','615','32',1),(11,'teste','2017-05-05 00:12:02','12','Masculino','Divorciado','21','21','21','21','2017-05-03','21','21','21','21','21',1),(12,'teste','2017-05-05 00:13:05','12','Masculino','Divorciado','21','21','21','21','2017-05-03','21','21','21','21','21',1),(13,'re','2017-05-05 00:13:32','21','Masculino','Casado','321','21','21','21','2017-05-10','21','21','21','21','21',1),(14,'111','2017-05-09 23:20:02','11','Masculino','Divorciado','111','1111','111','111','2017-05-16','111','111','111','11','111',1),(15,'222','2017-05-09 23:21:34','222','Masculino','Divorciado','2222','22','222','222','2017-05-18','2222','222','222','222','222',1),(16,'111','2017-05-09 23:27:40','111','Masculino','Casado','111','2222','22','22','2017-05-04','222','222','222','333','222',1);
/*!40000 ALTER TABLE `saeapp_paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saeapp_paciente_antecedentes`
--

DROP TABLE IF EXISTS `saeapp_paciente_antecedentes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saeapp_paciente_antecedentes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `paciente_id` int(11) NOT NULL,
  `antecedente_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `paciente_id` (`paciente_id`,`antecedente_id`),
  KEY `SaeApp_paciente_antecedente_id_7b56f820_fk_SaeApp_antecedente_id` (`antecedente_id`),
  CONSTRAINT `SaeApp_paciente_antec_paciente_id_6178c108_fk_SaeApp_paciente_id` FOREIGN KEY (`paciente_id`) REFERENCES `saeapp_paciente` (`id`),
  CONSTRAINT `SaeApp_paciente_antecedente_id_7b56f820_fk_SaeApp_antecedente_id` FOREIGN KEY (`antecedente_id`) REFERENCES `saeapp_antecedente` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saeapp_paciente_antecedentes`
--

LOCK TABLES `saeapp_paciente_antecedentes` WRITE;
/*!40000 ALTER TABLE `saeapp_paciente_antecedentes` DISABLE KEYS */;
INSERT INTO `saeapp_paciente_antecedentes` VALUES (1,1,1),(2,2,1);
/*!40000 ALTER TABLE `saeapp_paciente_antecedentes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saeapp_planodecuidados`
--

DROP TABLE IF EXISTS `saeapp_planodecuidados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saeapp_planodecuidados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Data` datetime NOT NULL,
  `dataInicio` varchar(100) DEFAULT NULL,
  `intervalo` varchar(5) NOT NULL,
  `intervencao` varchar(100) NOT NULL,
  `ultimoHorario` varchar(100) NOT NULL,
  `horarioInicio` varchar(100) NOT NULL,
  `paciente_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `SaeApp_planodecuidados_f7989c29` (`paciente_id`),
  CONSTRAINT `SaeApp_planodecuidados_paciente_id_9177d00_fk_SaeApp_paciente_id` FOREIGN KEY (`paciente_id`) REFERENCES `saeapp_paciente` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saeapp_planodecuidados`
--

LOCK TABLES `saeapp_planodecuidados` WRITE;
/*!40000 ALTER TABLE `saeapp_planodecuidados` DISABLE KEYS */;
INSERT INTO `saeapp_planodecuidados` VALUES (1,'2016-11-12 00:00:00','2016-11-12','15','lavar','20','20',1),(2,'2016-11-10 00:00:00','2016-11-10','15','cx','20','20',1);
/*!40000 ALTER TABLE `saeapp_planodecuidados` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-10  0:04:05
