-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 09, 2024 at 01:35 PM
-- Server version: 8.0.27
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `task_id` int DEFAULT NULL,
  `task_content` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_email` text NOT NULL,
  `user_image` varchar(200) NOT NULL,
  `user_password` varchar(200) NOT NULL,
  `user_status` enum('0','1') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_id`, `user_name`, `user_email`, `user_image`, `user_password`, `user_status`) VALUES
(1, 0, 'Leah Pace', 'zadepup@mailinator.com', 'profile_img-1720530901115-user.jpg', 'Pa$$w0rd!', '0'),
(2, 0, 'Leah Pace', 'zadepup@mailinator.com', 'profile_img-1720531001739-user.jpg', 'Pa$$w0rd!', '0'),
(3, 0, 'Leah Pace', 'zadepup@mailinator.com', 'profile_img-1720531003295-user.jpg', 'Pa$$w0rd!', '0'),
(4, 0, 'Leah Pace', 'zadepup@mailinator.com', 'profile_img-1720531061250-user.jpg', 'Pa$$w0rd!', '0'),
(5, 0, 'Chloe Quinn', 'zejedud@mailinator.com', 'profile_img-1720531221556-logo.png', 'Pa$$w0rd!', '0'),
(6, 0, 'Chloe Quinn', 'zejedud@mailinator.com', 'profile_img-1720531243440-logo.png', 'Pa$$w0rd!', '0'),
(7, 0, 'Chloe Quinn', 'zejedud@mailinator.com', 'profile_img-1720531252488-logo.png', 'Pa$$w0rd!', '0'),
(8, 0, 'Chloe Quinn', 'zejedud@mailinator.com', 'profile_img-1720531256551-logo.png', 'Pa$$w0rd!', '0'),
(9, 0, 'Chloe Quinn', 'zejedud@mailinator.com', 'profile_img-1720531257754-logo.png', 'Pa$$w0rd!', '0'),
(10, 0, 'Chloe Quinn', 'zejedud@mailinator.com', 'profile_img-1720531258501-logo.png', 'Pa$$w0rd!', '0'),
(11, 0, 'Chloe Quinn', 'zejedud@mailinator.com', 'profile_img-1720531356180-logo.png', 'Pa$$w0rd!', '0'),
(12, 0, 'Chloe Quinn', 'zejedud@mailinator.com', 'profile_img-1720531391385-logo.png', 'Pa$$w0rd!', '0'),
(13, 0, 'Chloe Quinn', 'zejedud@mailinator.com', 'profile_img-1720531412178-logo.png', 'Pa$$w0rd!', '0'),
(14, 0, 'Chloe Quinn', 'zejedud@mailinator.com', 'profile_img-1720531414972-logo.png', 'Pa$$w0rd!', '0'),
(15, 0, 'Chloe Quinn', 'zejedud@mailinator.com', 'profile_img-1720531467156-logo.png', 'Pa$$w0rd!', '0'),
(16, 0, 'Chloe Quinn', 'zejedud@mailinator.com', 'profile_img-1720531468326-logo.png', 'Pa$$w0rd!', '0'),
(17, 0, 'Naomi Daugherty', 'wojifa@mailinator.com', 'profile_img-1720531772045-logo.png', 'Pa$$w0rd!', '0'),
(18, 0, 'Geoffrey Robbins', 'zaqeh@mailinator.com', 'profile_img-1720531809494-user.jpg', 'Pa$$w0rd!', '0'),
(19, 0, 'Porter Lester', 'qywufo@mailinator.com', 'profile_img-1720531843807-logo.png', 'Pa$$w0rd!', '0'),
(20, 0, 'Lee Williams', 'kovog@mailinator.com', 'profile_img-1720531884104-logo.png', 'Pa$$w0rd!', '0'),
(21, 0, 'Madison Tyson', 'vygukobiq@mailinator.com', 'profile_img-1720532097301-user.jpg', 'Pa$$w0rd!', '0');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
