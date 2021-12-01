CREATE OR ALTER PROCEDURE [dbo].[getProject]
	@projectid INT
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	SELECT * 
        FROM [dbo].[projectDetails]
            WHERE projectId = @projectid AND isDeleted = 0;
END;