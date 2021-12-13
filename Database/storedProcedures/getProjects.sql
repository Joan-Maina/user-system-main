CREATE OR ALTER PROCEDURE [dbo].[getprojects]
	@email VARCHAR(255)
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	
SELECT projectId, projectTitle, projectStartdate, projectEnddate,isCompleted 
FROM [dbo].[projectDetails] 
INNER JOIN [dbo].[projectAssignment] 
ON projectDetails.projectId = projectAssignment.projectId
WHERE projectAssignment.projectLead = @email AND isDeleted = 0;
END;