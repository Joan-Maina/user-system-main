CREATE OR ALTER PROCEDURE [dbo].[getcompletedprojects]
AS
SET NOCOUNT ON
BEGIN
SELECT * FROM [dbo].[projectDetails] WHERE isDeleted = 0 and isCompleted = 1
END;