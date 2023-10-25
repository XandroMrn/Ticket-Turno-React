-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_ticketTurno
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_ticketTurno
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_ticketTurno` DEFAULT CHARACTER SET utf8 ;
USE `db_ticketTurno` ;

-- -----------------------------------------------------
-- Table `db_ticketTurno`.`login`
-- -----------------------------------------------------
-- Crear la tabla `login` con `user` como clave primaria
CREATE TABLE IF NOT EXISTS `db_ticketTurno`.`login` (
  `user` VARCHAR(50) NOT NULL,
  `pass` VARCHAR(50) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_ticketTurno`.`nivel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ticketTurno`.`nivel` (
  `id_nivel` INT NOT NULL AUTO_INCREMENT,
  `nivel` VARCHAR(50) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_nivel`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_ticketTurno`.`asunto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ticketTurno`.`asunto` (
  `id_asunto` INT NOT NULL AUTO_INCREMENT,
  `asunto` VARCHAR(50) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_asunto`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_ticketTurno`.`municipio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ticketTurno`.`municipio` (
  `id_municipio` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_municipio`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_ticketTurno`.`titular`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ticketTurno`.`titular` (
  `id_titular` INT NOT NULL AUTO_INCREMENT,
  `nombreTitular` VARCHAR(70) NOT NULL,
  `curp` VARCHAR(50) NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `paterno` VARCHAR(50) NOT NULL,
  `materno` VARCHAR(50) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `celular` VARCHAR(10) NOT NULL,
  `correo` VARCHAR(50) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_titular`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_ticketTurno`.`turno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ticketTurno`.`turno` (
  `id_turno` INT NOT NULL AUTO_INCREMENT, 
  `titular_id_titular` INT NOT NULL,
  `nivel_id_nivel` INT NOT NULL,
  `municipio_id_municipio` INT NOT NULL,
  `asunto_id_asunto` INT NOT NULL,
  `estado` VARCHAR(20), -- Nueva columna "estado"
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_turno`, `titular_id_titular`, `nivel_id_nivel`, `municipio_id_municipio`, `asunto_id_asunto`),
  INDEX `fk_turno_titular_idx` (`titular_id_titular` ASC),
  INDEX `fk_turno_nivel1_idx` (`nivel_id_nivel` ASC),
  INDEX `fk_turno_municipio1_idx` (`municipio_id_municipio` ASC),
  INDEX `fk_turno_asunto1_idx` (`asunto_id_asunto` ASC),
  CONSTRAINT `fk_turno_titular`
    FOREIGN KEY (`titular_id_titular`)
    REFERENCES `db_ticketTurno`.`titular` (`id_titular`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turno_nivel1`
    FOREIGN KEY (`nivel_id_nivel`)
    REFERENCES `db_ticketTurno`.`nivel` (`id_nivel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turno_municipio1`
    FOREIGN KEY (`municipio_id_municipio`)
    REFERENCES `db_ticketTurno`.`municipio` (`id_municipio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turno_asunto1`
    FOREIGN KEY (`asunto_id_asunto`)
    REFERENCES `db_ticketTurno`.`asunto` (`id_asunto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;