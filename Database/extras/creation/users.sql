CREATE TABLE [dbo].[userDetails] 
(
    userId INT IDENTITY(1,1),
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) PRIMARY KEY NOT NULL,
    password VARCHAR(50) NOT NULL,
    isAdmin BIT DEFAULT 0,
    isDeleted BIT DEFAULT 0
);