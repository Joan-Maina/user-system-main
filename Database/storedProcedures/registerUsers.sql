CREATE OR ALTER PROCEDURE [dbo].[registeruser]
	@firstname varchar(50),
	@lastname varchar(50),
	@email varchar(255),
	@password varchar(255)
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	INSERT INTO [dbo].[userDetails]
	(firstname, lastname, email, password)
	VALUES
	(@firstname, @lastname, @email, @password);
END;