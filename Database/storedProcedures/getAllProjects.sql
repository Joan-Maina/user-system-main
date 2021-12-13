CREATE OR ALTER PROCEDURE [dbo].[getallprojects]
(
    @email INT
)
AS
BEGIN
    SET NOCOUNT ON;
 SELECT  projectTitle, projectClient,projectStartdate, projectEnddate, isCompleted
    FROM [dbo].[projectDetails] INNER JOIN [dbo].[projectAssignment] ON projectDetails.projectId = projectAssignment.projectId WHERE 
    projectAssignment.projectLead = @email AND 
    isDeleted = 0;
END;
GO