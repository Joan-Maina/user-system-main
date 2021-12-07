CREATE TABLE [dbo].[userDetails] 
(
    userId INT IDENTITY(1,1) ,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) PRIMARY KEY NOT NULL,
    password VARCHAR(255) NOT NULL,
    isAdmin BIT DEFAULT 0,
    isDeleted BIT DEFAULT 0
);