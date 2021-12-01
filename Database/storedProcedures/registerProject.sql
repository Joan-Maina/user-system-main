CREATE OR ALTER PROCEDURE [dbo].[RegisterProject]
	@projectTitle VARCHAR(255),
    @projectClient VARCHAR(255),
    @projectStartdate DATE,
    @projectEnddate DATE
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	INSERT INTO [dbo].[userDetails]
	(projectTitle, projectClient, projectStartdate, projectEnddate)
	VALUES
	(@projectTitle, @projectClient, @projectStartdate, @projectEnddate);
END;